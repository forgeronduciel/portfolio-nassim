"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FileText, Table2, Download, ExternalLink, X } from "lucide-react";

const ANNEXE_PDF  = "/annexe-6-1-tableau-synthese.pdf";
const ANNEXE_XLSX = "/annexe-6-1-tableau-synthese.xlsx";

const COMPETENCES_NOMS = [
  "Gérer le patrimoine informatique",
  "Répondre aux incidents et demandes d'assistance et d'évolution",
  "Développer la présence en ligne de l'organisation",
  "Travailler en mode projet",
  "Mettre à disposition des utilisateurs un service informatique",
  "Organiser son développement professionnel",
];

const SOUS_CRITERES = [
  [
    "Recenser et identifier les ressources numériques",
    "Exploiter des référentiels, normes et standards adoptés par le prestataire informatique",
    "Mettre en place et vérifier les niveaux d'habilitation associés à un service",
    "Vérifier les conditions de la continuité d'un service informatique",
    "Gérer des sauvegardes",
    "Vérifier le respect des règles d'utilisation des ressources numériques",
  ],
  [
    "Collecter, suivre et orienter des demandes",
    "Traiter des demandes concernant les services réseau et système, applicatifs",
    "Traiter des demandes concernant les applications",
  ],
  [
    "Participer à la valorisation de l'image de l'organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques",
    "Référencer les services en ligne de l'organisation et mesurer leur visibilité",
    "Participer à l'évolution d'un site Web exploitant les données de l'organisation",
  ],
  [
    "Analyser les objectifs et les modalités d'organisation d'un projet",
    "Planifier les activités",
    "Évaluer les indicateurs de suivi d'un projet et analyser les écarts",
  ],
  [
    "Réaliser les tests d'intégration et d'acceptation d'un service",
    "Déployer un service",
    "Accompagner les utilisateurs dans la mise en place d'un service",
  ],
  [
    "Mettre en place son environnement d'apprentissage personnel",
    "Mettre en œuvre des outils et stratégies de veille informationnelle",
    "Gérer son identité professionnelle",
    "Développer son projet professionnel",
  ],
];

type Row = { realisation: string; periode: string; competences: boolean[] };

const FORMATION: Row[] = [
  { realisation: "Veille technologique", periode: "2024-2026", competences: [false, false, false, false, false, true] },
  { realisation: "Projet E6 : Infrastructure AD + Nextcloud", periode: "2025-2026", competences: [true, true, false, false, true, false] },
  { realisation: "Projet E6 : Serveur NAS TrueNAS", periode: "2025-2026", competences: [true, true, false, false, true, false] },
  { realisation: "Portfolio", periode: "2025-2026", competences: [false, false, true, false, false, true] },
  { realisation: "SSO (Single Sign-On)", periode: "2025-2026", competences: [true, true, false, false, true, false] },
];

const PREMIERE_ANNEE: Row[] = [
  { realisation: "Support informatique (compte utilisateur)", periode: "2024-2025", competences: [true, true, false, false, false, false] },
  { realisation: "Support téléphonique", periode: "2024-2025", competences: [true, false, false, false, false, false] },
  { realisation: "Outil de ticketing", periode: "2024-2025", competences: [true, true, false, false, true, false] },
];

const SECONDE_ANNEE: Row[] = [
  { realisation: "Masterisation PC", periode: "2025-2026", competences: [true, false, false, false, true, false] },
  { realisation: "Support technique", periode: "2025-2026", competences: [true, false, false, false, true, false] },
  { realisation: "Outil de ticketing", periode: "2025-2026", competences: [true, true, false, false, true, false] },
  { realisation: "Préparation événement", periode: "2025-2026", competences: [false, false, false, false, false, false] },
  { realisation: "Gestion stock", periode: "2025-2026", competences: [true, true, false, false, false, false] },
];

type TabType = "tableau" | "annexe";

function SectionRow({ label }: { label: string }) {
  return (
    <tr>
      <td
        colSpan={8}
        className="px-4 py-2 border-y border-blue-800/40"
        style={{ backgroundColor: "#112240" }}
      >
        <span className="font-bold uppercase tracking-widest text-blue-300" style={{ fontSize: "10px" }}>
          {label}
        </span>
      </td>
    </tr>
  );
}

