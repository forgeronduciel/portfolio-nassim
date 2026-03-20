"use client";

import { Server, Network, Shield, Database, Cpu, HardDrive, Monitor, Wifi, CheckCircle2, Layers } from "lucide-react";

type VM = {
  name: string;
  type: "vm" | "lxc";
  os: string;
  role: string;
  ip: string;
  vlan: string;
  icon: React.ReactNode;
  color: string;
  details: string[];
};

type VlanInfo = {
  id: number;
  name: string;
  subnet: string;
  role: string;
  color: string;
  textColor: string;
  bgColor: string;
};

const vlans: VlanInfo[] = [
  {
    id: 10,
    name: "VLAN Clients",
    subnet: "192.168.10.0/24",
    role: "Postes utilisateurs, distribution DHCP automatique",
    color: "border-blue-500/40",
    textColor: "text-blue-300",
    bgColor: "bg-blue-500/10",
  },
  {
    id: 20,
    name: "VLAN DMZ",
    subnet: "192.168.20.0/24",
    role: "Zone démilitarisée — Nextcloud, services exposés",
    color: "border-amber-500/40",
    textColor: "text-amber-300",
    bgColor: "bg-amber-500/10",
  },
  {
    id: 30,
    name: "VLAN Serveurs",
    subnet: "192.168.30.0/24",
    role: "Contrôleurs AD, NAS, hyperviseur Proxmox",
    color: "border-emerald-500/40",
    textColor: "text-emerald-300",
    bgColor: "bg-emerald-500/10",
  },
];

const virtualMachines: VM[] = [
  {
    name: "AD-WINDOWS2025",
    type: "vm",
    os: "Windows Server 2025",
    role: "Contrôleur de domaine principal",
    ip: "192.168.30.42",
    vlan: "VLAN Serveurs",
    icon: <Shield size={16} />,
    color: "text-blue-400",
    details: [
      "Domaine AFR.LOCAL",
      "DHCP pour VLAN Clients",
      "DNS Active Directory",
      "Autorité de certification PKI",
    ],
  },
  {
    name: "AD-SECONDAIRE",
    type: "vm",
    os: "Windows Server 2025",
    role: "Contrôleur de domaine secondaire",
    ip: "192.168.30.43",
    vlan: "VLAN Serveurs",
    icon: <Shield size={16} />,
    color: "text-indigo-400",
    details: [
      "Réplication AD (repadmin)",
      "DNS secondaire",
      "Haute disponibilité annuaire",
    ],
  },
  {
    name: "NAS-AFR",
    type: "vm",
    os: "TrueNAS SCALE 25.10.2.1",
    role: "Serveur NAS — Stockage partagé",
    ip: "192.168.30.110",
    vlan: "VLAN Serveurs",
    icon: <HardDrive size={16} />,
    color: "text-emerald-400",
    details: [
      "Pool ZFS POOL_AFR (RAID-1, 2×100 GiB)",
      "Partage SMB \\\\NAS-AFR\\DATA",
      "Intégration Kerberos AD",
      "ACL NFSv4 (admins / utilisateurs)",
    ],
  },
  {
    name: "debian-cloud",
    type: "vm",
    os: "Debian 12",
    role: "Serveur Nextcloud (DMZ)",
    ip: "192.168.20.60",
    vlan: "VLAN DMZ",
    icon: <Database size={16} />,
    color: "text-violet-400",
    details: [
      "Nextcloud avec LDAPS vers AD",
      "Accès externe cloud.afr-com.com",
      "Reverse proxy HTTPS",
      "Isolé par ACL routeur",
    ],
  },

];

const materiel = [
  {
    icon: <Server size={20} className="text-emerald-400" />,
    label: "Hyperviseur",
    value: "Proxmox VE",
    desc: "Nœud « nass » — gestion centralisée de toutes les VMs",
  },
  {
    icon: <Network size={20} className="text-blue-400" />,
    label: "Routeur",
    value: "Cisco (IOS)",
    desc: "Inter-VLAN routing + ACL_DMZ_IN pour le filtrage des flux",
  },
  {
    icon: <Wifi size={20} className="text-amber-400" />,
    label: "Switch",
    value: "Switch manageable",
    desc: "Trunk 802.1Q pour les 3 VLANs (10, 20, 30)",
  },
  {
    icon: <Cpu size={20} className="text-indigo-400" />,
    label: "Serveur physique",
    value: "Baie physique home lab",
    desc: "Héberge Proxmox VE avec les VMs en production de test",
  },
];

const competencesAcquises = [
  "Virtualisation avec Proxmox VE (KVM, ZFS)",
  "Administration Active Directory (OU, GPO, réplication)",
  "Intégration LDAP/LDAPS entre services",
  "Segmentation réseau VLAN et routage inter-VLAN",
  "Sécurisation par ACL (principe du moindre privilège)",
  "NAS TrueNAS SCALE et stockage ZFS",

  "Mise en place DMZ et reverse proxy HTTPS",
];

