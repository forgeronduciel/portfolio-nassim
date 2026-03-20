import Parser from "rss-parser";
import { NextResponse } from "next/server";
import { rssFeeds } from "@/lib/rssFeeds";

export const runtime = "nodejs";

const parser = new Parser({
  headers: {
    "User-Agent": "Mozilla/5.0 (RSS Reader)",
    "Accept": "application/rss+xml, application/xml;q=0.9, */*;q=0.8",
  },
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "Missing url" }, { status: 400 });
  }

  const allowedUrls = new Set(rssFeeds.map((feed) => feed.url));
  if (!allowedUrls.has(url)) {
    return NextResponse.json({ error: "URL not allowed" }, { status: 400 });
  }

  try {
    const feed = await parser.parseURL(url);
    const items = (feed.items || []).slice(0, 12).map((item) => ({
      title: item.title ?? "Sans titre",
      link: item.link ?? "#",
      pubDate: item.pubDate ?? item.isoDate ?? null,
    }));

    return NextResponse.json({
      title: feed.title ?? "Flux RSS",
      items,
    });
  } catch (error) {
    return NextResponse.json({ error: "Fetch failed" }, { status: 500 });
  }
}
