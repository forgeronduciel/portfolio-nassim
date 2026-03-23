"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FileText, GraduationCap, Briefcase, Target, Download, ExternalLink, X, Printer, BookOpen } from "lucide-react";
import BTSSIOSection from "@/components/BTSSIOSection";
import EntrepriseSection from "@/components/EntrepriseSection";

const CV_PDF = "/ABIARI_CV.pdf";

export default function PresentationSection() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  return (
    <section id="presentation" className="py-20 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2 animate-slide-up">Présentation</h2>
      <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mb-12" />

      <div className="grid lg:grid-cols-3 gap-8 max-w-6xl">
        {/* CV Image Placeholder */}
        <div className="lg:col-span-1">
          <div className="card-bg rounded-2xl p-6 border border-indigo-900/30 sticky top-24 hover-lift">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <FileText size={20} className="text-indigo-400" />
              Mon CV
            </h3>
            <div
              role="button"
              tabIndex={0}
              onClick={() => setCvModalOpen(true)}
              onKeyDown={(e) => e.key === "Enter" && setCvModalOpen(true)}
              className="relative aspect-[3/4] bg-indigo-950/50 rounded-xl border-2 border-indigo-500/40 overflow-hidden hover:border-indigo-500 transition-all duration-300 group cursor-pointer"
            >
              <object
                data={CV_PDF}
                type="application/pdf"
                className="absolute inset-0 w-full h-full opacity-60 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none"
                aria-label="CV - Nassim ABIARI"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/95 via-[#1a1a2e]/40 to-transparent" />
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-slate-300 px-4">
                <FileText size={48} className="mb-3 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-sm">Cliquez pour agrandir</p>
                <span className="mt-2 text-xs text-indigo-300 flex items-center gap-2">
                  <ExternalLink size={14} />
                  Ouvrir dans un nouvel onglet
                </span>
              </div>
            </div>
            <a
              href={CV_PDF}
              download
              className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Télécharger le CV
            </a>
          </div>
        </div>

        {/* Presentation Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* About Me */}
          <div className="card-bg rounded-2xl p-6 border border-indigo-900/30 hover-lift animate-slide-up stagger-1">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <GraduationCap size={24} className="text-indigo-400" />
              Qui suis-je ?
            </h3>
            <div className="text-slate-300 space-y-4 leading-relaxed">
              <p>
                Je m'appelle <span className="text-indigo-400 font-semibold">ABIARI Nassim</span>, j'ai 21 ans et je suis actuellement en deuxième année de BTS SIO (Services Informatiques aux Organisations), option <span className="text-indigo-400">Solutions d'Infrastructure, Systèmes et Réseaux (SISR)</span>.
              </p>
              <p>
                Mon parcours dans le domaine de l'informatique a débuté en 2023. Avec mon baccalauréat STI2D, j'ai su que je voulais m'orienter dans ce domaine. En 2024, j'ai intégré l'<span className="text-indigo-400">UTEC</span> afin de préparer un BTS SIO.
              </p>
            </div>
          </div>

          {/* Formation Timeline */}
          <div className="card-bg rounded-2xl p-6 border border-indigo-900/30 hover-lift animate-slide-up stagger-2">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <BookOpen size={24} className="text-indigo-400" />
              Parcours de formation
            </h3>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-600 opacity-30" />
              <div className="space-y-6">
                {/* BTS SIO */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center z-10">
                    <GraduationCap size={14} className="text-white" />
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">2024 → 2026</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">En cours</span>
                    </div>
                    <p className="font-bold text-white text-sm">BTS SIO — option SISR</p>
                    <p className="text-xs text-indigo-300">Solutions d'Infrastructure, Systèmes et Réseaux</p>
                    <p className="text-xs text-slate-400 mt-1">UTEC — Île-de-France</p>
                    <p className="text-xs text-slate-500 mt-1">Formation en alternance · Administration réseau · Sécurité · Virtualisation</p>
                  </div>
                </div>

                {/* Bac STI2D */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center z-10">
                    <GraduationCap size={14} className="text-white" />
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-500/20 text-slate-300 border border-slate-500/30">→ 2023</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-slate-500/10 text-slate-400 border border-slate-500/20">Obtenu</span>
                    </div>
                    <p className="font-bold text-white text-sm">Baccalauréat STI2D</p>
                    <p className="text-xs text-slate-400">Option SIN — Sciences de l'Ingénieur Numérique</p>
                    <p className="text-xs text-slate-500 mt-1">Systèmes d'information · Programmation · Électronique numérique</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Current Position */}
          <div className="card-bg rounded-2xl p-6 border border-indigo-900/30 hover-lift animate-slide-up stagger-3">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Briefcase size={24} className="text-indigo-400" />
              Mon parcours actuel
            </h3>
            <div className="text-slate-300 space-y-4 leading-relaxed">
              <p>
                Je poursuis actuellement mon parcours en BTS SIO SISR, en alternance à la <span className="text-indigo-400 font-semibold">Banque de France</span>, où j'occupe le poste de <span className="text-indigo-400">technicien de proximité</span> au sein de la DGSI.
              </p>
              <p>
                Dans ce cadre, j'interviens sur :
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                  Le support informatique et réseau de niveaux 1 et 2
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                  La maintenance des équipements
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                  L'assistance aux utilisateurs
                </li>
              </ul>
            </div>
          </div>

          {/* Portfolio Purpose */}
          <div className="card-bg rounded-2xl p-6 border border-indigo-900/30 hover-lift animate-slide-up stagger-4">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Target size={24} className="text-indigo-400" />
              Objectif de ce portfolio
            </h3>
            <div className="text-slate-300 space-y-4 leading-relaxed">
              <p>
                À travers ce portfolio, je présente l'ensemble de mon parcours, de mes compétences et de mes projets en lien avec le numérique, aussi bien ceux réalisés lors de ma formation à l'<span className="text-indigo-400">UTEC</span> que ceux effectués à la <span className="text-indigo-400">Banque de France</span>.
              </p>
              <p>
                Ce site a pour objectif de mettre en valeur les différents thèmes explorés durant le BTS SIO, dans le cadre de l'<span className="text-indigo-400 font-semibold">épreuve E5</span>.
              </p>
              <div className="mt-6 p-4 bg-indigo-950/50 rounded-xl border-l-4 border-indigo-500">
                <p className="font-semibold text-white mb-1">Mon objectif professionnel</p>
                <p className="text-sm">
                  Poursuivre mes études afin de devenir <span className="text-indigo-400 font-semibold">ingénieur réseau et sécurité</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-12">
        <BTSSIOSection />
        <EntrepriseSection />
      </div>

      {/* Modal CV — rendu via Portal pour éviter les conflits de transform */}
      {cvModalOpen && mounted && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setCvModalOpen(false)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Escape" && setCvModalOpen(false)}
          aria-label="Fermer"
        >
          <div
            className="relative w-full max-w-4xl h-[90vh] bg-[#1a1a2e] rounded-2xl overflow-hidden shadow-2xl animate-scale-in flex flex-col"
            onClick={(e) => e.stopPropagation()}
            role="presentation"
          >
            <div className="flex items-center justify-between gap-3 flex-shrink-0 p-3 border-b border-indigo-900/30">
              <div className="flex items-center gap-2 flex-shrink-0 min-w-0">
                <a
                  href={CV_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-indigo-500/20 hover:bg-indigo-500/40 text-white text-sm flex items-center gap-2 transition-colors whitespace-nowrap"
                >
                  <ExternalLink size={16} />
                  Ouvrir dans un nouvel onglet
                </a>
                <a
                  href={CV_PDF}
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
                onClick={() => setCvModalOpen(false)}
                className="p-2 rounded-xl bg-indigo-500/20 hover:bg-indigo-500/40 text-white transition-colors flex-shrink-0"
                aria-label="Fermer"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 min-h-0 relative">
              <object
                data={CV_PDF}
                type="application/pdf"
                className="absolute inset-0 w-full h-full"
                aria-label="CV - Nassim ABIARI"
              >
                <div className="flex flex-col items-center justify-center h-full gap-4 text-slate-400 p-8 text-center">
                  <FileText size={48} className="text-indigo-400" />
                  <p>Votre navigateur ne peut pas afficher ce PDF directement.</p>
                  <a
                    href={CV_PDF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold hover:shadow-lg transition-all duration-300"
                  >
                    Ouvrir le CV
                  </a>
                </div>
              </object>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