function DataRows({ rows }: { rows: Row[] }) {
  return (
    <>
      {rows.map((row, i) => (
        <tr
          key={i}
          className="border-b border-slate-700/30 hover:bg-white/[0.03] transition-colors"
        >
          <td className="px-3 py-2.5 font-semibold text-white border-r border-slate-700/30" style={{ fontSize: "12px" }}>
            {row.realisation}
          </td>
          <td className="px-2 py-2.5 text-center text-slate-400 border-r border-slate-700/30 whitespace-nowrap" style={{ fontSize: "10px" }}>
            {row.periode}
          </td>
          {row.competences.map((checked, j) => (
            <td key={j} className="py-2.5 text-center border-r border-slate-700/20 last:border-r-0">
              {checked && (
                <span className="font-extrabold text-cyan-300" style={{ fontSize: "13px" }}>X</span>
              )}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

function TableauCompetences() {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-600/30 shadow-xl">
      <table
        className="border-collapse bg-[#0b1829] text-sm"
        style={{ minWidth: "980px", width: "100%", tableLayout: "fixed" }}
      >
        <colgroup>
          <col style={{ width: "22%" }} />
          <col style={{ width: "7%" }} />
          <col style={{ width: "11.83%" }} />
          <col style={{ width: "11.83%" }} />
          <col style={{ width: "11.83%" }} />
          <col style={{ width: "11.83%" }} />
          <col style={{ width: "11.83%" }} />
          <col style={{ width: "11.83%" }} />
        </colgroup>
        <thead>
          {/* ── LIGNE 1 : cellule diagonale + Période (rowSpan=2) + noms compétences ── */}
          <tr>
            {/* Cellule diagonale : rowSpan=2 */}
            <th
              rowSpan={2}
              className="relative border-r border-slate-600/40 bg-[#0b1829] p-0"
              style={{ verticalAlign: "bottom" }}
            >
              <div className="relative" style={{ height: "190px" }}>
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                  <line x1="0" y1="0" x2="100%" y2="100%" stroke="rgba(148,163,184,0.3)" strokeWidth="1" />
                </svg>
                <span
                  className="absolute italic text-slate-400 text-right leading-snug"
                  style={{ top: "10px", right: "8px", fontSize: "9px", maxWidth: "55%" }}
                >
                  Compétences<br />mises en œuvre
                </span>
                <div className="absolute text-left" style={{ bottom: "10px", left: "8px" }}>
                  <span className="block font-bold text-white" style={{ fontSize: "10px" }}>Réalisations</span>
                  <span className="block italic text-slate-500 mt-0.5" style={{ fontSize: "8px" }}>
                    (intitulé et liste des documents)
                  </span>
                </div>
              </div>
            </th>

            {/* Période : rowSpan=2 — colonne indépendante */}
            <th
              rowSpan={2}
              className="text-center font-bold text-slate-300 border-r border-l border-slate-600/40 bg-[#0b1829] px-1"
              style={{ fontSize: "9px", verticalAlign: "middle" }}
            >
              Période
            </th>

            {/* Noms des 6 compétences */}
            {COMPETENCES_NOMS.map((nom, i) => (
              <th
                key={i}
                className="px-1 py-2 text-center font-bold text-white border-l border-b border-slate-600/40 bg-[#0e1e3a]"
                style={{ fontSize: "10px", verticalAlign: "bottom", lineHeight: "1.3" }}
              >
                {nom}
              </th>
            ))}
          </tr>

          {/* ── LIGNE 2 : sous-critères verticaux ── */}
          <tr style={{ borderBottom: "2px solid rgba(100,116,139,0.5)" }}>
            {SOUS_CRITERES.map((criteres, i) => (
              <th
                key={i}
                className="border-l border-slate-600/30 bg-[#080e1c]"
                style={{ height: "130px", padding: "4px 2px", verticalAlign: "bottom" }}
              >
                <div style={{ display: "flex", flexDirection: "row", gap: "3px", justifyContent: "center", alignItems: "flex-end", height: "100%" }}>
                  {criteres.map((c, j) => (
                    <span
                      key={j}
                      className="text-slate-400"
                      style={{
                        writingMode: "vertical-lr",
                        transform: "rotate(180deg)",
                        fontSize: "8px",
                        lineHeight: "1.15",
                        whiteSpace: "normal",
                        wordBreak: "break-word",
                        maxHeight: "122px",
                        overflow: "hidden",
                        display: "block",
                        flexShrink: 1,
                      }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          <SectionRow label="Réalisations en cours de formation" />
          <DataRows rows={FORMATION} />
          <SectionRow label="Réalisations en milieu professionnel en cours de première année" />
          <DataRows rows={PREMIERE_ANNEE} />
          <SectionRow label="Réalisations en milieu professionnel en cours de seconde année" />
          <DataRows rows={SECONDE_ANNEE} />
        </tbody>
      </table>
    </div>
  );
}

export default function RealisationsSection() {
  const [activeTab, setActiveTab] = useState<TabType>("tableau");
  const [annexeModalOpen, setAnnexeModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  return (
    <section id="realisations" className="py-20 px-6 md:px-12 bg-indigo-950/20">
      <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2 animate-slide-up">
        Tableau de compétences
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mb-8" />

      <div className="max-w-6xl space-y-6">
        {/* Onglets comme pour le flux RSS */}
        <div className="flex flex-wrap gap-2 p-1 rounded-xl bg-indigo-950/50 border border-indigo-900/30 w-fit">
          <button
            type="button"
            onClick={() => setActiveTab("tableau")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === "tableau"
                ? "bg-indigo-500/30 text-white shadow-sm"
                : "text-slate-400 hover:text-white hover:bg-indigo-500/10"
            }`}
            aria-pressed={activeTab === "tableau"}
            aria-label="Voir le tableau récapitulatif"
          >
            <Table2 size={18} />
            Tableau récapitulatif
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("annexe")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === "annexe"
                ? "bg-indigo-500/30 text-white shadow-sm"
                : "text-slate-400 hover:text-white hover:bg-indigo-500/10"
            }`}
            aria-pressed={activeTab === "annexe"}
            aria-label="Voir l'annexe 6-1"
          >
            <FileText size={18} />
            Annexe 6-1 (PDF)
          </button>
        </div>

        {activeTab === "tableau" && <TableauCompetences />}

        {activeTab === "annexe" && (
          <div className="space-y-6">
            <p className="text-slate-400 text-sm">
              Tableau de synthèse des compétences (Annexe 6-1) — cliquez pour visualiser ou téléchargez le fichier Excel.
            </p>

            {/* Carte aperçu — même système que le CV */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => setAnnexeModalOpen(true)}
              onKeyDown={(e) => e.key === "Enter" && setAnnexeModalOpen(true)}
              className="relative max-w-xs mx-auto aspect-[3/4] bg-indigo-950/50 rounded-xl border-2 border-indigo-500/40 overflow-hidden hover:border-indigo-500 transition-all duration-300 group cursor-pointer"
            >
              <object
                data={ANNEXE_PDF}
                type="application/pdf"
                className="absolute inset-0 w-full h-full opacity-60 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none"
                aria-label="Annexe 6-1 Tableau de synthèse"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/95 via-[#1a1a2e]/40 to-transparent" />
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <FileText size={48} className="mb-3 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-sm font-semibold text-white">Annexe 6-1</p>
                <p className="text-xs text-slate-400 mt-1">Tableau de synthèse E5</p>
                <span className="mt-3 text-xs text-indigo-300 flex items-center gap-1">
                  <ExternalLink size={12} />
                  Cliquez pour agrandir
                </span>
              </div>
            </div>

            {/* Bouton téléchargement xlsx */}
            <a
              href={ANNEXE_XLSX}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.02]"
            >
              <Download size={18} />
              Télécharger le tableau (.xlsx)
            </a>

            {/* Modal plein écran — même système que le CV */}
            {annexeModalOpen && mounted && createPortal(
              <div
                className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                onClick={() => setAnnexeModalOpen(false)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Escape" && setAnnexeModalOpen(false)}
                aria-label="Fermer"
              >
                <div
                  className="relative w-full max-w-4xl h-[90vh] bg-[#1a1a2e] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
                  onClick={(e) => e.stopPropagation()}
                  role="presentation"
                >
                  <div className="flex items-center justify-between gap-3 flex-shrink-0 p-3 border-b border-indigo-900/30">
                    <div className="flex items-center gap-2">
                      <a href={ANNEXE_PDF} target="_blank" rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-indigo-500/20 hover:bg-indigo-500/40 text-white text-sm flex items-center gap-2 transition-colors">
                        <ExternalLink size={16} />Ouvrir dans un nouvel onglet
                      </a>
                      <a href={ANNEXE_XLSX} download
                        className="px-4 py-2 rounded-xl bg-indigo-500/20 hover:bg-indigo-500/40 text-white text-sm flex items-center gap-2 transition-colors">
                        <Download size={16} />Télécharger (.xlsx)
                      </a>
                    </div>
                    <button type="button" onClick={() => setAnnexeModalOpen(false)}
                      className="p-2 rounded-xl bg-indigo-500/20 hover:bg-indigo-500/40 text-white transition-colors" aria-label="Fermer">
                      <X size={20} />
                    </button>
                  </div>
                  <div className="flex-1 min-h-0 relative">
                    <object data={ANNEXE_PDF} type="application/pdf"
                      className="absolute inset-0 w-full h-full" aria-label="Annexe 6-1">
                      <div className="flex flex-col items-center justify-center h-full gap-4 text-slate-400 p-8 text-center">
                        <FileText size={48} className="text-indigo-400" />
                        <p>Votre navigateur ne peut pas afficher ce PDF directement.</p>
                        <a href={ANNEXE_PDF} target="_blank" rel="noopener noreferrer"
                          className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold">
                          Ouvrir l'Annexe 6-1
                        </a>
                      </div>
                    </object>
                  </div>
                </div>
              </div>,
              document.body
            )}
          </div>
        )}
      </div>
    </section>
  );
}
