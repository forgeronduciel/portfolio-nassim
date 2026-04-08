"use client";

import { useEffect, useState } from "react";
import {
  ExternalLink, Rss, Loader2, FileText, Cloud, TrendingUp, History,
  BookOpen, Server, Code, Monitor, Building2, Globe, Lock, Users,
  CheckCircle2, ArrowRight, Zap, Database, Shield, Wifi, Calendar
} from "lucide-react";
import { rssFeeds } from "@/lib/rssFeeds";

/* ─────────────────────────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────────────────────── */
type VeilleRssItem = {
  title: string;
  link: string;
  pubDate: string | null;
  source: string;
  summary: string | null;
};

type CuratedItem = {
  title: string;
  summary: string;
  url: string;
  source: string;
  sourceUrl: string;
};

type EraBlock = {
  era: "passé" | "présent" | "futur";
  label: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  items: CuratedItem[];
  banners?: CuratedItem[];
};

/* ─────────────────────────────────────────────────────────────────
   ARTICLES SÉLECTIONNÉS
───────────────────────────────────────────────────────────────── */
const veilleData: EraBlock[] = [
  {
    era: "passé",
    label: "2024",
    subtitle: "Le cloud explose avec l'IA — demande et consommation en flèche",
    icon: <History size={18} />,
    color: "from-slate-500 to-blue-600",
    items: [
      {
        title: "L'IA générative propulse la demande cloud à des niveaux records en 2024",
        summary:
          "En 2024, l'intégration massive de l'IA générative (ChatGPT, Copilot, Gemini) dans les entreprises provoque une explosion de la demande en ressources cloud. AWS, Azure et GCP enregistrent des croissances à deux chiffres : les data centers GPU tournent à pleine capacité et les délais de provisioning s'allongent. La consommation électrique des infrastructures cloud augmente de 30 % en un an selon l'AIE.",
        url: "https://www.oodrive.com/fr/blog/actualites/transformation-numerique/cloud-tendances-2024/",
        source: "Oodrive — Tendances Cloud 2024",
        sourceUrl: "https://www.oodrive.com/",
      },
      {
        title: "Cloud hybride et multi-cloud : la stratégie dominante des entreprises en 2024",
        summary:
          "Gartner confirme qu'en 2024, plus de 85 % des entreprises combinent cloud public et infrastructure on-premise. Les DSI cherchent à équilibrer flexibilité, contrôle des données sensibles et maîtrise des coûts. Le cloud hybride s'impose comme le modèle de référence, notamment dans les secteurs bancaire et industriel.",
        url: "https://eviden.com/fr-fr/actualites/blog/previsions-de-nuages-pour-2024/",
        source: "Eviden — Prévisions Cloud 2024",
        sourceUrl: "https://eviden.com/",
      },
    ],
    banners: [
      {
        title: "NVIDIA : des ventes de GPU record portées par la demande cloud IA en 2024",
        summary: "Les revenus data center de NVIDIA triplent en 2024 grâce à l'explosion de la demande en GPU H100/H200 pour l'entraînement des LLM.",
        url: "https://www.lemonde.fr/economie/article/2024/02/21/nvidia-des-resultats-records-portes-par-l-engouement-pour-l-ia_6218006_3234.html",
        source: "Le Monde",
        sourceUrl: "https://www.lemonde.fr/",
      },
      {
        title: "AWS, Azure, GCP : les hyperscalers investissent 200 Md$ dans les data centers IA",
        summary: "En 2024, les trois géants du cloud annoncent des plans d'investissement massifs pour construire de nouveaux data centers capables d'absorber la demande en calcul IA.",
        url: "https://www.lemagit.fr/actualites/366572568/AWS-Azure-Google-Cloud-les-investissements-explosent-pour-repondre-a-la-demande-IA",
        source: "LeMagIT",
        sourceUrl: "https://www.lemagit.fr/",
      },
    ],
  },
  {
    era: "présent",
    label: "2025",
    subtitle: "Explosion des budgets cloud — les entreprises cherchent à optimiser",
    icon: <Cloud size={18} />,
    color: "from-indigo-500 to-purple-600",
    items: [
      {
        title: "82 % des entreprises dépassent leur budget cloud en 2025 — la FinOps s'impose",
        summary:
          "La FinOps Foundation rapporte qu'en 2025, la quasi-totalité des grandes entreprises ont explosé leurs prévisions budgétaires cloud. L'IA as-a-Service (GPU à la demande, inférence LLM) représente désormais une part majeure des factures. La discipline FinOps — rightsizing, extinction automatique, instances réservées — devient incontournable pour contenir les dépenses.",
        url: "https://www.finops.org/introduction/what-is-finops/",
        source: "FinOps Foundation",
        sourceUrl: "https://www.finops.org/",
      },
      {
        title: "Le boom du cloud en 2025 : nouveaux usages, nouveaux acteurs, nouveaux risques",
        summary:
          "En 2025, les fournisseurs cloud rivalisent d'offres IA natives : AWS Bedrock, Azure OpenAI Service, Google Vertex AI. Les PME adoptent massivement le SaaS IA sans mesurer l'impact sur leur souveraineté des données. Parallèlement, la consommation énergétique des data centers devient un enjeu politique et réglementaire en Europe.",
        url: "https://www.kalyptus.fr/le-boom-du-cloud-en-2025/",
        source: "Kalyptus — Cloud 2025",
        sourceUrl: "https://www.kalyptus.fr/",
      },
    ],
    banners: [
      {
        title: "Le FinOps, ou comment maîtriser les coûts du cloud",
        summary: "Le rightsizing, les instances réservées et l'extinction automatique des ressources inutilisées deviennent les pratiques clés pour maîtriser les factures cloud en 2025.",
        url: "https://www.lemagit.fr/conseil/Le-FinOps-ou-comment-maitriser-les-couts-du-Cloud",
        source: "LeMagIT",
        sourceUrl: "https://www.lemagit.fr/",
      },
      {
        title: "Cloud souverain : un bras de fer serré entre OVHcloud et Scaleway",
        summary: "Face à l'hégémonie d'AWS, Azure et GCP, les acteurs européens misent sur la certification SecNumCloud et la conformité RGPD pour séduire les entreprises françaises.",
        url: "https://www.journaldunet.com/cloud/1540545-cloud-souverain-un-bras-de-fer-serre-entre-ovhcloud-et-scaleway/",
        source: "Journal du Net",
        sourceUrl: "https://www.journaldunet.com/",
      },
    ],
  },
  {
    era: "futur",
    label: "2026",
    subtitle: "Data Act européen — un nouveau cadre réglementaire pour le cloud",
    icon: <TrendingUp size={18} />,
    color: "from-emerald-500 to-teal-600",
    items: [
      {
        title: "Le Data Act européen entre en application : un tournant pour le cloud en 2026",
        summary:
          "Le règlement européen sur les données (Data Act), publié au Journal officiel de l'UE en décembre 2023 et applicable à partir de septembre 2025, impose de nouvelles obligations aux fournisseurs cloud. Les entreprises peuvent désormais exiger la portabilité de leurs données entre providers, mettre fin aux pratiques de verrouillage propriétaire (vendor lock-in) et s'assurer que les données générées sur leurs équipements leur appartiennent pleinement.",
        url: "https://www.cnil.fr/fr/reglement-donnees-data-act-nouveau-cadre-europeen-pour-partage-utilisation-donnees",
        source: "CNIL — Data Act 2026",
        sourceUrl: "https://www.cnil.fr/",
      },
      {
        title: "GAIA-X et la souveraineté numérique européenne face aux GAFAM",
        summary:
          "Le projet GAIA-X, porté par l'Union Européenne, prend de l'ampleur en 2026 pour créer un écosystème cloud souverain. Combiné au Data Act, il vise à garantir que les données des entreprises et citoyens européens restent sous juridiction européenne, face au Cloud Act américain qui permet aux autorités US d'accéder aux données hébergées chez AWS, Azure ou GCP.",
        url: "https://www.lemagit.fr/actualites/366621954/Gaia-X-et-Data-Spaces-2025-annee-du-passage-a-lechelle",
        source: "LeMagIT — GAIA-X 2026",
        sourceUrl: "https://www.lemagit.fr/",
      },
    ],
  },
];

