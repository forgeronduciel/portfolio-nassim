"use client";

import { useState } from "react";
import { Check, Square, FileText, Table2, Download, Maximize2 } from "lucide-react";

const ANNEXE_PDF = "/annexe-6-1-tableau-synthese.pdf";

const COMPETENCES = [
  "C1 Gérer le patrimoine informatique",
  "C2 Répondre aux incidents et aux demandes d'assistance et d'évolution",
  "C3 Développer la présence en ligne de l'organisation",
  "C4 Travailler en mode projet",
  "C5 Mettre à disposition des utilisateurs un service informatique",
  "C6 Organiser son développement professionnel",
] as const;

type CompetenceCheck = (boolean | undefined)[];

const REALISATIONS_PREMIERE_ANNEE = [
  {
    realisation: "Dépannage utilisateur",
    periode: "2024-2025",
    competences: [false, true, false, false, false, false] as CompetenceCheck,
  },
  {
    realisation: "Aide utilisateur logiciel métier",
    periode: "2024-2025",
    competences: [false, true, false, false, false, false] as CompetenceCheck,
  },
];

const REALISATIONS_SECONDE_ANNEE = [
  {
    realisation: "Dépannage utilisateur (continuation)",
    periode: "2025-2026",
    competences: [false, true, false, false, false, false] as CompetenceCheck,
  },
  {
    realisation: "Réseau - Changement de matériel, configuration ordinateur",
    periode: "2025-2026",
    competences: [true, true, false, false, true, false] as CompetenceCheck,
  },
  {
    realisation: "Réparation PC portable, masterisation, dépannage environnement utilisateur",
    periode: "2025-2026",
    competences: [true, true, false, false, true, false] as CompetenceCheck,
  },
  {
    realisation: "Configuration et dépannage photocopieur",
    periode: "2025-2026",
    competences: [true, true, false, false, true, false] as CompetenceCheck,
  },
  {
    realisation: "Aide utilisateur logiciel métier",
    periode: "2025-2026",
    competences: [false, true, false, false, false, false] as CompetenceCheck,
  },
  {
    realisation: "Configuration téléphone professionnel avec environnement sécurisé (VPN, BlackBerry, Microsoft Authenticator)",
    periode: "2025-2026",
    competences: [true, false, false, false, true, false] as CompetenceCheck,
  },
  {
    realisation: "Réglage VPN, PC très sécurisé (PC virtualisé sur serveurs distants pour transactions bancaires)",
    periode: "2025-2026",
    competences: [true, false, false, false, true, false] as CompetenceCheck,
  },
];

type TabType = "tableau" | "annexe";

function RealisationsTable({
  rows,
  caption,
}: {
  rows: typeof REALISATIONS_PREMIERE_ANNEE;
  caption: string;
}) {
  return (
    <div className="overflow-x-auto">
      <div className="rounded-2xl border border-indigo-900/30 overflow-hidden bg-indigo-950/30">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-indigo-900/50 border-b border-indigo-900/30">
              <th className="p-3 text-xs font-semibold text-slate-300 uppercase tracking-wider w-[32%]">
                Réalisations professionnelles
              </th>
              <th className="p-3 text-xs font-semibold text-slate-300 uppercase tracking-wider w-[14%]">
                Période
              </th>
              {COMPETENCES.map((_, i) => (
                <th key={i} className="p-2 text-xs font-semibold text-indigo-300 uppercase text-center w-[9%]">
                  C{i + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className="border-b border-indigo-900/20 hover:bg-indigo-900/20 transition-colors last:border-b-0"
              >
                <td className="p-3 text-sm text-white">{row.realisation}</td>
                <td className="p-3 text-sm text-slate-400 whitespace-nowrap">{row.periode}</td>
                {row.competences.map((checked, j) => (
                  <td key={j} className="p-2 text-center">
                    {checked ? (
                      <Check size={18} className="inline text-emerald-400" aria-hidden />
                    ) : (
                      <Square size={18} className="inline text-slate-600" aria-hidden />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-slate-500 mt-3">{caption}</p>
    </div>
  );
}

export default function RealisationsSection() {
  const [activeTab, setActiveTab] = useState<TabType>("tableau");

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

        {activeTab === "tableau" && (
          <div className="space-y-8">
            <p className="text-slate-400 text-sm">
              Intitulé et liste des documents et productions associés (milieu professionnel).
            </p>
            <div>
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                Réalisations en milieu professionnel — première année
              </h3>
              <RealisationsTable
                rows={REALISATIONS_PREMIERE_ANNEE}
                caption="Période 2024-2025."
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                Réalisations en milieu professionnel — seconde année
              </h3>
              <RealisationsTable
                rows={REALISATIONS_SECONDE_ANNEE}
                caption="Période 2025-2026."
              />
            </div>
          </div>
        )}

        {activeTab === "annexe" && (
          <div className="space-y-6">
            <p className="text-slate-400 text-sm">
              Tableau de synthèse des compétences (Annexe 6-1) — à consulter ou télécharger.
            </p>
            <div
              role="button"
              tabIndex={0}
              onClick={() => window.open(ANNEXE_PDF, "_blank")}
              onKeyDown={(e) => e.key === "Enter" && window.open(ANNEXE_PDF, "_blank")}
              className="relative max-w-xs mx-auto aspect-[3/4] bg-indigo-950/50 rounded-xl border-2 border-indigo-500/40 overflow-hidden hover:border-indigo-500 transition-all duration-300 group cursor-pointer"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <div className="w-20 h-20 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors">
                  <FileText size={40} className="text-indigo-400" />
                </div>
                <h4 className="font-bold text-white text-lg">Annexe 6-1</h4>
                <p className="text-sm text-slate-500 mt-2">Tableau de synthèse E5</p>
                <span className="mt-4 text-xs text-indigo-300 flex items-center gap-2">
                  <Maximize2 size={14} />
                  Cliquez pour agrandir
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/95 via-[#1a1a2e]/40 to-transparent" />
            </div>
            <a
              href={ANNEXE_PDF}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-500/20 hover:bg-indigo-500/40 text-white font-medium transition-colors"
            >
              <Download size={20} />
              Télécharger le tableau (PDF)
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
