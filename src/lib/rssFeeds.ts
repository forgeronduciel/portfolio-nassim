export type RssFeed = {
  id: string;
  label: string;
  url: string;
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
    category: "cloud",
    enabled: true,
  },
  {
    id: "azure-blog",
    label: "Microsoft Azure Blog",
    url: "https://azure.microsoft.com/en-us/blog/feed/",
    category: "cloud",
    enabled: true,
  },
  {
    id: "google-cloud-blog",
    label: "Google Cloud Blog",
    url: "https://cloudblog.withgoogle.com/rss/",
    category: "cloud",
    enabled: true,
  },
  {
    id: "cloudflare-blog",
    label: "Cloudflare Blog",
    url: "https://blog.cloudflare.com/rss/",
    category: "cloud",
    enabled: true,
  },

  // ── Actualités cloud & infra ───────────────────────────────────────────
  {
    id: "the-register-cloud",
    label: "The Register — Cloud",
    url: "https://www.theregister.com/cloud/headlines.atom",
    category: "cloud",
    enabled: true,
  },
  {
    id: "datacenter-knowledge",
    label: "Data Center Knowledge",
    url: "https://www.datacenterknowledge.com/rss.xml",
    category: "cloud",
    enabled: true,
  },
  {
    id: "infoq-cloud",
    label: "InfoQ — Cloud",
    url: "https://feed.infoq.com/cloud",
    category: "cloud",
    enabled: true,
  },
  {
    id: "techcrunch-cloud",
    label: "TechCrunch — Cloud",
    url: "https://techcrunch.com/tag/cloud/feed/",
    category: "cloud",
    enabled: true,
  },
  {
    id: "cncf-blog",
    label: "CNCF Blog",
    url: "https://www.cncf.io/feed/",
    category: "devops",
    enabled: true,
  },

  // ── Sécurité & failles ─────────────────────────────────────────────────
  {
    id: "thehackernews",
    label: "The Hacker News",
    url: "https://feeds.feedburner.com/TheHackersNews",
    category: "security",
    enabled: true,
  },
  {
    id: "bleepingcomputer",
    label: "BleepingComputer",
    url: "https://www.bleepingcomputer.com/feed/",
    category: "security",
    enabled: true,
  },
  {
    id: "krebs-security",
    label: "Krebs on Security",
    url: "https://krebsonsecurity.com/feed/",
    category: "security",
    enabled: true,
  },
  {
    id: "ms-security-blog",
    label: "Microsoft Security Blog",
    url: "https://www.microsoft.com/en-us/security/blog/feed/",
    category: "security",
    enabled: true,
  },
  {
    id: "the-register-security",
    label: "The Register — Security",
    url: "https://www.theregister.com/security/headlines.atom",
    category: "security",
    enabled: true,
  },

  // ── Sources françaises ─────────────────────────────────────────────────
  {
    id: "cert-fr",
    label: "CERT-FR — Alertes",
    url: "https://www.cert.fr/avis/rss.xml",
    category: "french",
    enabled: true,
  },
  {
    id: "lmi-cloud",
    label: "Le Monde Informatique — Cloud",
    url: "https://www.lemondeinformatique.fr/flux-rss/thematique/cloud-computing/rss.xml",
    category: "french",
    enabled: true,
  },
];
