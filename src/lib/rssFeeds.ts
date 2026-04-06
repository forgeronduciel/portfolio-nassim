export type RssFeed = {
  id: string;
  label: string;
  url: string;
  websiteUrl: string;
  enabled?: boolean;
  category?: "cloud" | "security" | "devops" | "french";
};

// Flux RSS Cloud Computing, Sécurité & Infrastructure IT — monde entier
export const rssFeeds: RssFeed[] = [
  // ── Providers cloud officiels ──────────────────────────────────────────
  {
    id: "aws-blog",
    label: "AWS News Blog",
    url: "https://aws.amazon.com/blogs/aws/feed/",
    websiteUrl: "https://aws.amazon.com/blogs/aws/",
    category: "cloud",
    enabled: true,
  },
  {
    id: "google-cloud-blog",
    label: "Google Cloud Blog",
    url: "https://cloudblog.withgoogle.com/rss/",
    websiteUrl: "https://cloud.google.com/blog",
    category: "cloud",
    enabled: true,
  },
  {
    id: "cloudflare-blog",
    label: "Cloudflare Blog",
    url: "https://blog.cloudflare.com/rss/",
    websiteUrl: "https://blog.cloudflare.com",
    category: "cloud",
    enabled: true,
  },

  // ── Actualités cloud & infra ───────────────────────────────────────────
  {
    id: "the-register-cloud",
    label: "The Register — Cloud",
    url: "https://www.theregister.com/cloud/headlines.atom",
    websiteUrl: "https://www.theregister.com/cloud/",
    category: "cloud",
    enabled: true,
  },
  {
    id: "datacenter-knowledge",
    label: "Data Center Knowledge",
    url: "https://www.datacenterknowledge.com/rss.xml",
    websiteUrl: "https://www.datacenterknowledge.com",
    category: "cloud",
    enabled: true,
  },
  {
    id: "infoq-cloud",
    label: "InfoQ — Cloud",
    url: "https://feed.infoq.com/cloud",
    websiteUrl: "https://www.infoq.com/cloud/",
    category: "cloud",
    enabled: true,
  },
  {
    id: "techcrunch-cloud",
    label: "TechCrunch — Cloud",
    url: "https://techcrunch.com/tag/cloud/feed/",
    websiteUrl: "https://techcrunch.com/category/cloud-computing/",
    category: "cloud",
    enabled: true,
  },
  {
    id: "cncf-blog",
    label: "CNCF Blog",
    url: "https://www.cncf.io/feed/",
    websiteUrl: "https://www.cncf.io/blog/",
    category: "devops",
    enabled: true,
  },

  // ── Sécurité & failles ─────────────────────────────────────────────────
  {
    id: "thehackernews",
    label: "The Hacker News",
    url: "https://feeds.feedburner.com/TheHackersNews",
    websiteUrl: "https://thehackernews.com",
    category: "security",
    enabled: true,
  },
  {
    id: "bleepingcomputer",
    label: "BleepingComputer",
    url: "https://www.bleepingcomputer.com/feed/",
    websiteUrl: "https://www.bleepingcomputer.com",
    category: "security",
    enabled: true,
  },
  {
    id: "krebs-security",
    label: "Krebs on Security",
    url: "https://krebsonsecurity.com/feed/",
    websiteUrl: "https://krebsonsecurity.com",
    category: "security",
    enabled: true,
  },
  {
    id: "ms-security-blog",
    label: "Microsoft Security Blog",
    url: "https://www.microsoft.com/en-us/security/blog/feed/",
    websiteUrl: "https://www.microsoft.com/en-us/security/blog/",
    category: "security",
    enabled: true,
  },
  {
    id: "the-register-security",
    label: "The Register — Security",
    url: "https://www.theregister.com/security/headlines.atom",
    websiteUrl: "https://www.theregister.com/security/",
    category: "security",
    enabled: true,
  },

  // ── Sources françaises ─────────────────────────────────────────────────
  {
    id: "lmi-cloud",
    label: "Le Monde Informatique — Cloud",
    url: "https://www.lemondeinformatique.fr/flux-rss/thematique/cloud-computing/rss.xml",
    websiteUrl: "https://www.lemondeinformatique.fr/cloud-computing-3.html",
    category: "french",
    enabled: true,
  },
];
