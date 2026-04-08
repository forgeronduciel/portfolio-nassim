"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ExternalLink, Server, Cloud, Shield, Database, GraduationCap, Briefcase, Network, FileText, CheckCircle2, ChevronDown, Star, X, ArrowUpRight, KeyRound, Monitor, Laptop, Printer, ClipboardList, Phone, UserCog } from "lucide-react";

type TabType = "pro" | "perso";

type Tech = {
  label: string;
  color: string;
};

type Activite = {
  id: string;
  titre: string;
  soustitre?: string;
  annee: string;
  badge: string;
  objectifs: string;
  travaux: string[];
  competences: string[];
  technologies?: Tech[];
  resultats: string;
  explorUrl?: string;
  docUrl?: string;
  icon: React.ReactNode;
  gradient: string;
  logoUrl?: string;
  imageUrl?: string;
  requirePassword?: string;
};

const projetsEcole: Activite[] = [
  {
    id: "supervision",
    titre: "Supervision réseau — Observium",
    soustitre: "SNMP · Observium · NAS · Windows · Virtualisation",
    annee: "2024-2025",
    badge: "Formation",
    icon: <Monitor size={22} />,
    gradient: "from-cyan-500 to-blue-600",
    objectifs:
      "Mettre en place une solution de supervision réseau complète pour surveiller l'état du serveur NAS et d'un poste Windows, en utilisant le protocole SNMP et le serveur de supervision Observium déployé sous Linux.",
    travaux: [
      "Configuration du service SNMP sur le serveur NAS OpenMediaVault (OMV 6.5)",
      "Déploiement du serveur Observium (TurnKey Linux) sous VirtualBox en mode pont",
      "Ajout du serveur NAS comme équipement supervisé dans Observium (menu Devices)",
      "Configuration du service SNMP sur une machine virtuelle Windows 10",
      "Visualisation des métriques : CPU, RAM, stockage, réseau en temps réel",
      "Configuration des alertes email pour événements critiques (seuil RAID à 5%)",
    ],
    technologies: [],
    competences: [
      "C1 – Gérer le patrimoine informatique",
      "C5 – Mettre à disposition des utilisateurs un service informatique",
    ],
    resultats:
      "Infrastructure supervisée opérationnelle : le serveur NAS et le poste Windows sont surveillés en temps réel via Observium. Les alertes email sont configurées pour prévenir l'administrateur en cas d'événement critique.",
    docUrl: "/docs/01.TP01_ConfServeurSupervision_Rev04.docx",
  },
  {
    id: "ad-nextcloud",
    titre: "Infrastructure AD + Nextcloud",
    soustitre: "Intégration LDAP · GPO · DMZ · Sécurisation réseau",
    annee: "2025-2026",
    badge: "Projet majeur",
    icon: <Network size={22} />,
    gradient: "from-blue-500 to-indigo-600",
    imageUrl: "/images/ad-nextcloud.svg",
    objectifs:
      "Déployer une infrastructure d'entreprise complète combinant un domaine Active Directory (AFR.LOCAL) sous Windows Server 2025 et un serveur Nextcloud en DMZ, avec authentification centralisée via LDAP/LDAPS et sécurisation réseau par ACL.",
    travaux: [
      "Déploiement d'un domaine AFR.LOCAL avec 2 contrôleurs de domaine (réplication AD)",
      "Structuration en Unités d'Organisation (OU) : Admins, Utilisateurs, Postes, Operators",
      "Mise en place de GPO : déploiement automatique Nextcloud MSI et restrictions utilisateurs",
      "Installation de Nextcloud sur Debian en zone DMZ (192.168.20.0/24)",
      "Intégration LDAP/LDAPS avec compte de service dédié (svc-nextcloud@AFR.LOCAL)",
      "Sécurisation par ACL routeur : flux autorisés LDAP (389/636), DNS (53), NTP (123) uniquement",
      "Configuration de 3 VLANs séparés : Clients (10), Serveurs (30), DMZ (20)",
    ],
    technologies: [],
    competences: ["C1 – Gérer le patrimoine informatique", "C2 – Répondre aux incidents et aux demandes d'assistance", "C5 – Mettre à disposition des utilisateurs un service informatique"],
    resultats:
      "Infrastructure d'entreprise opérationnelle : authentification unifiée AD → LDAP → Nextcloud, ACL routeur fonctionnelles, accès externe cloud.afr-com.com via reverse proxy HTTPS.",
    docUrl: "/docs/Documentation_Cloud_AD_v2.pdf",
  },
  {
    id: "authentik-sso",
    titre: "Authentik SSO",
    soustitre: "Identity Provider · OAuth2 · OpenID Connect · Active Directory",
    annee: "2025-2026",
    badge: "Projet",
    icon: <KeyRound size={22} />,
    gradient: "from-orange-500 to-red-600",
    imageUrl: "/images/authentik-sso.svg",
    objectifs:
      "Déployer et configurer Authentik comme serveur SSO (Single Sign-On) pour centraliser l'authentification des utilisateurs via leur compte Active Directory et permettre la connexion à Nextcloud via le protocole OpenID Connect.",
    travaux: [
      "Configuration du serveur Authentik (192.168.30.22:9000) et liaison à l'Active Directory (192.168.30.42) via LDAP",
      "Création de l'application Nextcloud et du provider OAuth2/OpenID Connect dans Authentik",
      "Récupération et configuration des endpoints OpenID (Authorize, Token, Userinfo, Logout…)",
      "Configuration du plugin Social Login dans Nextcloud avec le Client ID et le Client Secret",
      "Test du flux SSO complet : Nextcloud → Authentik → Vérification AD → Token → Accès accordé",
      "Vérification de la déconnexion centralisée (Single Logout)",
    ],
    technologies: [],
    competences: [
      "C1 – Gérer le patrimoine informatique",
      "C5 – Mettre à disposition des utilisateurs un service informatique",
    ],
    resultats:
      "Authentification SSO opérationnelle : les utilisateurs se connectent à Nextcloud avec leurs identifiants Active Directory via Authentik, sans double authentification. Rapport d'accès centralisé sur la console Authentik.",
    docUrl: "/docs/Documentation_Authentik_SSO.docx",
  },
  {
    id: "nas-truenas",
    titre: "Serveur NAS TrueNAS SCALE",
    soustitre: "Intégration AD · Partage SMB · ACL · Proxmox VE",
    annee: "2025-2026",
    badge: "Projet majeur",
    icon: <Database size={22} />,
    gradient: "from-emerald-500 to-teal-600",
    imageUrl: "/images/nas-truenas.svg",
    objectifs:
      "Déployer un serveur NAS TrueNAS SCALE en machine virtuelle sur Proxmox VE, l'intégrer au domaine Active Directory AFR.LOCAL et exposer un partage SMB sécurisé par ACL NFSv4 pour les utilisateurs du domaine.",
    travaux: [
      "Création et configuration de la VM TrueNAS (VMID 105, 6 Go RAM, 3 cores) sur Proxmox",
      "Création du pool ZFS POOL_AFR en RAID-1 Mirror (2 × 100 GiB)",
      "Création du dataset DATA avec préréglage SMB et ACL NFSv4",
      "Jonction au domaine AFR.LOCAL via Kerberos (compte svc-nas@AFR.LOCAL)",
      "Configuration des ACL NFSv4 : Contrôle total pour admins, droits Modifier pour utilisateurs",
      "Activation et configuration du service SMB (partage \\\\NAS-AFR\\DATA)",
      "Validation de l'accès depuis un poste Windows du domaine",
    ],
    technologies: [],
    competences: ["C1 – Gérer le patrimoine informatique", "C2 – Répondre aux incidents et aux demandes d'assistance", "C5 – Mettre à disposition des utilisateurs un service informatique"],
    resultats:
      "NAS opérationnel, intégré au domaine, accessible via \\\\TRUENAS\\data depuis tous les postes Windows du domaine avec droits différenciés admins / utilisateurs.",
    docUrl: "/docs/doc_technique_NAS_v2_.pdf",
  },
];