export default function BaieSection() {
  return (
    <section id="baie" className="relative py-24 px-6 md:px-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent" />
      <div className="absolute top-20 left-0 w-[600px] h-[400px] rounded-full bg-emerald-500/3 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-teal-500/5 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg">
              <Layers size={20} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text animate-slide-up">
              Ma Baie Informatique
            </h2>
          </div>
          <div className="h-1 w-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 mb-4 ml-13" />
          <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
            Un lab de type entreprise, conçu pour simuler un Système d'Information réel — virtualisation, Active Directory, NAS, DMZ et supervision.
          </p>
        </header>

        {/* Présentation générale */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Server size={20} className="text-emerald-400" />
              Présentation du lab
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm">
              Ma baie informatique est un environnement de lab personnel simulant une infrastructure d'entreprise complète. Construite autour de <strong className="text-white">Proxmox VE</strong> comme hyperviseur central, elle héberge plusieurs machines virtuelles couvrant les services essentiels d'un SI : annuaire, stockage réseau, cloud privé, et supervision.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm">
              L'objectif est <strong className="text-white">pédagogique et pratique</strong> : reproduire les conditions réelles d'une infrastructure professionnelle pour expérimenter, tester et documenter des configurations en lien direct avec le programme BTS SIO SISR.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm">
              Le réseau est segmenté en <strong className="text-white">3 VLANs distincts</strong> (Clients, Serveurs, DMZ) avec un routeur Cisco assurant le filtrage par ACL entre les zones. Chaque service est isolé selon le principe du moindre privilège.
            </p>
          </div>

          {/* Matériel */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Cpu size={20} className="text-emerald-400" />
              Infrastructure matérielle
            </h3>
            <div className="space-y-3">
              {materiel.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-xl border border-indigo-900/30 bg-[#1a1a2e]/80 p-4 hover:border-emerald-700/40 transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-950/60 border border-indigo-900/30">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{item.label}</p>
                    <p className="text-white font-semibold text-sm">{item.value}</p>
                    <p className="text-slate-400 text-xs leading-snug mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Architecture réseau — VLANs */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
            <Network size={20} className="text-blue-400" />
            Segmentation réseau — VLANs
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {vlans.map((vlan) => (
              <div
                key={vlan.id}
                className={`rounded-2xl border ${vlan.color} ${vlan.bgColor} p-5 space-y-2`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold uppercase tracking-wider ${vlan.textColor}`}>
                    VLAN {vlan.id}
                  </span>
                  <span className={`text-xs font-mono px-2 py-0.5 rounded-md bg-black/20 ${vlan.textColor}`}>
                    {vlan.subnet}
                  </span>
                </div>
                <p className="text-white font-semibold text-sm">{vlan.name}</p>
                <p className="text-slate-400 text-xs leading-snug">{vlan.role}</p>
              </div>
            ))}
          </div>

          {/* ACL Info */}
          <div className="mt-4 rounded-xl border border-slate-700/40 bg-slate-900/40 p-4 flex items-start gap-3">
            <Shield size={18} className="text-amber-400 shrink-0 mt-0.5" />
            <p className="text-slate-300 text-sm leading-relaxed">
              <strong className="text-white">ACL routeur (ACL_DMZ_IN)</strong> — La DMZ est strictement filtrée : seuls les ports LDAP (389/636), DNS (53) et NTP (123) sont autorisés vers le VLAN Serveurs. Tout autre trafic est bloqué (règle deny implicite). Le ping ICMP vers les contrôleurs AD est refusé par le routeur.
            </p>
          </div>
        </div>

        {/* VMs déployées */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
            <Layers size={20} className="text-indigo-400" />
            Machines virtuelles déployées
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {virtualMachines.map((vm) => (
              <div
                key={vm.name}
                className="rounded-2xl border border-indigo-900/30 bg-gradient-to-br from-[#1a1a2e] to-[#16162a] p-5 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                {/* VM Header */}
                <div className="flex items-center gap-2 mb-3">
                  <div className={`${vm.color}`}>{vm.icon}</div>
                  <div>
                    <p className="font-mono text-white text-sm font-semibold">{vm.name}</p>
                    <p className="text-xs text-slate-500">{vm.type === "vm" ? "Machine Virtuelle" : "Conteneur LXC"}</p>
                  </div>
                </div>

                {/* OS & IP */}
                <div className="space-y-1 mb-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">OS</span>
                    <span className="text-slate-300 font-medium">{vm.os}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">IP</span>
                    <span className="font-mono text-emerald-400">{vm.ip}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Réseau</span>
                    <span className="text-blue-300">{vm.vlan}</span>
                  </div>
                </div>

                {/* Rôle */}
                <p className="text-xs text-indigo-300 font-semibold mb-2">{vm.role}</p>

                {/* Détails */}
                <ul className="space-y-1">
                  {vm.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs text-slate-400">
                      <CheckCircle2 size={11} className={`mt-0.5 shrink-0 ${vm.color} opacity-70`} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Compétences acquises */}
        <div className="rounded-2xl border border-emerald-900/30 bg-gradient-to-br from-emerald-950/30 to-teal-950/20 p-6">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <CheckCircle2 size={20} className="text-emerald-400" />
            Compétences acquises via ce lab
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {competencesAcquises.map((comp) => (
              <div
                key={comp}
                className="flex items-start gap-2 rounded-xl border border-emerald-900/20 bg-emerald-950/20 p-3"
              >
                <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-300 leading-snug">{comp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
