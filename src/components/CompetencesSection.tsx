"use client";

import { Briefcase, GraduationCap } from "lucide-react";

const sectionClass = "py-20 px-6 md:px-6 lg:pl-10 lg:pr-4 bg-indigo-950/20";
const barClass = "w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mb-8";
const cardClass = "card-bg rounded-2xl p-6 border border-indigo-900/30 hover-lift";
const boxClass = "p-4 bg-indigo-950/50 rounded-xl hover:bg-indigo-900/30 transition-colors";

export default function CompetencesSection() {
  return (
    <section id="competences" className={sectionClass}>
      <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2 animate-slide-up">Compétences</h2>
      <div className={barClass} />

      <div className="max-w-5xl">
        <div className="space-y-6">
            {/* En entreprise */}
            <div className={cardClass}>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Briefcase size={24} className="text-indigo-400" />
                En entreprise - Banque de France
              </h3>
              <div className="text-slate-300 space-y-4">
                <p>
                  En tant que <span className="text-indigo-400 font-semibold">technicien de proximité</span> au sein de la DGSI, j&apos;ai développé de nombreuses compétences :
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className={boxClass}>
                    <h4 className="font-semibold text-white mb-2">Support utilisateur</h4>
                    <ul className="text-sm space-y-1 text-slate-400">
                      <li>- Prise en charge des incidents N1/N2</li>
                      <li>- Résolution de problèmes matériels et logiciels</li>
                      <li>- Accompagnement des utilisateurs</li>
                    </ul>
                  </div>
                  <div className={boxClass}>
                    <h4 className="font-semibold text-white mb-2">Infrastructure</h4>
                    <ul className="text-sm space-y-1 text-slate-400">
                      <li>- Maintenance du parc informatique</li>
                      <li>- Configuration des postes de travail</li>
                      <li>- Gestion des équipements réseau</li>
                    </ul>
                  </div>
                  <div className={boxClass}>
                    <h4 className="font-semibold text-white mb-2">Sécurité</h4>
                    <ul className="text-sm space-y-1 text-slate-400">
                      <li>- Application des politiques de sécurité</li>
                      <li>- Sensibilisation des utilisateurs</li>
                      <li>- Gestion des accès et droits</li>
                    </ul>
                  </div>
                  <div className={boxClass}>
                    <h4 className="font-semibold text-white mb-2">Documentation</h4>
                    <ul className="text-sm space-y-1 text-slate-400">
                      <li>- Rédaction de procédures</li>
                      <li>- Mise à jour de la documentation technique</li>
                      <li>- Reporting des interventions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* En formation */}
            <div className={cardClass}>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <GraduationCap size={24} className="text-indigo-400" />
                En formation - UTEC
              </h3>
              <div className="text-slate-300 space-y-4">
                <p>
                  Durant ma formation à l&apos;<span className="text-indigo-400 font-semibold">UTEC</span>, j&apos;ai travaillé sur de nombreux projets et acquis des compétences techniques :
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className={boxClass}>
                    <h4 className="font-semibold text-white mb-2">Systèmes</h4>
                    <ul className="text-sm space-y-1 text-slate-400">
                      <li>- Administration Windows Server</li>
                      <li>- Administration Linux (Debian, Ubuntu)</li>
                      <li>- Virtualisation (VMware, Hyper-V)</li>
                    </ul>
                  </div>
                  <div className={boxClass}>
                    <h4 className="font-semibold text-white mb-2">Réseaux</h4>
                    <ul className="text-sm space-y-1 text-slate-400">
                      <li>- Configuration de switches et routeurs</li>
                      <li>- Mise en place de VLANs</li>
                      <li>- Services DHCP, DNS, Active Directory</li>
                    </ul>
                  </div>
                  <div className={boxClass}>
                    <h4 className="font-semibold text-white mb-2">Cybersécurité</h4>
                    <ul className="text-sm space-y-1 text-slate-400">
                      <li>- Mise en place de pare-feu</li>
                      <li>- Analyse de vulnérabilités</li>
                      <li>- Sécurisation des infrastructures</li>
                    </ul>
                  </div>
                  <div className={boxClass}>
                    <h4 className="font-semibold text-white mb-2">Projets</h4>
                    <ul className="text-sm space-y-1 text-slate-400">
                      <li>- Travail en équipe</li>
                      <li>- Gestion de projet</li>
                      <li>- Documentation technique</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
