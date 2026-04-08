"use client";

import { useState } from "react";
import { Award, FileText, ExternalLink, Shield, X, Download, Eye } from "lucide-react";

const RGPD_CERTIFICATES = [
  { id: 1, label: "Certificat RGPD 1", file: "Certificat_1.pdf" },
  { id: 2, label: "Certificat RGPD 2", file: "Certificat_2.pdf" },
  { id: 3, label: "Certificat RGPD 3", file: "Certificat_3.pdf" },
  { id: 4, label: "Certificat RGPD 4", file: "Certificat_4.pdf" },
  { id: 5, label: "Certificat RGPD 5", file: "Certificat_5.pdf" },
] as const;

const CERTIFICATS_BASE = "/certificats-rgpd";

type ModalState = { type: "rgpd"; index: number } | { type: "cisco" } | null;

export default function CertificationsSection() {
  const [modal, setModal] = useState<ModalState>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const pdfUrl = modal?.type === "rgpd"
    ? `${CERTIFICATS_BASE}/${RGPD_CERTIFICATES[modal.index].file}`
    : modal?.type === "cisco"
    ? "/docs/cisco-intro-cybersecurity.pdf"
    : null;

  const pdfTitle = modal?.type === "rgpd"
    ? RGPD_CERTIFICATES[modal.index].label
    : "Introduction to Cybersecurity — Cisco";

  return (
    <section id="certifications" className="py-20 px-6 md:px-12 bg-indigo-950/20">
      <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2 animate-slide-up">Certifications</h2>
      <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mb-12" />

      <div className="max-w-4xl space-y-6">

        {/* ── Cisco ── */}
        <div className="rounded-2xl border border-green-500/20 bg-gradient-to-br from-[#0d1f12] to-[#0a1a0f] p-5 flex items-center gap-5 hover:border-green-500/40 transition-all duration-300">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-500/15 border border-green-500/25">
            <Shield size={26} className="text-green-400" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-widest text-green-400/70">Cisco Networking Academy</span>
            </div>
            <h3 className="text-base font-bold text-white">Introduction to Cybersecurity</h3>
            <p className="text-sm text-slate-400 mt-0.5">Certification officielle délivrée par Cisco — Fondamentaux de la cybersécurité</p>
          </div>
          <div className="flex gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setModal({ type: "cisco" })}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-green-500/15 hover:bg-green-500/30 text-green-300 text-sm font-medium transition-all duration-200"
            >
              <Eye size={14} />
              Voir
            </button>
            <a
              href="/docs/cisco-intro-cybersecurity.pdf"
              download
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-green-500/15 hover:bg-green-500/30 text-green-300 text-sm font-medium transition-all duration-200"
            >
              <Download size={14} />
            </a>
          </div>
        </div>

        {/* ── RGPD ── */}
        <div className="rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-[#1a1a2e] to-[#13131f] overflow-hidden">
          <div className="p-5 border-b border-indigo-900/30 flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 border border-indigo-500/25">
              <FileText size={26} className="text-indigo-400" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400/70">Protection des données</span>
              <h3 className="text-base font-bold text-white mt-0.5">Attestations RGPD</h3>
              <p className="text-sm text-slate-400 mt-0.5">5 attestations de formation en lien avec le RGPD</p>
            </div>
          </div>
          <div className="divide-y divide-indigo-900/20">
            {RGPD_CERTIFICATES.map((cert, i) => (
              <div key={cert.id} className="flex items-center justify-between px-5 py-3 hover:bg-indigo-500/5 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 text-xs font-bold">{i + 1}</span>
                  <span className="text-sm font-medium text-slate-300">{cert.label}</span>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setModal({ type: "rgpd", index: i })}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/25 text-indigo-300 text-xs font-medium transition-all duration-200"
                  >
                    <Eye size={12} />
                    Voir
                  </button>
                  <a
                    href={`${CERTIFICATS_BASE}/${cert.file}`}
                    download
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/25 text-indigo-300 text-xs font-medium transition-all duration-200"
                  >
                    <Download size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── Modal PDF ── */}
      {modal && pdfUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setModal(null)}
        >
          <div
            className="relative w-full max-w-4xl h-[90vh] bg-[#13131f] rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-indigo-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header modal */}
            <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-indigo-900/30 shrink-0">
              <div className="flex items-center gap-3">
                {modal.type === "rgpd" && (
                  <select
                    value={modal.index}
                    onChange={(e) => setModal({ type: "rgpd", index: Number(e.target.value) })}
                    className="px-3 py-1.5 rounded-lg bg-indigo-500/20 text-white text-sm border border-indigo-500/30 focus:outline-none"
                  >
                    {RGPD_CERTIFICATES.map((cert, i) => (
                      <option key={cert.id} value={i}>{cert.label}</option>
                    ))}
                  </select>
                )}
                {modal.type === "cisco" && (
                  <span className="text-sm font-semibold text-white">{pdfTitle}</span>
                )}
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-xs transition-colors"
                >
                  <ExternalLink size={12} />
                  Nouvel onglet
                </a>
                <a
                  href={pdfUrl}
                  download
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-xs transition-colors"
                >
                  <Download size={12} />
                  Télécharger
                </a>
              </div>
              <button
                type="button"
                onClick={() => setModal(null)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>
            {/* PDF */}
            <div className="flex-1 min-h-0">
              <iframe
                src={`${pdfUrl}#toolbar=0&navpanes=0`}
                className="w-full h-full"
                title={pdfTitle}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
