import Parser from "rss-parser";
import { NextResponse } from "next/server";
import { rssFeeds } from "@/lib/rssFeeds";

export const runtime = "nodejs";
export const revalidate = 1800; // revalider toutes les 30 minutes

const parser = new Parser({
  headers: {
    "User-Agent": "Mozilla/5.0 (RSS Reader)",
    "Accept": "application/rss+xml, application/xml;q=0.9, */*;q=0.8",
  },
});

export type VeilleRssItem = {
  title: string;
  link: string;
  pubDate: string | null;
  source: string;
  summary: string | null;
};

export async function GET() {
  const feeds = rssFeeds.filter((f) => f.enabled !== false);

  function getSummary(item: { contentSnippet?: string; content?: string }): string | null {
    const snippet = item.contentSnippet?.trim();
    if (snippet && snippet.length > 0) return snippet.length > 200 ? `${snippet.slice(0, 197)}…` : snippet;
    const raw = item.content?.trim();
    if (!raw) return null;
    const text = raw.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    return text.length > 200 ? `${text.slice(0, 197)}…` : text || null;
  }

  const withTimeout = <T>(p: Promise<T>, ms: number): Promise<T> =>
    Promise.race([p, new Promise<never>((_, rej) => setTimeout(() => rej(new Error("timeout")), ms))]);

  const results = await Promise.allSettled(
    feeds.map(async (feed) => {
      const parsed = await withTimeout(parser.parseURL(feed.url), 5000);
      return (parsed.items || []).slice(0, 5).map((item) => ({
        title: (item.title ?? "Sans titre").trim(),
        link: item.link ?? "#",
        pubDate: item.pubDate ?? item.isoDate ?? null,
        source: feed.label,
        summary: getSummary(item as { contentSnippet?: string; content?: string }),
      }));
    })
  );

  const allItems: VeilleRssItem[] = [];
  for (const result of results) {
    if (result.status === "fulfilled") allItems.push(...result.value);
  }

  allItems.sort((a, b) => {
    const dateA = a.pubDate ? new Date(a.pubDate).getTime() : 0;
    const dateB = b.pubDate ? new Date(b.pubDate).getTime() : 0;
    return dateB - dateA;
  });

  const items = allItems.slice(0, 15);

  return NextResponse.json({ items });
}
