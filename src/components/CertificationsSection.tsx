"use client";

import { useState } from "react";
import { Award, FileText, ExternalLink, Shield, X, Printer } from "lucide-react";

const RGPD_CERTIFICATES = [
  { id: 1, label: "Certificat RGPD 1", file: "Certificat_1.pdf" },
  { id: 2, label: "Certificat RGPD 2", file: "Certificat_2.pdf" },
  { id: 3, label: "Certificat RGPD 3", file: "Certificat_3.pdf" },
  { id: 4, label: "Certificat RGPD 4", file: "Certificat_4.pdf" },
  { id: 5, label: "Certificat RGPD 5", file: "Certificat_5.pdf" },
] as const;

const CERTIFICATS_BASE = "/certificats-rgpd";

export default function CertificationsSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selected = RGPD_CERTIFICATES[selectedIndex];
  const pdfUrl = selected ? `${CERTIFICATS_BASE}/${selected.file}` : null;

  return (
    <section id="certifications" className="py-20 px-6 md:px-12 bg-indigo-950/20">
      <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2 animate-slide-up">Certifications</h2>
      <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mb-12" />

      <div className="max-w-5xl space-y-10">
        {/* Une seule carte « Certificats RGPD » — comme la carte CV */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Shield size={24} className="text-indigo-400" />
            <h3 className="text-xl font-bold text-white">Certificats RGPD</h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded" />
          </div>
          <p className="text-slate-400 text-sm">
            Formations et attestations en lien avec la protection des données et le RGPD.
          </p>
          <div
            role="button"
            tabIndex={0}
            onClick={() => setModalOpen(true)}
            onKeyDown={(e) => e.key === "Enter" && setModalOpen(true)}
            className="relative aspect-[3/4] max-w-xs mx-auto bg-indigo-950/50 rounded-xl border-2 border-indigo-500/40 overflow-hidden hover:border-indigo-500 transition-all duration-300 group cursor-pointer"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <div className="w-20 h-20 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors">
                <FileText size={40} className="text-indigo-400" />
              </div>
              <h4 className="font-bold text-white text-lg">Certificats RGPD</h4>
              <p className="text-sm text-slate-500 mt-2">5 attestations</p>
              <span className="mt-4 text-xs text-indigo-300 flex items-center gap-2">
                <ExternalLink size={14} />
                Cliquez pour ouvrir
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/95 via-[#1a1a2e]/40 to-transparent" />
          </div>
        </div>

        {/* Autres certifications (placeholder) */}
        <div className="space-y-4 pt-4 border-t border-indigo-900/30">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Award size={20} className="text-indigo-400" />
            Autres certifications
          </h3>
          <p className="text-slate-500 text-sm">
            D’autres certifications pourront être ajoutées ici.
          </p>
        </div>
      </div>

      {/* Modal comme le CV : barre d’outils + PDF en iframe */}
      {modalOpen && pdfUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setModalOpen(false)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Escape" && setModalOpen(false)}
          aria-label="Fermer"
        >
          <div
            className="relative w-full max-w-4xl h-[90vh] bg-[#1a1a2e] rounded-2xl overflow-hidden shadow-2xl animate-scale-in flex flex-col"
            onClick={(e) => e.stopPropagation()}
            role="presentation"
          >
            {/* Barre d’outils — même style que le modal CV */}
            <div className="flex items-center justify-between gap-3 flex-shrink-0 p-3 border-b border-indigo-900/30">
              <div className="flex items-center gap-2 flex-shrink-0 min-w-0 flex-wrap">
                <select
                  value={selectedIndex}
                  onChange={(e) => setSelectedIndex(Number(e.target.value))}
                  className="px-3 py-2 rounded-xl bg-indigo-500/20 text-white text-sm font-medium border border-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-label="Choisir un certificat"
                >
                  {RGPD_CERTIFICATES.map((cert, i) => (
                    <option key={cert.id} value={i}>
                      {cert.label}
                    </option>
                  ))}
                </select>
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-indigo-500/20 hover:bg-indigo-500/40 text-white text-sm flex items-center gap-2 transition-colors whitespace-nowrap"
                >
                  <ExternalLink size={16} />
                  Ouvrir dans un nouvel onglet
                </a>
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-indigo-500/20 hover:bg-indigo-500/40 text-white transition-colors flex-shrink-0"
                  aria-label="Imprimer"
                >
                  <Printer size={20} />
                </a>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-xl bg-indigo-500/20 hover:bg-indigo-500/40 text-white transition-colors flex-shrink-0"
                aria-label="Fermer"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 min-h-0 relative">
              <iframe
                src={`${pdfUrl}#toolbar=0&navpanes=0`}
                className="absolute inset-0 w-full h-full"
                title={selected.label}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