const projetsEntreprise: Activite[] = [
  {
    id: "support-telephonique",
    titre: "Support téléphonique",
    annee: "2024-2025",
    badge: "Activité",
    icon: <Phone size={22} />,
    gradient: "from-orange-400 to-amber-500",
    imageUrl: "/images/support-telephonique.svg",
    requirePassword: "Azerty13247@",
    objectifs:
      "Assurer le support téléphonique de premier niveau auprès des utilisateurs de Kereis : réceptionner les appels, diagnostiquer les problèmes à distance et guider les utilisateurs pas à pas vers la résolution de leur incident.",
    travaux: [
      "Réception d'un appel de Mme DUPONT (Chargée de clientèle) signalant l'impossibilité de se connecter à sa session Windows",
      "Diagnostic à distance : identification d'un mot de passe expiré après le délai de 90 jours",
      "Guidage téléphonique pas à pas pour la réinitialisation du mot de passe via la procédure Windows",
      "Vérification de la reconnexion réussie et du bon fonctionnement des applications métier (Outlook, logiciel de gestion)",
      "Envoi d'un e-mail de suivi récapitulatif avec conseils de prévention (anticipation de l'expiration du MDP)",
      "Réception de la confirmation de résolution par retour e-mail de l'utilisatrice",
    ],
    technologies: [],
    competences: [
      "C1 – Gérer le patrimoine informatique",
      "C2 – Répondre aux incidents et aux demandes d'assistance",
    ],
    resultats:
      "Incident résolu en 16 minutes par téléphone, sans déplacement. Session utilisateur rétablie, accès Outlook et logiciel métier confirmés. Suivi écrit réalisé par e-mail pour traçabilité et archivage.",
    docUrl: "/docs/Procedure_Support_Telephonique.docx",
  },
  {
    id: "support-compte",
    titre: "Support informatique — Compte",
    annee: "2024-2025",
    badge: "Activité",
    icon: <UserCog size={22} />,
    gradient: "from-orange-400 to-amber-500",
    imageUrl: "/images/support-compte.svg",
    requirePassword: "Azerty13247@",
    objectifs:
      "Traiter une demande de réinitialisation de mot de passe reçue par e-mail : identifier l'utilisateur, réinitialiser le compte via Active Directory et confirmer la résolution par retour e-mail.",
    travaux: [
      "Réception d'un e-mail de Thomas Martin signalant l'impossibilité d'accéder à son compte Kereis",
      "Identification et localisation du compte dans la console Active Directory Users and Computers",
      "Réinitialisation du mot de passe via ADUC avec obligation de changement à la prochaine connexion",
      "Communication du mot de passe temporaire à l'utilisateur par voie téléphonique sécurisée",
      "Envoi de l'e-mail de confirmation avec instructions de première connexion",
      "Clôture du ticket TKT-2025-0312 après vérification de la résolution",
    ],
    technologies: [],
    competences: [
      "C1 – Gérer le patrimoine informatique",
      "C2 – Répondre aux incidents et aux demandes d'assistance",
    ],
    resultats:
      "Compte utilisateur rétabli en moins de 15 minutes. Ticket clôturé avec traçabilité complète de l'échange e-mail. Utilisateur autonome après réinitialisation du mot de passe via Active Directory.",
    docUrl: "/docs/Ticket_Reinitialisation_MDP_Kereis.docx",
  },
  {
    id: "incident-pc",
    titre: "Gestion d'un incident PC",
    annee: "2025-2026",
    badge: "Activité",
    icon: <Laptop size={22} />,
    gradient: "from-orange-500 to-amber-600",
    imageUrl: "/images/incident-pc.svg",
    requirePassword: "Utec1234@",
    objectifs:
      "Prendre en charge un poste Windows défaillant signalé par un utilisateur, ouvrir un ticket d'incident dans BMC Remedy, obtenir les autorisations nécessaires et expédier le matériel en atelier pour réparation.",
    travaux: [
      "Réception du poste Windows en panne et diagnostic de premier niveau (démarrage, hardware)",
      "Création du ticket d'incident dans BMC Remedy avec catégorisation et priorité",
      "Rédaction du mail d'autorisation à l'expéditeur et au responsable hiérarchique",
      "Emballage sécurisé du matériel et envoi en atelier de réparation",
      "Suivi du ticket jusqu'à la résolution et clôture dans BMC Remedy",
    ],
    technologies: [],
    competences: [
      "C1 – Gérer le patrimoine informatique",
      "C2 – Répondre aux incidents et aux demandes d'assistance",
      "C5 – Mettre à disposition des utilisateurs un service informatique",
    ],
    resultats:
      "Incident traité dans les délais ITIL : ticket créé, autorisations obtenues, matériel envoyé en atelier. Traçabilité complète dans BMC Remedy avec historique des actions.",
    docUrl: "/docs/Procedure_Incident_PC.docx",
  },
  {
    id: "imprimante",
    titre: "Partage d'imprimante réseau",
    annee: "2025-2026",
    badge: "Activité",
    icon: <Printer size={22} />,
    gradient: "from-teal-500 to-cyan-600",
    imageUrl: "/images/imprimante.svg",
    requirePassword: "Utec1234@",
    objectifs:
      "Mettre en service une imprimante réseau partagée à la Banque de France via l'outil PADII (Gestion des files d'impression ADBDF), en effectuant la réservation d'adresse IP, le raccordement réseau et la configuration du partage.",
    travaux: [
      "Réservation d'une adresse IP fixe pour l'imprimante dans le système de gestion ADBDF (ticket REQ000000484360)",
      "Raccordement physique de l'imprimante au réseau (câblage, prise RJ45, VLAN)",
      "Ouverture d'une demande de partage dans l'outil PADII avec paramètres : nom, modèle, emplacement",
      "Validation de la file d'impression et test d'impression depuis un poste du domaine",
      "Traçabilité des actions via tickets de demande (REQ000000391095, REQ000000484360)",
    ],
    technologies: [],
    competences: [
      "C1 – Gérer le patrimoine informatique",
      "C2 – Répondre aux incidents et aux demandes d'assistance",
      "C5 – Mettre à disposition des utilisateurs un service informatique",
    ],
    resultats:
      "Imprimante réseau opérationnelle et partagée sur le domaine Active Directory. Adresse IP réservée et file d'impression configurée via PADII. Utilisateurs en mesure d'imprimer depuis leurs postes.",
    docUrl: "/docs/Procedure_Imprimante.docx",
  },
  {
    id: "ticketing-portsair",
    titre: "Outil de ticketing — Portsair",
    annee: "2025-2026",
    badge: "Activité",
    icon: <ClipboardList size={22} />,
    gradient: "from-violet-500 to-indigo-600",
    imageUrl: "/images/ticketing-portsair.svg",
    requirePassword: "Utec1234@",
    objectifs:
      "Utiliser l'outil de ticketing EV Service Manager (Portsair) de la Banque de France pour créer, suivre et clôturer des tickets d'incidents et de demandes de service dans le respect du processus ITIL.",
    travaux: [
      "Prise en main de l'interface EV Service Manager (Portsair) — files d'attente, formulaires",
      "Création d'un ticket d'incident réseau (S251208_00209) avec catégorie, priorité et description",
      "Suivi de la file d'attente Q21601R_BUT (Paris Siège) et traitement des tickets entrants",
      "Qualification, escalade et résolution des incidents dans les délais SLA définis",
      "Clôture du ticket avec compte rendu de résolution et satisfaction utilisateur",
    ],
    technologies: [],
    competences: [
      "C1 – Gérer le patrimoine informatique",
      "C2 – Répondre aux incidents et aux demandes d'assistance",
    ],
    resultats:
      "Maîtrise de l'outil de ticketing Portsair (EV Service Manager) utilisé à la Banque de France. Incidents traités conformément au processus ITIL avec traçabilité complète dans la file Q21601R_BUT.",
    docUrl: "/docs/Procedure_Ticketing_Portsair.docx",
  },
  {
    id: "masterisation",
    titre: "Masterisation d'un poste Windows",
    annee: "2025-2026",
    badge: "Activité",
    icon: <Server size={22} />,
    gradient: "from-blue-500 to-cyan-600",
    imageUrl: "/images/masterisation.svg",
    requirePassword: "Utec1234@",
    objectifs:
      "Réaliser la masterisation complète d'un poste Windows 11 en entreprise : préparation et personnalisation du système, généralisation via Sysprep, capture de l'image WIM et redéploiement sur un poste cible intégré au domaine Active Directory.",
    travaux: [
      "Installation et personnalisation de Windows 11 selon les standards de l'entreprise",
      "Configuration des paramètres système, logiciels métiers et paramètres réseau",

      "Intégration du poste masterisé au domaine Active Directory (AFR.LOCAL)",
      "Rédaction de la procédure de masterisation pour capitaliser la démarche",
    ],
    technologies: [],
    competences: ["C1 – Gérer le patrimoine informatique", "C5 – Mettre à disposition des utilisateurs un service informatique"],
    resultats:
      "Poste Windows 11 masterisé, intégré au domaine et opérationnel, avec une procédure documentée permettant de reproduire la démarche sur d'autres postes du parc.",
    docUrl: "/docs/Procedure_Masterisation_Entreprise.docx",
  },
  {
    id: "blancco",
    titre: "Effacement sécurisé des données",
    annee: "2025-2026",
    badge: "Activité",
    icon: <Shield size={22} />,
    gradient: "from-red-500 to-rose-600",
    imageUrl: "/images/blancco-erasure.svg",
    requirePassword: "Utec1234@",
    objectifs:
      "Réaliser l'effacement sécurisé et certifié des données d'un poste informatique avant restitution ou recyclage, à l'aide du logiciel Blancco déployé depuis une clé USB bootable.",
    travaux: [
      "Réinitialisation du BIOS aux paramètres d'usine et vérification de l'absence de mot de passe",
      "Désactivation du Secure Boot pour permettre le boot sur la clé Linux Blancco",
      "Sélection du mode réseau (Ethernet) et démarrage de l'interface Blancco",
      "Authentification sur la console BMC et vérification de la connexion réseau",
      "Sélection du disque NVMe Samsung et lancement de l'effacement certifié",
      "Génération du rapport d'effacement conforme (NIST 800-88, DoD 5220.22-M)",
    ],
    technologies: [],
    competences: [
      "C1 – Gérer le patrimoine informatique",
      "C5 – Mettre à disposition des utilisateurs un service informatique",
    ],
    resultats:
      "Disque NVMe effacé de façon irréversible avec rapport certifié archivé dans la console Blancco Management Console (BMC), garantissant la conformité légale avant restitution du poste.",
    docUrl: "/docs/Procedure_Effacement_Blancco.docx",
  },
];