const eraColorMap: Record<string, { bg: string; text: string; border: string }> = {
  passé: { bg: "bg-slate-500/10", text: "text-slate-300", border: "border-slate-700/40" },
  présent: { bg: "bg-indigo-500/10", text: "text-indigo-300", border: "border-indigo-700/40" },
  futur: { bg: "bg-emerald-500/10", text: "text-emerald-300", border: "border-emerald-700/40" },
};

/* ─────────────────────────────────────────────────────────────────
   SCHÉMA — MODÈLES DE SERVICE (IaaS / PaaS / SaaS)
───────────────────────────────────────────────────────────────── */
function ServiceModelsSchema() {
  const layers = [
    {
      model: "SaaS",
      full: "Software as a Service",
      desc: "L'utilisateur utilise directement l'application via un navigateur. Le fournisseur gère tout.",
      examples: ["Office 365", "Gmail", "Nextcloud", "Salesforce"],
      icon: <Monitor size={20} />,
      bg: "from-violet-600 to-purple-700",
      badge: "bg-violet-500/20 text-violet-200 border-violet-500/30",
      who: "Utilisateur",
    },
    {
      model: "PaaS",
      full: "Platform as a Service",
      desc: "Le développeur déploie son code. Le fournisseur gère l'infrastructure et le runtime.",
      examples: ["Azure App Service", "Heroku", "Google App Engine", "AWS Elastic Beanstalk"],
      icon: <Code size={20} />,
      bg: "from-blue-600 to-indigo-700",
      badge: "bg-blue-500/20 text-blue-200 border-blue-500/30",
      who: "Développeur",
    },
    {
      model: "IaaS",
      full: "Infrastructure as a Service",
      desc: "L'administrateur loue des ressources brutes (VMs, réseau, stockage) et gère l'OS.",
      examples: ["AWS EC2", "Azure Virtual Machines", "Proxmox", "OVH Cloud"],
      icon: <Server size={20} />,
      bg: "from-teal-600 to-emerald-700",
      badge: "bg-teal-500/20 text-teal-200 border-teal-500/30",
      who: "Administrateur",
    },
    {
      model: "On-Premise",
      full: "Infrastructure locale",
      desc: "L'entreprise héberge et gère elle-même tous ses serveurs, son réseau et ses données dans ses propres locaux.",
      examples: ["Serveurs physiques", "Active Directory", "NAS / SAN", "VMware / Hyper-V"],
      icon: <Database size={20} />,
      bg: "from-slate-500 to-slate-700",
      badge: "bg-slate-500/20 text-slate-200 border-slate-500/30",
      who: "Équipe IT",
    },
  ];

  return (
    <div className="space-y-3">
      {layers.map((layer, i) => (
        <div
          key={layer.model}
          className="relative rounded-2xl border border-indigo-900/30 overflow-hidden"
          style={{ marginLeft: `${i * 10}px`, marginRight: `${(layers.length - 1 - i) * 10}px` }}
        >
          {/* Gradient left bar */}
          <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${layer.bg}`} />
          <div className="pl-6 pr-5 py-4 bg-gradient-to-r from-[#1a1a2e] to-[#16162a]">
            <div className="flex items-start gap-4">
              {/* Model badge */}
              <div className={`flex items-center gap-2 shrink-0 px-3 py-1.5 rounded-xl border text-sm font-bold ${layer.badge}`}>
                {layer.icon}
                {layer.model}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm">{layer.full}</p>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">{layer.desc}</p>
              </div>
              <span className="text-xs text-slate-500 shrink-0 mt-1 hidden sm:block">→ {layer.who}</span>
            </div>
          </div>
        </div>
      ))}
      {/* Arrow down indicating stack */}
      <div className="flex justify-center">
        <div className="flex flex-col items-center gap-1 text-slate-500 text-xs">
          <span>↑ Plus le fournisseur gère</span>
          <span>↓ Plus le client contrôle</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   SCHÉMA — TYPES DE DÉPLOIEMENT
───────────────────────────────────────────────────────────────── */
function DeploymentModelsSchema() {
  const models = [
    {
      name: "Cloud Public",
      icon: <Globe size={28} />,
      color: "from-blue-500 to-cyan-600",
      border: "border-blue-500/40",
      bg: "bg-blue-500/5",
      badge: "bg-blue-500/15 text-blue-300",
      desc: "Ressources partagées entre plusieurs clients (multi-tenant), hébergées par un fournisseur tiers.",
      avantages: ["Coût réduit (pay-as-you-go)", "Scalabilité immédiate", "Aucune maintenance matérielle"],
      inconvenients: ["Données hors de l'entreprise", "Dépendance fournisseur", "Personnalisation limitée"],
      exemples: ["AWS", "Microsoft Azure", "Google Cloud Platform"],
    },
    {
      name: "Cloud Privé",
      icon: <Building2 size={28} />,
      color: "from-violet-500 to-purple-600",
      border: "border-violet-500/40",
      bg: "bg-violet-500/5",
      badge: "bg-violet-500/15 text-violet-300",
      desc: "Infrastructure dédiée à une seule organisation, on-premise ou hébergée en datacenter privé.",
      avantages: ["Contrôle total des données", "Sécurité maximale", "Personnalisation complète"],
      inconvenients: ["Coût d'investissement élevé", "Équipe IT dédiée", "Scalabilité limitée"],
      exemples: ["Proxmox VE", "VMware vSphere", "OpenStack", "Baie perso"],
    },
    {
      name: "Cloud Hybride",
      icon: <Wifi size={28} />,
      color: "from-emerald-500 to-teal-600",
      border: "border-emerald-500/40",
      bg: "bg-emerald-500/5",
      badge: "bg-emerald-500/15 text-emerald-300",
      desc: "Combinaison de cloud public et privé, interconnectés pour permettre le partage de données et d'applications.",
      avantages: ["Flexibilité optimale", "Données sensibles on-prem", "Scalabilité cloud public"],
      inconvenients: ["Complexité de gestion", "Sécurité inter-cloud", "Coûts de connectivité"],
      exemples: ["AD on-prem + Azure AD", "Nextcloud DMZ + Azure", "AWS Outposts"],
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {models.map((model) => (
        <div key={model.name} className={`rounded-2xl border ${model.border} ${model.bg} p-5 space-y-4`}>
          {/* Header */}
          <div className="flex items-center gap-3">
            <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${model.color} text-white shadow-lg`}>
              {model.icon}
            </div>
            <div>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${model.badge}`}>{model.name}</span>
            </div>
          </div>
          <p className="text-slate-300 text-xs leading-relaxed">{model.desc}</p>

          {/* Avantages */}
          <div>
            <p className="text-xs font-semibold text-emerald-400 mb-1.5">✓ Avantages</p>
            <ul className="space-y-1">
              {model.avantages.map((a) => (
                <li key={a} className="text-xs text-slate-400 flex items-start gap-1.5">
                  <CheckCircle2 size={11} className="text-emerald-500 mt-0.5 shrink-0" />{a}
                </li>
              ))}
            </ul>
          </div>

          {/* Inconvénients */}
          <div>
            <p className="text-xs font-semibold text-amber-400 mb-1.5">⚠ Limites</p>
            <ul className="space-y-1">
              {model.inconvenients.map((inc) => (
                <li key={inc} className="text-xs text-slate-400 flex items-start gap-1.5">
                  <span className="text-amber-500 mt-0.5 shrink-0 text-xs">›</span>{inc}
                </li>
              ))}
            </ul>
          </div>

          {/* Exemples */}
          <div className="flex flex-wrap gap-1">
            {model.exemples.map((ex) => (
              <span key={ex} className="text-xs bg-white/5 border border-white/10 text-slate-300 px-2 py-0.5 rounded-md">{ex}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   SCHÉMA — TABLEAU DES RESPONSABILITÉS
───────────────────────────────────────────────────────────────── */
function ResponsibilityTable() {
  const rows = [
    { layer: "Applications", onPrem: "client", iaas: "client", paas: "client", saas: "provider" },
    { layer: "Données", onPrem: "client", iaas: "client", paas: "client", saas: "provider" },
    { layer: "Runtime / Middleware", onPrem: "client", iaas: "client", paas: "provider", saas: "provider" },
    { layer: "Système d'exploitation", onPrem: "client", iaas: "client", paas: "provider", saas: "provider" },
    { layer: "Virtualisation", onPrem: "client", iaas: "provider", paas: "provider", saas: "provider" },
    { layer: "Serveurs physiques", onPrem: "client", iaas: "provider", paas: "provider", saas: "provider" },
    { layer: "Réseau & Stockage", onPrem: "client", iaas: "provider", paas: "provider", saas: "provider" },
  ];

  const cols = [
    { key: "onPrem", label: "On-Premise" },
    { key: "iaas", label: "IaaS" },
    { key: "paas", label: "PaaS" },
    { key: "saas", label: "SaaS" },
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-indigo-900/30">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-indigo-900/30">
            <th className="text-left py-3 px-4 text-slate-400 font-medium text-xs uppercase tracking-wide bg-indigo-950/40">Couche</th>
            {cols.map((col) => (
              <th key={col.key} className="py-3 px-4 text-center text-slate-300 font-semibold text-xs uppercase tracking-wide bg-indigo-950/40">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.layer}
              className={`border-b border-indigo-900/20 ${i % 2 === 0 ? "bg-[#1a1a2e]/60" : "bg-[#16162a]/40"}`}
            >
              <td className="py-3 px-4 text-slate-300 font-medium text-xs">{row.layer}</td>
              {cols.map((col) => {
                const val = row[col.key as keyof typeof row];
                return (
                  <td key={col.key} className="py-3 px-4 text-center">
                    {val === "client" ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-300 text-xs font-medium border border-blue-500/20">
                        <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
                        Vous
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 text-xs font-medium border border-emerald-500/20">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                        Fournisseur
                      </span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center gap-6 px-4 py-3 bg-indigo-950/20 border-t border-indigo-900/20">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="w-3 h-3 rounded-full bg-blue-400 inline-block" />
          Géré par vous (l'entreprise)
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
          Géré par le fournisseur cloud
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   SCHÉMA — ARCHITECTURE CLOUD EN ENTREPRISE
───────────────────────────────────────────────────────────────── */
function EnterpriseArchitectureSchema() {
  return (
    <div className="rounded-2xl border border-indigo-900/30 bg-gradient-to-br from-[#1a1a2e] to-[#16162a] p-6 overflow-x-auto">
      <p className="text-slate-400 text-xs mb-5 text-center">Architecture type d'une entreprise avec Cloud Hybride</p>

      {/* Flow diagram */}
      <div className="flex flex-col md:flex-row items-stretch gap-3 min-w-[600px]">

        {/* Bloc 1 — Utilisateurs */}
        <div className="flex flex-col gap-2 flex-1">
          <div className="text-center text-xs font-semibold text-slate-400 mb-1">Utilisateurs</div>
          {[
            { label: "Poste Windows", icon: <Monitor size={14} />, color: "border-blue-700/40 bg-blue-500/5" },
            { label: "Smartphone", icon: <Wifi size={14} />, color: "border-blue-700/40 bg-blue-500/5" },
            { label: "Télétravail", icon: <Globe size={14} />, color: "border-blue-700/40 bg-blue-500/5" },
          ].map((item) => (
            <div key={item.label} className={`flex items-center gap-2 rounded-lg border ${item.color} px-3 py-2 text-xs text-slate-300`}>
              <span className="text-blue-400">{item.icon}</span>{item.label}
            </div>
          ))}
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center px-1">
          <div className="flex flex-col items-center gap-1">
            <ArrowRight size={18} className="text-indigo-400 rotate-0 md:rotate-0 rotate-90" />
            <span className="text-xs text-slate-500">HTTPS / VPN</span>
          </div>
        </div>

        {/* Bloc 2 — Sécurité */}
        <div className="flex flex-col gap-2 flex-1">
          <div className="text-center text-xs font-semibold text-slate-400 mb-1">Sécurité & Identité</div>
          {[
            { label: "Firewall / ACL", icon: <Shield size={14} />, color: "border-amber-700/40 bg-amber-500/5" },
            { label: "Active Directory", icon: <Users size={14} />, color: "border-amber-700/40 bg-amber-500/5" },
            { label: "MFA / Zero Trust", icon: <Lock size={14} />, color: "border-amber-700/40 bg-amber-500/5" },
          ].map((item) => (
            <div key={item.label} className={`flex items-center gap-2 rounded-lg border ${item.color} px-3 py-2 text-xs text-slate-300`}>
              <span className="text-amber-400">{item.icon}</span>{item.label}
            </div>
          ))}
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center px-1">
          <div className="flex flex-col items-center gap-1">
            <ArrowRight size={18} className="text-indigo-400" />
            <span className="text-xs text-slate-500">Auth</span>
          </div>
        </div>

        {/* Bloc 3 — Services on-prem */}
        <div className="flex flex-col gap-2 flex-1">
          <div className="text-center text-xs font-semibold text-slate-400 mb-1">On-Premise (Infrastructure physique)</div>
          {[
            { label: "Proxmox / VMs", icon: <Server size={14} />, color: "border-violet-700/40 bg-violet-500/5" },
            { label: "NAS / Stockage", icon: <Database size={14} />, color: "border-violet-700/40 bg-violet-500/5" },
            { label: "Nextcloud DMZ", icon: <Cloud size={14} />, color: "border-violet-700/40 bg-violet-500/5" },
          ].map((item) => (
            <div key={item.label} className={`flex items-center gap-2 rounded-lg border ${item.color} px-3 py-2 text-xs text-slate-300`}>
              <span className="text-violet-400">{item.icon}</span>{item.label}
            </div>
          ))}
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center px-1">
          <div className="flex flex-col items-center gap-1">
            <ArrowRight size={18} className="text-indigo-400" />
            <span className="text-xs text-slate-500">Sync / API</span>
          </div>
        </div>

        {/* Bloc 4 — Cloud public */}
        <div className="flex flex-col gap-2 flex-1">
          <div className="text-center text-xs font-semibold text-slate-400 mb-1">Cloud Public (SaaS / PaaS)</div>
          {[
            { label: "Microsoft 365", icon: <Monitor size={14} />, color: "border-teal-700/40 bg-teal-500/5" },
            { label: "Azure AD / Entra", icon: <Users size={14} />, color: "border-teal-700/40 bg-teal-500/5" },
            { label: "AWS / GCP backup", icon: <Zap size={14} />, color: "border-teal-700/40 bg-teal-500/5" },
          ].map((item) => (
            <div key={item.label} className={`flex items-center gap-2 rounded-lg border ${item.color} px-3 py-2 text-xs text-slate-300`}>
              <span className="text-teal-400">{item.icon}</span>{item.label}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-5 pt-4 border-t border-indigo-900/20 flex flex-wrap gap-4 justify-center text-xs text-slate-500">
        <span className="flex items-center gap-1.5"><span className="w-3 h-0.5 bg-blue-400 inline-block" />Flux utilisateurs</span>
        <span className="flex items-center gap-1.5"><span className="w-3 h-0.5 bg-amber-400 inline-block" />Authentification</span>
        <span className="flex items-center gap-1.5"><span className="w-3 h-0.5 bg-teal-400 inline-block" />Synchronisation cloud</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   ONGLET COMPRENDRE LE CLOUD
───────────────────────────────────────────────────────────────── */
function CloudExplainer() {
  return (
    <div className="space-y-12">

      {/* 1 — Définition */}
      <div className="rounded-2xl border border-indigo-700/30 bg-gradient-to-br from-indigo-950/50 to-purple-950/30 p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg">
            <Cloud size={24} />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">Qu'est-ce que le Cloud Computing ?</h3>
            <p className="text-slate-300 leading-relaxed">
              Le <strong className="text-indigo-300">Cloud Computing</strong> est la mise à disposition de ressources informatiques —
              serveurs, stockage, bases de données, réseau, logiciels, intelligence artificielle — <strong className="text-white">via Internet, à la demande</strong>,
              avec une facturation à l'usage (pay-as-you-go).
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Au lieu d'acheter et de maintenir sa propre infrastructure physique, une entreprise loue ces ressources
              auprès d'un fournisseur (AWS, Azure, GCP…). L'accès se fait depuis n'importe quel appareil connecté,
              ce qui favorise la mobilité, la collaboration et la réduction des coûts d'investissement (CapEx → OpEx).
            </p>
            <div className="flex flex-wrap gap-3 mt-3">
              {[
                { label: "À la demande", icon: <Zap size={13} /> },
                { label: "Via Internet", icon: <Globe size={13} /> },
                { label: "Facturation usage", icon: <CheckCircle2 size={13} /> },
                { label: "Scalable", icon: <TrendingUp size={13} /> },
              ].map((tag) => (
                <span key={tag.label} className="flex items-center gap-1.5 text-xs bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 px-3 py-1 rounded-full">
                  {tag.icon}{tag.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2 — Les 3 modèles de service */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-blue-600 text-white">
            <Server size={16} />
          </div>
          <h3 className="text-xl font-bold text-white">Les 3 modèles de service</h3>
        </div>
        <p className="text-slate-400 text-sm">
          Le cloud se décline en trois niveaux de service selon ce que le fournisseur gère à votre place.
          Plus on monte dans la pile, moins l'entreprise gère d'infrastructure.
        </p>
        <ServiceModelsSchema />
      </div>

    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   UTILS
───────────────────────────────────────────────────────────────── */
function formatRssDate(pubDate: string | null): string {
  if (!pubDate) return "";
  try {
    const d = new Date(pubDate);
    return d.toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" });
  } catch {
    return "";
  }
}

/* ─────────────────────────────────────────────────────────────────
   COMPOSANT PRINCIPAL
───────────────────────────────────────────────────────────────── */
type VeilleTab = "explainer" | "classiques" | "rss";

export default function VeilleSection() {
  const [activeTab, setActiveTab] = useState<VeilleTab>("explainer");
  const [rssItems, setRssItems] = useState<VeilleRssItem[]>([]);
  const [rssLoading, setRssLoading] = useState(true);
  const [rssError, setRssError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/rss/veille")
      .then((res) => {
        if (!res.ok) throw new Error("Erreur chargement flux");
        return res.json();
      })
      .then((data) => {
        setRssItems(data.items ?? []);
        setRssError(null);
      })
      .catch(() => setRssError("Impossible de charger les articles du flux."))
      .finally(() => setRssLoading(false));
  }, []);

  const tabs: { id: VeilleTab; label: string; icon: React.ReactNode }[] = [
    { id: "explainer", label: "Comprendre le Cloud", icon: <BookOpen size={17} /> },
    { id: "classiques", label: "Articles sélectionnés", icon: <FileText size={17} /> },
    { id: "rss", label: "Flux RSS", icon: <Rss size={17} /> },
  ];

  return (
    <section id="veille" className="py-20 px-6 md:px-12">
      {/* Section header */}
      <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2 animate-slide-up">
        Veille Technologique
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mb-4" />
      <p className="text-slate-400 text-lg mb-8 max-w-2xl">
        Sujet : <span className="text-white font-semibold">le Cloud Computing</span> — définition, fonctionnement, enjeux en entreprise et perspectives d'avenir.
      </p>

      <div className="max-w-6xl space-y-6">
        {/* Onglets */}
        <div className="flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-indigo-950/50 border border-indigo-900/30 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-indigo-500/30 text-white shadow-sm"
                  : "text-slate-400 hover:text-white hover:bg-indigo-500/10"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Tab 1 : Comprendre le Cloud ─────────────────────── */}
        {activeTab === "explainer" && <CloudExplainer />}

        {/* ── Tab 2 : Articles sélectionnés ───────────────────── */}
        {activeTab === "classiques" && (
          <div className="space-y-10">
            <p className="text-slate-400 text-sm">
              Sélection manuelle d'articles structurés en 3 périodes clés pour comprendre l'évolution du Cloud Computing.
            </p>

            {veilleData.map((block) => {
              const colors = eraColorMap[block.era];
              return (
                <div key={block.era} className="space-y-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-xl ${colors.bg} ${colors.text} border ${colors.border} text-sm font-semibold`}>
                      {block.icon}
                      {block.label}
                    </div>
                    <p className="text-white font-semibold text-base">{block.subtitle}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {block.items.map((item) => (
                      <div
                        key={item.title}
                        className="card-bg rounded-2xl p-5 border border-indigo-900/30 hover:border-indigo-500/50 transition-all duration-300 hover-lift group flex flex-col"
                      >
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start justify-between gap-3"
                        >
                          <h4 className="font-semibold text-white group-hover:text-indigo-400 transition-colors text-sm leading-snug">
                            {item.title}
                          </h4>
                          <ExternalLink size={15} className="text-indigo-400 flex-shrink-0 mt-0.5" />
                        </a>
                        <p className="text-sm text-slate-400 mt-3 leading-relaxed flex-1">{item.summary}</p>
                        <div className="text-xs text-slate-500 mt-4 pt-3 border-t border-indigo-900/20">
                          Source :{" "}
                          <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">
                            {item.source}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* ── Petites banderoles cliquables ── */}
                  {block.banners && block.banners.length > 0 && (
                    <div className="flex flex-col gap-2 mt-1">
                      {block.banners.map((banner) => (
                        <a
                          key={banner.title}
                          href={banner.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group flex items-center gap-3 px-4 py-2.5 rounded-xl border ${colors.border} ${colors.bg} hover:border-slate-400/40 hover:bg-slate-500/15 transition-all duration-200`}
                        >
                          <span className={`shrink-0 w-1.5 h-1.5 rounded-full ${block.era === "passé" ? "bg-slate-400" : block.era === "présent" ? "bg-indigo-400" : "bg-emerald-400"}`} />
                          <span className={`text-xs font-medium ${colors.text} group-hover:text-white transition-colors truncate flex-1`}>
                            {banner.title}
                          </span>
                          <span className="shrink-0 text-[10px] text-slate-500 group-hover:text-slate-300 transition-colors hidden sm:block truncate max-w-[120px]">
                            {banner.source}
                          </span>
                          <ExternalLink size={12} className="shrink-0 text-slate-600 group-hover:text-slate-300 transition-colors" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Synthèse */}
            <div className="rounded-2xl border border-indigo-700/30 bg-gradient-to-br from-indigo-950/50 to-purple-950/30 p-6">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <Cloud size={20} className="text-indigo-400" />
                Synthèse de la veille
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-300">
                {[
                  { title: "2024", text: "L'IA générative propulse la demande cloud à des niveaux records. AWS, Azure et GCP saturent leurs data centers GPU. La consommation énergétique des infrastructures cloud bondit de 30 % selon l'AIE." },
                  { title: "2025", text: "82 % des entreprises explosent leur budget cloud. L'IA as-a-Service devient le premier poste de dépense. La FinOps s'impose comme discipline incontournable pour maîtriser les coûts." },
                  { title: "2026", text: "Le Data Act européen entre en application : portabilité des données, fin du vendor lock-in. GAIA-X renforce la souveraineté numérique face au Cloud Act américain." },
                ].map((item) => (
                  <div key={item.title} className="space-y-1">
                    <p className="font-semibold text-slate-200">{item.title}</p>
                    <p className="text-slate-400 leading-relaxed text-xs">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── Tab 3 : Flux RSS via Feedly ───────────────────────── */}
        {activeTab === "rss" && (
          <div className="space-y-6">

            {/* Feedly banner */}
            <div className="flex items-center justify-between gap-4 p-4 rounded-xl border border-[#2bb24c]/30 bg-[#2bb24c]/5">
              <div className="flex items-center gap-3">
                <img
                  src="https://feedly.com/favicon.ico"
                  alt="Feedly"
                  className="w-6 h-6 rounded"
                />
                <div>
                  <p className="text-sm font-semibold text-[#2bb24c]">Veille suivie via Feedly</p>
                  <p className="text-xs text-slate-400">Cloud · Sécurité · Infrastructure IT</p>
                </div>
              </div>
              <a
                href="https://feedly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2bb24c] text-white text-xs font-semibold hover:bg-[#24a044] transition-colors flex-shrink-0"
              >
                Ouvrir Feedly
                <ExternalLink size={12} />
              </a>
            </div>

            {/* Sources list */}
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">Sources suivies</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {rssFeeds.map((feed) => {
                  return (
                    <a
                      key={feed.id}
                      href={feed.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-indigo-950/40 border border-indigo-900/20 hover:border-[#2bb24c]/50 hover:bg-[#2bb24c]/5 transition-all group text-xs"
                    >
                      <span className="text-slate-300 group-hover:text-[#2bb24c] truncate">{feed.label}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-900/40 text-slate-500 group-hover:text-[#2bb24c] flex-shrink-0 uppercase tracking-wide">
                        {feed.category === "french" ? "FR" : feed.category}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Articles */}
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">Derniers articles</p>
              {rssLoading && (
                <div className="flex items-center justify-center py-14 text-slate-400 gap-2">
                  <Loader2 size={24} className="animate-spin" />
                  <span className="text-sm">Chargement…</span>
                </div>
              )}
              {rssError && (
                <div className="card-bg rounded-2xl p-6 border border-amber-900/40 text-amber-200/90 text-sm">
                  {rssError}
                </div>
              )}
              {!rssLoading && !rssError && rssItems.length === 0 && (
                <p className="text-slate-500 text-sm py-6">Aucun article disponible pour le moment.</p>
              )}
              {!rssLoading && !rssError && rssItems.length > 0 && (
                <div className="grid md:grid-cols-2 gap-4">
                  {rssItems.map((item, i) => (
                    <div
                      key={`${item.source}-${item.link}-${i}`}
                      className="relative card-bg rounded-2xl overflow-hidden border border-indigo-900/30 hover:border-[#2bb24c]/40 transition-all duration-300 hover-lift group flex flex-col"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2bb24c] to-teal-600" />
                      <div className="pl-5 pr-4 pt-4 pb-4 flex flex-col flex-1">
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-start justify-between gap-3">
                          <h4 className="font-semibold text-white group-hover:text-[#2bb24c] transition-colors line-clamp-2 text-sm leading-snug">
                            {item.title}
                          </h4>
                          <ExternalLink size={14} className="text-[#2bb24c]/50 group-hover:text-[#2bb24c] flex-shrink-0 mt-0.5 transition-colors" />
                        </a>
                        {item.summary && (
                          <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">{item.summary}</p>
                        )}
                        <div className="flex items-center justify-between gap-2 mt-auto pt-3 flex-wrap">
                          <span className="flex items-center gap-1.5 text-xs bg-[#2bb24c]/10 border border-[#2bb24c]/20 text-[#2bb24c]/80 px-2 py-0.5 rounded-full truncate max-w-[180px]">
                            <Rss size={10} />
                            {item.source}
                          </span>
                          {item.pubDate && (
                            <span className="flex items-center gap-1 text-xs text-slate-500">
                              <Calendar size={11} />
                              <time dateTime={item.pubDate}>{formatRssDate(item.pubDate)}</time>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        )}
      </div>
    </section>
  );
}
