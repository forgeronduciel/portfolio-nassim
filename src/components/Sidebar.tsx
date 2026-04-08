"use client";

import { useState, useEffect, useRef } from "react";
import { Home, User, Award, Eye, FileCheck, Mail, Linkedin, Sun, Moon, Phone, ListChecks, Activity, Server, FolderOpen } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  isSubmenu?: boolean;
}

const navItems: NavItem[] = [
  { id: "accueil", label: "Accueil", icon: <Home size={18} /> },
  { id: "presentation", label: "Présentation", icon: <User size={18} /> },
  { id: "competences", label: "Compétences", icon: <FileCheck size={18} /> },
  { id: "realisations", label: "Tableau de compétences", icon: <ListChecks size={18} /> },
  { id: "activites", label: "Mes Projets", icon: <FolderOpen size={18} /> },
  { id: "veille", label: "Veille Technologique", icon: <Eye size={18} /> },
  { id: "certifications", label: "Certifications", icon: <Award size={18} /> },
  { id: "contact", label: "Contact", icon: <Mail size={18} /> },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("accueil");
  const [isDark, setIsDark] = useState(true);
  const ignoreObserverRef = useRef(false);
  const initializedRef = useRef(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? true;
    const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;
    initializedRef.current = true;
    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle("theme-light", !shouldUseDark);
  }, []);

  useEffect(() => {
    if (!initializedRef.current) return;
    document.documentElement.classList.toggle("theme-light", !isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (ignoreObserverRef.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-120px 0px -60% 0px", threshold: 0 }
    );

    const els = navItems.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    els.forEach((el) => observer.observe(el));
    return () => els.forEach((el) => observer.unobserve(el));
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    ignoreObserverRef.current = true;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setTimeout(() => { ignoreObserverRef.current = false; }, 1000);
  };

  return (
    <aside className="fixed right-0 top-0 h-screen w-72 sidebar-bg border-l border-indigo-900/30 flex-col z-50 hidden lg:flex animate-slide-in-right">
      {/* Theme Toggle */}
      <div className="absolute top-4 left-4 flex gap-2">
        <button
          type="button"
          onClick={() => setIsDark(false)}
          className={`p-1.5 rounded-lg transition-all duration-300 ${!isDark ? "bg-indigo-500/20 text-indigo-400" : "text-zinc-500 hover:text-zinc-300"}`}
        >
          <Sun size={16} />
        </button>
        <button
          type="button"
          onClick={() => setIsDark(true)}
          className={`p-1.5 rounded-lg transition-all duration-300 ${isDark ? "bg-indigo-500/20 text-indigo-400" : "text-zinc-500 hover:text-zinc-300"}`}
        >
          <Moon size={16} />
        </button>
      </div>

      {/* Profile */}
      <div className="p-6 pt-14 text-center border-b border-indigo-900/30">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-3xl font-bold text-white shadow-lg animate-pulse-glow">
          NA
        </div>
        <h1 className="text-xl font-bold gradient-text">Nassim</h1>
        <h1 className="text-xl font-bold gradient-text">ABIARI</h1>
        <p className="text-xs text-slate-400 mt-2">BTS SIO - Option SISR</p>
        <p className="text-xs text-slate-500">Alternance - Banque de France</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 overflow-y-auto">
        <ul className="space-y-1 px-3">
          {navItems.map((item, index) => (
            <li key={item.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
              <button
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 text-sm group ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg shadow-indigo-500/25"
                    : "hover:bg-indigo-500/10 text-slate-300 hover:text-white"
                } ${item.isSubmenu ? "ml-3 text-xs" : ""}`}
              >
                <span className={`transition-transform duration-300 ${activeSection === item.id ? "" : "group-hover:scale-110"}`}>
                  {item.icon}
                </span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Links */}
      <div className="p-4 border-t border-indigo-900/30">
        <div className="flex justify-center gap-3">
          <a
            href="mailto:nassimabiari77@gmail.com"
            className="p-2.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/25"
            title="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="tel:0666091805"
            className="p-2.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/25"
            title="Téléphone"
          >
            <Phone size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/nassim-abiari-8a75b1279/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/25"
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </aside>
  );
}
