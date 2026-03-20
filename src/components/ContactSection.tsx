"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Building2, User, Loader2, CheckCircle, AlertCircle } from "lucide-react";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!FORMSPREE_ID) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: formData.nom,
          _replyto: formData.email,
          message: formData.message,
          _subject: `Message depuis portfolio - ${formData.nom || "Sans nom"}`,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ nom: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2 animate-slide-up">Contact</h2>
      <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mb-12" />

      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl">
        {/* Contact Info */}
        <div className="space-y-6">
          {/* Personal Info */}
          <div className="card-bg rounded-2xl p-6 border border-indigo-900/30 hover-lift">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <User size={24} className="text-indigo-400" />
              Mes coordonnées
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 bg-indigo-950/50 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-sm font-bold text-white">
                  NA
                </div>
                <div>
                  <p className="font-semibold text-white">ABIARI Nassim</p>
                  <p className="text-sm text-slate-400">Étudiant BTS SIO SISR</p>
                </div>
              </div>

              <a
                href="mailto:nassimabiari77@gmail.com"
                className="flex items-center gap-3 text-slate-300 hover:text-indigo-400 transition-colors"
              >
                <Mail size={20} className="text-indigo-400" />
                nassimabiari77@gmail.com
              </a>

              <a
                href="mailto:nassimabiari@banque-france.fr"
                className="flex items-center gap-3 text-slate-300 hover:text-indigo-400 transition-colors"
              >
                <Mail size={20} className="text-blue-400" />
                nassimabiari@banque-france.fr
              </a>

              <a
                href="tel:0666091805"
                className="flex items-center gap-3 text-slate-300 hover:text-indigo-400 transition-colors"
              >
                <Phone size={20} className="text-indigo-400" />
                06 66 09 18 05
              </a>

              <a
                href="https://www.linkedin.com/in/nassim-abiari-8a75b1279/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-indigo-400 transition-colors"
              >
                <Linkedin size={20} className="text-blue-500" />
                linkedin.com/in/nassim-abiari
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6 pt-6 border-t border-indigo-900/30">
              <a
                href="mailto:nassimabiari77@gmail.com"
                className="p-3 rounded-xl bg-indigo-500/10 hover:bg-indigo-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:0666091805"
                className="p-3 rounded-xl bg-indigo-500/10 hover:bg-indigo-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Phone size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/nassim-abiari-8a75b1279/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-indigo-500/10 hover:bg-indigo-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Company Info */}
          <div className="card-bg rounded-2xl p-6 border border-indigo-900/30 hover-lift">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Building2 size={20} className="text-indigo-400" />
              Mon entreprise
            </h3>
            <div className="space-y-3">
              <p className="font-semibold text-white">Banque de France</p>
              <div className="flex items-start gap-3 text-slate-300">
                <MapPin size={20} className="text-indigo-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p>1 rue de la Vrillière</p>
                  <p>75001 Paris, France</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card-bg rounded-2xl p-6 border border-indigo-900/30 hover-lift">
          <h3 className="text-xl font-bold text-white mb-6">Envoyez-moi un message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nom" className="block text-sm text-slate-400 mb-2">Nom</label>
              <input
                id="nom"
                type="text"
                placeholder="Votre nom"
                value={formData.nom}
                onChange={(e) => { setFormData({ ...formData, nom: e.target.value }); setStatus("idle"); }}
                className="w-full px-4 py-3 rounded-xl bg-indigo-950/50 border border-indigo-900/30 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-slate-400 mb-2">Email</label>
              <input
                id="email"
                type="email"
                placeholder="votre@email.com"
                value={formData.email}
                onChange={(e) => { setFormData({ ...formData, email: e.target.value }); setStatus("idle"); }}
                className="w-full px-4 py-3 rounded-xl bg-indigo-950/50 border border-indigo-900/30 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-slate-400 mb-2">Message</label>
              <textarea
                id="message"
                placeholder="Votre message..."
                rows={6}
                value={formData.message}
                onChange={(e) => { setFormData({ ...formData, message: e.target.value }); setStatus("idle"); }}
                className="w-full px-4 py-3 rounded-xl bg-indigo-950/50 border border-indigo-900/30 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
              />
            </div>
            {status === "success" && (
              <div className="flex items-center gap-2 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-emerald-400">
                <CheckCircle size={20} />
                <span>Message envoyé !</span>
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 p-4 rounded-xl bg-red-500/20 border border-red-500/50 text-red-400">
                <AlertCircle size={20} />
                <span>
                  {FORMSPREE_ID ? "Erreur d'envoi. Réessayez." : "Configurez FORMSPREE : voir .env.example"}
                </span>
              </div>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                "Envoyer le message"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
