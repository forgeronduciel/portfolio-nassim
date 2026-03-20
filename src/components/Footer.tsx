import { Mail, Phone, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-indigo-900/30">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-sm font-bold text-white">
                NA
              </div>
              <div>
                <p className="font-bold gradient-text">Nassim ABIARI</p>
                <p className="text-xs text-slate-500">BTS SIO SISR</p>
              </div>
            </div>
            <p className="text-sm text-slate-500">
              Portfolio réalisé dans le cadre de l'épreuve E5 du BTS SIO.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#presentation" className="hover:text-indigo-400 transition-colors">Présentation</a></li>
              <li><a href="#competences" className="hover:text-indigo-400 transition-colors">Compétences</a></li>
              <li><a href="#realisations" className="hover:text-indigo-400 transition-colors">Tableau de compétences</a></li>
              <li><a href="#activites" className="hover:text-indigo-400 transition-colors">Activités</a></li>
              <li><a href="#veille" className="hover:text-indigo-400 transition-colors">Veille technologique</a></li>
              <li><a href="#certifications" className="hover:text-indigo-400 transition-colors">Certifications</a></li>
              <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-slate-400">
              <a href="mailto:nassimabiari77@gmail.com" className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
                <Mail size={14} />
                nassimabiari77@gmail.com
              </a>
              <a href="tel:0666091805" className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
                <Phone size={14} />
                06 66 09 18 05
              </a>
            </div>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.linkedin.com/in/nassim-abiari-8a75b1279/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-indigo-500/10 hover:bg-indigo-500 hover:text-white transition-all duration-300"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-indigo-900/30 text-center">
          <p className="text-sm text-slate-500">
            Copyright 2025 - <span className="gradient-text">Nassim ABIARI</span>
          </p>
          <p className="text-xs text-slate-600 mt-1">
            Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
