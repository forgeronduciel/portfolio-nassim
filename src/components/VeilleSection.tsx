"use client";

import { useEffect, useState } from "react";
import {
  ExternalLink, Rss, Loader2, FileText, Cloud, TrendingUp, History,
  BookOpen, Server, Code, Monitor, Building2, Globe, Lock, Users,
  CheckCircle2, ArrowRight, Zap, Database, Shield, Wifi
} from "lucide-react";

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
};

/* ─────────────────────────────────────────────────────────────────
   ARTICLES SÉLECTIONNÉS
───────────────────────────────────────────────────────────────── */
const veilleData: EraBlock[] = [
  {
    era: "passé",
    label: "2023 → 2024",
    subtitle: "Montée en puissance du Cloud hybride & sécurité",
    icon: <History size={18} />,
    color: "from-slate-500 to-blue-600",
    items: [
      {
        title: "Les grandes tendances du Cloud en 2024 — Oodrive",
        summary:
          "En 2023, Gartner confirme que plus de 85 % des entreprises ont adopté une stratégie multi-cloud ou hybride. Les DSI combinent infrastructure on-premise et services cloud publics pour allier contrôle des données sensibles et flexibilité des workloads scalables.",
        url: "https://www.oodrive.com/fr/blog/actualites/transformation-numerique/cloud-tendances-2024/",
        source: "Oodrive — Tendances Cloud 2024",
        sourceUrl: "https://www.oodrive.com/",
      },
      {
        title: "Microsoft lance Azure AD renommé en Entra ID — vers l'identité cloud unifiée (2023)",
        summary:
          "Microsoft rebaptise Azure Active Directory en Microsoft Entra ID en 2023, signalant l'unification de la gestion des identités on-premise et cloud. Cette évolution illustre la tendance : l'AD local se synchronise avec le cloud pour permettre le SSO (Single Sign-On) sur toutes les applications SaaS.",
        url: "https://learn.microsoft.com/fr-fr/azure/active-directory/fundamentals/whatis",
        source: "Microsoft Learn",
        sourceUrl: "https://learn.microsoft.com/",
      },
      {
        title: "Prévisions de nuages pour 2024 : les grandes évolutions du Cloud — Eviden",
        summary:
          "L'ANSSI met à jour le référentiel SecNumCloud en 2024 pour qualifier les hébergeurs cloud garantissant la souveraineté des données françaises. Ce cadre impose que les données des OIV (Opérateurs d'Importance Vitale) ne soient accessibles à aucune juridiction étrangère, notamment face au Cloud Act américain.",
        url: "https://eviden.com/fr-fr/actualites/blog/previsions-de-nuages-pour-2024/",
        source: "Eviden — Prévisions Cloud 2024",
        sourceUrl: "https://eviden.com/",
      },
      {
        title: "Kubernetes atteint 96 % d'adoption en production — CNCF Annual Report 2023",
        summary:
          "Le rapport annuel de la CNCF (Cloud Native Computing Foundation) 2023 révèle que 96 % des organisations utilisent ou évaluent Kubernetes. La conteneurisation s'impose comme standard pour déployer des applications cloud-native, portables et scalables entre environnements on-premise et cloud public.",
        url: "https://www.cncf.io/reports/cncf-annual-report-2023/",
        source: "CNCF — Annual Report 2023",
        sourceUrl: "https://www.cncf.io/",
      },
    ],
  },
  {
    era: "présent",
    label: "2024 → 2025",
    subtitle: "IA générative, Zero Trust & coûts cloud",
    icon: <Cloud size={18} />,
    color: "from-indigo-500 to-purple-600",
    items: [
      {
        title: "Le boom du cloud en 2025 : IA générative, nouveaux usages et accélération des providers",
        summary:
          "En 2024, les trois grands fournisseurs cloud (AWS, Azure, GCP) intègrent nativement l'IA générative à leur catalogue. Les entreprises accèdent à GPT-4, Claude ou Gemini via des API cloud sans gérer d'infrastructure GPU. L'IA-as-a-Service devient un différenciateur majeur entre les providers.",
        url: "https://www.kalyptus.fr/le-boom-du-cloud-en-2025/",
        source: "Kalyptus",
        sourceUrl: "https://www.kalyptus.fr/",
      },
      {
        title: "2025 Cloud Highlights : IA, pannes majeures et futur de l'infrastructure",
        summary:
          "Forrester Research confirme en 2024 que le ZTNA (Zero Trust Network Access) dépasse le VPN comme mécanisme d'accès distant privilégié. Le principe 'ne jamais faire confiance, toujours vérifier' s'applique à chaque connexion : identité, appareil, contexte. Cloudflare Access, Zscaler et Microsoft Entra mènent ce marché.",
        url: "https://www.datacenterknowledge.com/cloud/2025-cloud-highlights-ai-outages-and-the-future-of-infrastructure",
        source: "Data Center Knowledge",
        sourceUrl: "https://www.datacenterknowledge.com/",
      },
      {
        title: "FinOps : les entreprises luttent contre l'explosion des coûts cloud en 2024-2025",
        summary:
          "La FinOps Foundation rapporte qu'en 2024, 82 % des entreprises ont dépassé leur budget cloud. La gestion des coûts (FinOps) devient une discipline à part entière : rightsizing des VMs, extinction automatique des ressources inactives, choix entre instances réservées et spot. AWS Cost Explorer et Azure Cost Management sont plébiscités.",
        url: "https://www.finops.org/introduction/what-is-finops/",
        source: "FinOps Foundation",
        sourceUrl: "https://www.finops.org/",
      },
      {
        title: "Cloudflare Workers et l'edge computing : le code au plus près des utilisateurs (2025)",
        summary:
          "Cloudflare Workers permet en 2025 d'exécuter du code JavaScript directement sur les 300+ points de présence Cloudflare dans le monde, à moins de 50 ms de n'importe quel utilisateur. Ce modèle d'edge computing réduit la latence et préfigure la décentralisation des applications cloud vers la périphérie du réseau.",
        url: "https://workers.cloudflare.com/",
        source: "Cloudflare Workers",
        sourceUrl: "https://www.cloudflare.com/",
      },
    ],
  },
  {
    era: "futur",
    label: "2026",
    subtitle: "Multi-Cloud, Edge, souveraineté & IA autonome",
    icon: <TrendingUp size={18} />,
    color: "from-emerald-500 to-teal-600",
    items: [
      {
        title: "Gartner prédit : 75 % des données traitées hors datacenter traditionnel d'ici 2026",
        summary:
          "Selon Gartner, l'edge computing va inverser la centralisation cloud : en 2026, trois quarts des données d'entreprise seront traitées à la périphérie (edge), sur des appareils IoT, des usines connectées ou des micro-datacenters locaux. Le cloud central devient le superviseur, non plus le processeur principal.",
        url: "https://www.lemagit.fr/actualites/252521010/Gartner-en-2025-75-des-donnees-dentreprise-seront-creees-a-la-peripherie-du-reseau",
        source: "LeMagIT — Gartner Edge",
        sourceUrl: "https://www.lemagit.fr/",
      },
      {
        title: "GAIA-X et la souveraineté numérique européenne : l'alternative aux GAFAM pour 2026",
        summary:
          "Le projet GAIA-X, porté par l'Union Européenne, vise à créer un écosystème cloud souverain d'ici 2026. Face au Cloud Act américain qui permet aux autorités US d'accéder aux données hébergées par des entreprises américaines (AWS, Azure, GCP), GAIA-X garantit que les données européennes restent sous juridiction européenne.",
        url: "https://www.lemagit.fr/actualites/366621954/Gaia-X-et-Data-Spaces-2025-annee-du-passage-a-lechelle",
        source: "LeMagIT — GAIA-X 2025",
        sourceUrl: "https://www.lemagit.fr/",
      },
      {
        title: "Agentic AI dans le Cloud : les agents IA autonomes gèrent l'infrastructure en 2026",
        summary:
          "En 2026, les agents IA (LLM autonomes) commencent à gérer des tâches d'administration cloud : provisioning automatique, détection d'anomalies, optimisation des coûts, réponse aux incidents. AWS, Azure et GCP intègrent des 'cloud copilots' capables d'exécuter des actions sur l'infrastructure sans intervention humaine.",
        url: "https://thenewstack.io/agentic-ai-control-plane-production/",
        source: "The New Stack — Agentic AI",
        sourceUrl: "https://thenewstack.io/",
      },
      {
        title: "Stratégie Multi-Cloud 2026 : Terraform, Kubernetes et la fin du vendor lock-in",
        summary:
          "Les grandes entreprises répartissent leurs workloads sur AWS, Azure et GCP simultanément pour éviter la dépendance à un fournisseur unique. Terraform (IaC), Kubernetes et les API ouvertes standardisent la portabilité. En 2026, le multi-cloud devient la norme pour les entreprises du CAC 40 et du Fortune 500.",
        url: "https://www.infoq.com/news/2026/03/jpmc-multicloud-product-strategy/",
        source: "InfoQ — Multi-Cloud 2026",
        sourceUrl: "https://www.infoq.com/",
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
  ];

  return (
    <div className="space-y-3">
      {layers.map((layer, i) => (
        <div
          key={layer.model}
          className="relative rounded-2xl border border-indigo-900/30 overflow-hidden"
          style={{ marginLeft: `${i * 16}px`, marginRight: `${(layers.length - 1 - i) * 16}px` }}
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
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {layer.examples.map((ex) => (
                    <span key={ex} className="text-xs bg-white/5 border border-white/10 text-slate-300 px-2 py-0.5 rounded-md">
                      {ex}
                    </span>
                  ))}
                </div>
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
          <div className="text-center text-xs font-semibold text-slate-400 mb-1">On-Premise (IaaS privé)</div>
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

      {/* 3 — Types de déploiement */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
            <Building2 size={16} />
          </div>
          <h3 className="text-xl font-bold text-white">Les 3 types de déploiement</h3>
        </div>
        <p className="text-slate-400 text-sm">
          Selon où sont hébergées les ressources et qui y a accès, on distingue trois modèles de déploiement.
          La majorité des entreprises aujourd'hui opèrent en <strong className="text-white">cloud hybride</strong>.
        </p>
        <DeploymentModelsSchema />
      </div>

      {/* 4 — Tableau des responsabilités */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 text-white">
            <Shield size={16} />
          </div>
          <h3 className="text-xl font-bold text-white">Modèle de responsabilité partagée</h3>
        </div>
        <p className="text-slate-400 text-sm">
          En cloud, la responsabilité de la sécurité et de la gestion est <strong className="text-white">partagée</strong> entre
          l'entreprise et le fournisseur. Ce tableau montre clairement qui gère quoi selon le modèle choisi.
        </p>
        <ResponsibilityTable />
      </div>

      {/* 5 — Architecture entreprise */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 text-white">
            <Building2 size={16} />
          </div>
          <h3 className="text-xl font-bold text-white">Comment ça fonctionne en entreprise ?</h3>
        </div>
        <p className="text-slate-400 text-sm">
          En pratique, une entreprise combine son infrastructure locale (on-premise) avec des services cloud publics.
          Les utilisateurs accèdent aux ressources via Internet, sécurisés par un firewall, un Active Directory et une
          authentification multi-facteur.
        </p>
        <EnterpriseArchitectureSchema />
      </div>

      {/* 6 — Chiffres clés */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 text-white">
            <TrendingUp size={16} />
          </div>
          <h3 className="text-xl font-bold text-white">Le Cloud en chiffres (2025)</h3>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { stat: "94%", desc: "des entreprises utilisent au moins un service cloud", color: "text-indigo-400", bg: "bg-indigo-500/10 border-indigo-700/30" },
            { stat: "678 Md$", desc: "de revenus mondiaux du marché cloud en 2024 (Gartner)", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-700/30" },
            { stat: "96%", desc: "des DevOps utilisent ou évaluent Kubernetes (CNCF 2024)", color: "text-violet-400", bg: "bg-violet-500/10 border-violet-700/30" },
            { stat: "75%", desc: "des données traitées à la périphérie (edge) d'ici 2025 (Gartner)", color: "text-amber-400", bg: "bg-amber-500/10 border-amber-700/30" },
          ].map((item) => (
            <div key={item.stat} className={`rounded-2xl border ${item.bg} p-5 text-center space-y-2`}>
              <p className={`text-3xl font-black ${item.color}`}>{item.stat}</p>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 7 — Lien avec mon lab */}
      <div className="rounded-2xl border border-teal-700/30 bg-gradient-to-br from-teal-950/30 to-emerald-950/20 p-6">
        <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
          <CheckCircle2 size={20} className="text-teal-400" />
          Lien avec mon infrastructure personnelle
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          Ma baie informatique reproduit une infrastructure de type <strong className="text-white">cloud hybride privé</strong>.
          L'hyperviseur <strong className="text-white">Proxmox VE</strong> joue le rôle d'un IaaS privé (comme Azure Stack ou AWS Outposts),
          hébergeant des services réels : Active Directory, NAS TrueNAS et Nextcloud en DMZ.
        </p>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { concept: "IaaS privé", impl: "Proxmox VE → VMs à la demande", icon: <Server size={14} />, color: "text-violet-400" },
            { concept: "Annuaire centralisé", impl: "Active Directory → Azure AD (équivalent)", icon: <Users size={14} />, color: "text-blue-400" },
            { concept: "SaaS privé", impl: "Nextcloud → alternative à OneDrive/SharePoint", icon: <Cloud size={14} />, color: "text-teal-400" },
          ].map((item) => (
            <div key={item.concept} className="rounded-xl bg-white/3 border border-white/10 p-3 space-y-1">
              <p className={`text-xs font-semibold flex items-center gap-1.5 ${item.color}`}>{item.icon}{item.concept}</p>
              <p className="text-xs text-slate-400 leading-snug">{item.impl}</p>
            </div>
          ))}
        </div>
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
                  { title: "2023 → 2024", text: "Le cloud hybride s'impose comme modèle dominant. Microsoft Entra ID unifie les identités. ANSSI renforce SecNumCloud. Kubernetes atteint 96 % d'adoption en production." },
                  { title: "2024 → 2025", text: "L'IA générative s'intègre nativement aux offres cloud (AWS Bedrock, Azure OpenAI). Le ZTNA remplace le VPN. La FinOps devient incontournable face à l'explosion des coûts cloud." },
                  { title: "2026", text: "L'edge computing traite 75 % des données hors datacenter. GAIA-X impose la souveraineté européenne. Les agents IA autonomes commencent à gérer l'infrastructure. Le multi-cloud devient la norme." },
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

        {/* ── Tab 3 : Flux RSS ─────────────────────────────────── */}
        {activeTab === "rss" && (
          <div className="space-y-4">
            <p className="text-slate-400 text-sm">
              Articles récents mis à jour automatiquement — Cloud Computing, AWS, Azure, GCP, DevOps, sécurité cloud.
            </p>
            {rssLoading && (
              <div className="flex items-center justify-center py-14 text-slate-400 gap-2">
                <Loader2 size={24} className="animate-spin" />
                <span className="text-sm">Chargement des flux…</span>
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
                    className="card-bg rounded-2xl p-5 border border-indigo-900/30 hover:border-indigo-500 transition-all duration-300 hover-lift group"
                  >
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-start justify-between gap-3">
                      <h4 className="font-semibold text-white group-hover:text-indigo-400 transition-colors line-clamp-2 text-sm">
                        {item.title}
                      </h4>
                      <ExternalLink size={16} className="text-indigo-400 flex-shrink-0 mt-0.5" />
                    </a>
                    {item.summary ? (
                      <p className="text-sm text-slate-400 mt-2 line-clamp-2">{item.summary}</p>
                    ) : (
                      <p className="text-sm text-slate-500 mt-2 italic">Lire l'article</p>
                    )}
                    <div className="text-xs text-slate-500 mt-3 flex items-center gap-2 flex-wrap">
                      <span>{item.source}</span>
                      {item.pubDate && (
                        <>
                          <span>·</span>
                          <time dateTime={item.pubDate}>{formatRssDate(item.pubDate)}</time>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
