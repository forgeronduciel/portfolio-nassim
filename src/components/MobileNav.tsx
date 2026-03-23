"use client";

import { useState } from "react";
import { Menu, X, Home, User, Award, Eye, FileCheck, Mail, Linkedin, Phone, ListChecks, Server, FolderOpen } from "lucide-react";

const navItems = [
  { id: "accueil", label: "Accueil", icon: <Home size={18} /> },
  { id: "presentation", label: "Présentation", icon: <User size={18} /> },
  { id: "competences", label: "Compétences", icon: <FileCheck size={18} /> },
  { id: "realisations", label: "Tableau de compétences", icon: <ListChecks size={18} /> },
  { id: "activites", label: "Mes Projets", icon: <FolderOpen size={18} /> },
  { id: "veille", label: "Veille Technologique", icon: <Eye size={18} /> },
  { id: "certifications", label: "Certifications", icon: <Award size={18} /> },
  { id: "contact", label: "Contact", icon: <Mail size={18} /> },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 h-16 glass border-b border-indigo-900/30 flex items-center justify-between px-4 z-50 lg:hidden">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-sm font-bold text-white shadow-lg">
            NA
          </div>
          <div>
            <h1 className="text-sm font-bold gradient-text">Nassim ABIARI</h1>
            <p className="text-xs text-slate-400">BTS SIO SISR</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          className="p-2 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-16 sidebar-bg z-40 lg:hidden overflow-y-auto animate-fade-in">
          <nav className="p-4">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={item.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-indigo-500/10 text-slate-300 transition-all duration-300"
                  >
                    {item.icon}
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-4 border-t border-indigo-900/30">
            <div className="flex justify-center gap-4">
              <a
                href="mailto:nassimabiari77@gmail.com"
                className="p-3 rounded-xl bg-indigo-500/10 hover:bg-indigo-500 hover:text-white transition-all duration-300"
              >
                <Mail size={18} />
              </a>
              <a
                href="tel:0666091805"
                className="p-3 rounded-xl bg-indigo-500/10 hover:bg-indigo-500 hover:text-white transition-all duration-300"
              >
                <Phone size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/nassim-abiari-8a75b1279/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-indigo-500/10 hover:bg-indigo-500 hover:text-white transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