/* ─────────────────────────────────────────────
   MODAL DÉTAIL PROJET
───────────────────────────────────────────── */
function ModalProjet({ activite, onClose }: { activite: Activite; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl border border-indigo-500/30 bg-[#13131f] shadow-2xl shadow-indigo-950/60 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Barre colorée */}
        <div className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r ${activite.gradient}`} />

        {/* Image header */}
        {activite.imageUrl && (
          <div className="w-full h-48 overflow-hidden rounded-t-2xl shrink-0">
            <img src={activite.imageUrl} alt={activite.titre} className="w-full h-full object-cover object-center" />
            <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-t from-[#13131f] via-transparent to-transparent" />
          </div>
        )}

        <div className="p-6 flex flex-col gap-5">
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${activite.gradient} text-white shadow-lg`}>
                {activite.icon}
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-white">{activite.titre}</h2>
                {activite.soustitre && <p className="text-sm text-slate-400 mt-0.5">{activite.soustitre}</p>}
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold bg-amber-500/15 text-amber-300 ring-1 ring-amber-500/30">
                <Star size={9} className="fill-amber-400 text-amber-400" />{activite.badge}
              </span>
              <span className="text-xs text-slate-500">{activite.annee}</span>
              <button onClick={onClose} className="ml-1 p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Bouton téléchargement documentation */}
          {activite.docUrl && (
            <a
              href={activite.docUrl}
              download
              className="flex items-center justify-center gap-3 w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 hover:opacity-90 hover:shadow-blue-500/40 transition-all duration-200"
            >
              <FileText size={16} />
              Télécharger la documentation
            </a>
          )}

          {/* Objectifs */}
          <div className="rounded-xl bg-indigo-950/30 border border-indigo-900/30 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-indigo-400 mb-2">Objectifs</p>
            <p className="text-sm text-slate-300 leading-relaxed">{activite.objectifs}</p>
          </div>

          {/* Travaux */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-indigo-400 mb-3">Travaux réalisés</p>
            <ul className="space-y-2">
              {activite.travaux.map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                  <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-indigo-400/70" />
                  <span className="leading-snug">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Compétences BTS */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-indigo-400 mb-2">Compétences BTS</p>
            <div className="flex flex-wrap gap-2">
              {activite.competences.map((c) => (
                <span key={c} className="rounded-lg border border-indigo-900/40 bg-indigo-950/40 px-2.5 py-1 text-xs font-medium text-slate-300">{c}</span>
              ))}
            </div>
          </div>

          {/* Résultats */}
          <div className="rounded-xl bg-emerald-950/20 border border-emerald-900/20 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400 mb-2">Résultats</p>
            <p className="text-sm text-slate-300 leading-relaxed">{activite.resultats}</p>
          </div>

          {/* Footer */}
          {activite.explorUrl && (
            <div className="flex gap-3 pt-1">
              <a href={activite.explorUrl} target="_blank" rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${activite.gradient} px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90`}>
                Explorer<ExternalLink size={14} />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

/* ─────────────────────────────────────────────
   CARTE PROJET MAJEUR — Image + bouton détails
───────────────────────────────────────────── */
/* ─────────────────────────────────────────────
   MODAL MOT DE PASSE
───────────────────────────────────────────── */
function ModalPassword({ onSuccess, onClose, gradient, password }: { onSuccess: () => void; onClose: () => void; gradient: string; password: string }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const [show, setShow] = useState(false);

  function handleCheck() {
    if (value === password) {
      onSuccess();
    } else {
      setError(true);
      setShake(true);
      setValue("");
      setTimeout(() => setShake(false), 500);
    }
  }

  if (typeof window === "undefined") return null;
  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div
        className={`relative w-full max-w-sm rounded-2xl border border-indigo-700/40 bg-[#13131f] p-7 shadow-2xl ${shake ? "animate-[shake_0.4s_ease]" : ""}`}
        style={{ animation: shake ? "shake 0.4s ease" : undefined }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Barre gradient top */}
        <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${gradient}`} />

        <button onClick={onClose} className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors">
          <X size={18} />
        </button>

        <div className="flex flex-col items-center gap-3 mb-6">
          <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg`}>
            <KeyRound size={22} />
          </div>
          <h2 className="text-lg font-bold text-white">Accès protégé</h2>
          <p className="text-xs text-slate-400 text-center">Ce document est confidentiel.<br />Entrez le mot de passe pour y accéder.</p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); handleCheck(); }} className="space-y-4">
          <div className="relative">
            <input
              type={show ? "text" : "password"}
              value={value}
              onChange={(e) => { setValue(e.target.value); setError(false); }}
              placeholder="Mot de passe"
              autoFocus
              className={`w-full rounded-xl border ${error ? "border-red-500/60 bg-red-500/5" : "border-indigo-700/40 bg-[#1a1a2e]"} px-4 py-2.5 pr-10 text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500/60 transition-colors`}
            />
            <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors">
              {show ? <Shield size={15} /> : <Shield size={15} />}
            </button>
          </div>
          {error && <p className="text-xs text-red-400 text-center">Mot de passe incorrect. Réessayez.</p>}
          <button
            type="submit"
            className={`w-full rounded-xl bg-gradient-to-r ${gradient} px-4 py-2.5 text-sm font-bold text-white shadow hover:opacity-90 transition-opacity`}
          >
            Accéder
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
}

function CarteMajeure({ activite, index }: { activite: Activite; index: number }) {
  const [open, setOpen] = useState(false);
  const [askPassword, setAskPassword] = useState(false);

  return (
    <>
      <article
        className="group relative overflow-hidden rounded-2xl border border-indigo-900/40 bg-[#13131f] cursor-pointer hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
        style={{ animationDelay: `${index * 0.1}s` }}
        onClick={() => { if (activite.requirePassword) { setAskPassword(true); } else { setOpen(true); } }}
      >
        {/* Image */}
        <div className="relative w-full h-48 overflow-hidden">
          {activite.imageUrl ? (
            <img
              src={activite.imageUrl}
              alt={activite.titre}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${activite.gradient} opacity-30`} />
          )}
          {/* Overlay bas */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#13131f] via-[#13131f]/20 to-transparent" />

          {/* Badge flottant */}
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold bg-black/60 text-amber-300 ring-1 ring-amber-500/40 backdrop-blur-sm">
              <Star size={9} className="fill-amber-400 text-amber-400" />{activite.badge}
            </span>
          </div>
          <div className="absolute top-3 right-3">
            <span className="text-xs text-slate-400 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-lg">{activite.annee}</span>
          </div>
        </div>

        {/* Bas de carte */}
        <div className="p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${activite.gradient} text-white shadow`}>
              {activite.icon}
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-bold text-white leading-tight truncate">{activite.titre}</h3>
              {activite.soustitre && (
                <p className="text-xs text-slate-500 truncate mt-0.5">{activite.soustitre}</p>
              )}
            </div>
          </div>

          {/* Bouton */}
          <button
            type="button"
            className={`w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${activite.gradient} px-4 py-2.5 text-sm font-bold text-white shadow-md hover:opacity-90 hover:shadow-lg transition-all duration-200`}
            onClick={(e) => { e.stopPropagation(); if (activite.requirePassword) { setAskPassword(true); } else { setOpen(true); } }}
          >
            {activite.requirePassword && <KeyRound size={13} />}
            Voir les détails
            <ArrowUpRight size={15} />
          </button>
        </div>
      </article>

      {askPassword && (
        <ModalPassword
          gradient={activite.gradient}
          password={activite.requirePassword!}
          onClose={() => setAskPassword(false)}
          onSuccess={() => { setAskPassword(false); setOpen(true); }}
        />
      )}
      {open && <ModalProjet activite={activite} onClose={() => setOpen(false)} />}
    </>
  );
}

/* ─────────────────────────────────────────────
   CARTE COMPACTE — Repliée par défaut, dépliable
───────────────────────────────────────────── */
function CarteCompacte({ activite, index }: { activite: Activite; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className="group relative overflow-hidden rounded-2xl border border-indigo-900/30 bg-gradient-to-br from-[#1a1a2e] to-[#16162a] transition-all duration-300 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${activite.gradient} opacity-80`} />

      <div className="p-5 pl-7">
        {/* En-tête cliquable */}
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left"
          aria-expanded={expanded}
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              {activite.logoUrl ? (
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow p-1.5 overflow-hidden">
                  <img src={activite.logoUrl} alt={activite.titre} className="h-6 w-6 object-contain" />
                </div>
              ) : (
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${activite.gradient} text-white shadow`}>
                  {activite.icon}
                </div>
              )}
              <div className="min-w-0">
                <h3 className="text-base font-bold text-white leading-tight truncate">{activite.titre}</h3>
                {activite.soustitre && (
                  <p className="text-xs text-slate-500 truncate mt-0.5">{activite.soustitre}</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="hidden sm:block text-slate-500 text-xs">{activite.annee}</span>
              <span className="rounded-full px-2.5 py-0.5 text-xs font-medium bg-indigo-500/10 text-indigo-300 ring-1 ring-indigo-500/20 whitespace-nowrap">
                {activite.badge}
              </span>
              <ChevronDown
                size={16}
                className={`text-slate-500 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              />
            </div>
          </div>

        </button>

        {/* Contenu dépliable */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expanded ? "max-h-[1000px] opacity-100 mt-5" : "max-h-0 opacity-0"}`}>
          <div className="pt-4 border-t border-indigo-900/30 space-y-4">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-indigo-400/80 mb-1.5">Objectifs</h4>
              <p className="text-slate-300 text-sm leading-relaxed">{activite.objectifs}</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-indigo-400/80 mb-2">Travaux réalisés</h4>
              <ul className="space-y-1.5 text-sm text-slate-400">
                {activite.travaux.map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-indigo-400/60" />
                    <span className="leading-snug">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-indigo-400/80 mb-2">Compétences BTS</h4>
              <div className="flex flex-wrap gap-1.5">
                {activite.competences.map((c) => (
                  <span key={c} className="rounded-lg border border-indigo-900/40 bg-indigo-950/40 px-2.5 py-0.5 text-xs font-medium text-slate-300">
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-indigo-400/80 mb-1.5">Résultats</h4>
              <p className="text-slate-300 text-sm leading-relaxed">{activite.resultats}</p>
            </div>
            {activite.docUrl && (
              <a href={activite.docUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-indigo-700/40 bg-indigo-950/40 px-4 py-2 text-sm font-semibold text-indigo-300 hover:bg-indigo-500/20 transition-all duration-300">
                <FileText size={13} />Documentation
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ActivitesSection() {
  const [activeTab, setActiveTab] = useState<TabType>("pro");

  return (
    <section id="activites" className="relative py-24 px-6 md:px-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/30 via-transparent to-indigo-950/20" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2 animate-slide-up">
            Mes Projets
          </h2>
          <div className="h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mb-4" />
          <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
            Projets réalisés en formation et en milieu professionnel — infrastructure réseau, virtualisation, sécurisation et services cloud.
          </p>
        </header>

        {/* ── SÉLECTEUR DE CATÉGORIE (cliquable) ── */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {/* Onglet Professionnels */}
          <button
            type="button"
            onClick={() => setActiveTab("pro")}
            className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 cursor-pointer
              ${activeTab === "pro"
                ? "border-amber-500/60 bg-gradient-to-br from-amber-500/15 to-orange-600/10 shadow-lg shadow-amber-500/10"
                : "border-indigo-900/30 bg-[#1a1a2e]/60 hover:border-amber-500/30 hover:bg-amber-500/5"
              }`}
            aria-pressed={activeTab === "pro"}
          >
            {/* glow actif */}
            {activeTab === "pro" && (
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent pointer-events-none" />
            )}
            {/* barre colorée en haut */}
            <div className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-amber-500 to-orange-500 transition-opacity duration-300 ${activeTab === "pro" ? "opacity-100" : "opacity-0 group-hover:opacity-40"}`} />

            <div className="flex items-center gap-4">
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-lg transition-all duration-300
                ${activeTab === "pro"
                  ? "bg-gradient-to-br from-amber-500 to-orange-600 shadow-amber-500/30"
                  : "bg-amber-500/10 text-amber-400"
                }`}>
                <Briefcase size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-400/70 mb-0.5">Alternance · Kereis &amp; Banque de France</p>
                <h3 className="text-lg font-bold text-white">Projets Professionnels</h3>
                <p className="text-xs text-slate-500 mt-0.5">{projetsEntreprise.length} activités · 2 entreprises</p>
              </div>
              {/* indicateur actif */}
              <div className={`w-2.5 h-2.5 rounded-full shrink-0 transition-all duration-300 ${activeTab === "pro" ? "bg-amber-400 shadow-[0_0_8px_2px_rgba(251,191,36,0.5)]" : "bg-slate-700"}`} />
            </div>
          </button>

          {/* Onglet Personnels */}
          <button
            type="button"
            onClick={() => setActiveTab("perso")}
            className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 cursor-pointer
              ${activeTab === "perso"
                ? "border-indigo-500/60 bg-gradient-to-br from-indigo-500/15 to-purple-600/10 shadow-lg shadow-indigo-500/10"
                : "border-indigo-900/30 bg-[#1a1a2e]/60 hover:border-indigo-500/30 hover:bg-indigo-500/5"
              }`}
            aria-pressed={activeTab === "perso"}
          >
            {activeTab === "perso" && (
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent pointer-events-none" />
            )}
            <div className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-indigo-500 to-purple-500 transition-opacity duration-300 ${activeTab === "perso" ? "opacity-100" : "opacity-0 group-hover:opacity-40"}`} />

            <div className="flex items-center gap-4">
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-lg transition-all duration-300
                ${activeTab === "perso"
                  ? "bg-gradient-to-br from-indigo-500 to-purple-600 shadow-indigo-500/30"
                  : "bg-indigo-500/10 text-indigo-400"
                }`}>
                <GraduationCap size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400/70 mb-0.5">Formation · BTS SIO SISR</p>
                <h3 className="text-lg font-bold text-white">Projets Personnels</h3>
                <p className="text-xs text-slate-500 mt-0.5">{projetsEcole.length} projets · Lab & autoformation</p>
              </div>
              <div className={`w-2.5 h-2.5 rounded-full shrink-0 transition-all duration-300 ${activeTab === "perso" ? "bg-indigo-400 shadow-[0_0_8px_2px_rgba(99,102,241,0.5)]" : "bg-slate-700"}`} />
            </div>
          </button>
        </div>

        {/* ── CONTENU SELON ONGLET ── */}
        {activeTab === "pro" && (
          <div key="pro" className="animate-fade-in space-y-12">

            {/* ── 1ère année · Kereis ── */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25">
                  <Briefcase size={12} className="text-orange-400" />
                  <span className="text-xs font-bold uppercase tracking-widest text-orange-300">1ère année · Kereis · 2024-2025</span>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-orange-500/20 to-transparent" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                {projetsEntreprise
                  .filter((a) => a.annee === "2024-2025")
                  .map((activite, index) => (
                    <div
                      key={activite.id}
                      className="animate-slide-up opacity-0"
                      style={{ animationDelay: `${0.05 + index * 0.1}s`, animationFillMode: "forwards" }}
                    >
                      <CarteMajeure activite={activite} index={index} />
                    </div>
                  ))}
              </div>
            </div>

            {/* ── 2ème année · Banque de France ── */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25">
                  <Briefcase size={12} className="text-amber-400" />
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-300">2ème année · Banque de France · 2025-2026</span>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-amber-500/20 to-transparent" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                {projetsEntreprise
                  .filter((a) => a.annee === "2025-2026")
                  .map((activite, index) => (
                    <div
                      key={activite.id}
                      className="animate-slide-up opacity-0"
                      style={{ animationDelay: `${0.05 + index * 0.1}s`, animationFillMode: "forwards" }}
                    >
                      <CarteMajeure activite={activite} index={index} />
                    </div>
                  ))}
              </div>
            </div>

          </div>
        )}

        {activeTab === "perso" && (
          <div key="perso" className="animate-fade-in space-y-12">

            {/* ── PROJETS MAJEURS ── */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25">
                  <Star size={13} className="fill-amber-400 text-amber-400" />
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-300">Projets Majeurs</span>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-amber-500/20 to-transparent" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                {projetsEcole
                  .filter((p) => p.badge === "Projet majeur")
                  .map((activite, index) => (
                    <div
                      key={activite.id}
                      className="animate-slide-up opacity-0"
                      style={{ animationDelay: `${0.05 + index * 0.1}s`, animationFillMode: "forwards" }}
                    >
                      <CarteMajeure activite={activite} index={index} />
                    </div>
                  ))}
              </div>
            </div>

            {/* ── FORMATIONS & LAB ── */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25">
                  <GraduationCap size={13} className="text-indigo-400" />
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-300">Projets</span>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/20 to-transparent" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {projetsEcole
                  .filter((p) => p.badge !== "Projet majeur")
                  .map((activite, index) => (
                    <div
                      key={activite.id}
                      className="animate-slide-up opacity-0"
                      style={{ animationDelay: `${0.15 + index * 0.08}s`, animationFillMode: "forwards" }}
                    >
                      <CarteCompacte activite={activite} index={index} />
                    </div>
                  ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
