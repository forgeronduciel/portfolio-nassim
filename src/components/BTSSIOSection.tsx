import { GraduationCap, Clock, Building, Users, Code, Server, Shield } from "lucide-react";

export default function BTSSIOSection() {
  return (
    <section id="bts-sio" className="py-20 px-6 md:px-12 bg-indigo-950/20">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 animate-slide-up">BTS SIO</h2>
      <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mb-4" />
      <p className="text-slate-400 mb-12 max-w-2xl">Services Informatiques aux Organisations</p>

      {/* Formation Overview */}
      <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl">
        <div className="card-bg rounded-2xl p-6 border border-indigo-900/30 text-center hover-lift">
          <Clock size={32} className="text-indigo-400 mx-auto mb-3" />
          <h3 className="font-bold text-white mb-2">Formation en 2 ans</h3>
          <p className="text-sm text-slate-400">
            Le BTS SIO forme des professionnels capables de répondre aux besoins informatiques des organisations.
          </p>
        </div>
        <div className="card-bg rounded-2xl p-6 border border-indigo-900/30 text-center hover-lift">
          <GraduationCap size={32} className="text-indigo-400 mx-auto mb-3" />
          <h3 className="font-bold text-white mb-2">Deux spécialités</h3>
          <p className="text-sm text-slate-400">
            SLAM (Solutions Logicielles et Applications Métiers) et SISR (Solutions d'Infrastructure, Systèmes et Réseaux)
          </p>
        </div>
        <div className="card-bg rounded-2xl p-6 border border-indigo-900/30 text-center hover-lift">
          <Building size={32} className="text-indigo-400 mx-auto mb-3" />
          <h3 className="font-bold text-white mb-2">Alternance en entreprise</h3>
          <p className="text-sm text-slate-400">
            2 ans en entreprise avec un rythme partagé : 1 semaine en entreprise, 1 semaine à l'école
          </p>
        </div>
      </div>

      {/* Options */}
      <h3 className="text-2xl font-bold text-white mb-6">Les options du BTS SIO</h3>
      <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-5xl">
        {/* Option SLAM */}
        <div className="card-bg rounded-2xl p-6 border border-indigo-900/30 hover-lift">
          <div className="flex items-center gap-3 mb-4">
            <Code size={28} className="text-slate-400" />
            <div>
              <h4 className="text-lg font-bold text-white">Option SLAM</h4>
              <p className="text-sm text-slate-400">Solutions Logicielles et Applications Métiers</p>
            </div>
          </div>
          <p className="text-sm text-slate-400 mb-4">Débouchés professionnels :</p>
          <ul className="space-y-2">
            {["Développeur d'applications", "Programmeur analyste", "Développeur Web", "Concepteur d'applications"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                <span className="w-2 h-2 rounded-full bg-slate-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Option SISR - Highlighted */}
        <div className="card-bg rounded-2xl p-6 border-2 border-indigo-500 relative overflow-hidden hover-glow">
          <div className="absolute top-0 right-0 px-3 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold rounded-bl-lg">
            MON OPTION
          </div>
          <div className="flex items-center gap-3 mb-4">
            <Server size={28} className="text-indigo-400" />
            <div>
              <h4 className="text-lg font-bold text-white">Option SISR</h4>
              <p className="text-sm text-slate-400">Solutions d'Infrastructure, Systèmes et Réseaux</p>
            </div>
          </div>
          <p className="text-sm text-slate-400 mb-4">Débouchés professionnels :</p>
          <ul className="space-y-2">
            {["Administrateur systèmes et réseaux", "Technicien support", "Responsable infrastructure", "Technicien sécurité"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Blocs de compétences */}
      <h3 className="text-2xl font-bold text-white mb-6">Les blocs de compétences</h3>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
        {/* Bloc commun */}
        <div className="card-bg rounded-2xl p-6 border border-indigo-900/30 hover-lift">
          <div className="flex items-center gap-3 mb-4">
            <Users size={28} className="text-indigo-400" />
            <div>
              <h4 className="text-lg font-bold text-white">Support et mise à disposition de services informatiques</h4>
              <p className="text-xs text-slate-500">Socle commun aux deux options</p>
            </div>
          </div>
          <p className="text-sm text-slate-400 mb-4">
            Permet de gérer et maintenir les services informatiques d'une organisation.
          </p>
          <p className="text-sm text-slate-400 mb-2">Compétences clés :</p>
          <ul className="space-y-1">
            {[
              "Gestion du patrimoine informatique",
              "Réponse aux incidents",
              "Développement de la présence en ligne",
              "Travail en mode projet",
              "Organisation du développement professionnel"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-xs text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Bloc SISR */}
        <div className="card-bg rounded-2xl p-6 border border-indigo-500/50 hover-glow">
          <div className="flex items-center gap-3 mb-4">
            <Shield size={28} className="text-indigo-400" />
            <div>
              <h4 className="text-lg font-bold text-white">SISR – Administration des systèmes et des réseaux</h4>
              <p className="text-xs text-slate-500">Spécialisation SISR</p>
            </div>
          </div>
          <p className="text-sm text-slate-400 mb-4">
            Mise en place, configuration et maintenance d'infrastructures réseaux et systèmes.
          </p>
          <p className="text-sm text-slate-400 mb-2">Compétences clés :</p>
          <ul className="space-y-1">
            {[
              "Administration des systèmes et serveurs",
              "Gestion et sécurisation des réseaux",
              "Déploiement et supervision d'infrastructures",
              "Support, maintenance et gestion du parc informatique"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-xs text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
