import { Building2, MapPin, Target, Users, ChevronRight } from "lucide-react";

export default function EntrepriseSection() {
  return (
    <section id="entreprise" className="py-20 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2 animate-slide-up">Mon Entreprise</h2>
      <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mb-12" />

      <div className="max-w-5xl space-y-8">
        {/* Company Header */}
        <div className="card-bg rounded-2xl p-8 border border-indigo-900/30 hover-lift">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-2xl shadow-lg animate-pulse-glow">
              BdF
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">Banque de France</h3>
              <p className="text-slate-400 mb-3">Banque centrale nationale française</p>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <MapPin size={16} className="text-indigo-400" />
                1 rue de la Vrillière, 75001 Paris, France
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="card-bg rounded-2xl p-6 border border-indigo-900/30 hover-lift">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Building2 size={24} className="text-indigo-400" />
            Présentation
          </h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            La <span className="text-indigo-400 font-semibold">Banque de France</span> est la banque centrale nationale française. Son rôle principal est d'assurer la mise en œuvre de la politique monétaire de la France, de garantir la stabilité financière et de fournir des services économiques à la collectivité.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Elle joue un rôle majeur au sein de l'<span className="text-indigo-400">Eurosystème</span>, qui regroupe la Banque centrale européenne et les banques centrales des États membres de la zone euro.
          </p>
        </div>

        {/* Missions */}
        <div className="card-bg rounded-2xl p-6 border border-indigo-900/30 hover-lift">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Target size={24} className="text-indigo-400" />
            Missions principales
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-indigo-950/50 rounded-xl hover:bg-indigo-900/30 transition-colors">
              <h4 className="font-semibold text-white mb-2">Stratégie monétaire</h4>
              <p className="text-sm text-slate-400">
                Contribuer à la définition et à l'exécution de la politique monétaire au niveau national et européen.
              </p>
            </div>
            <div className="p-4 bg-indigo-950/50 rounded-xl hover:bg-indigo-900/30 transition-colors">
              <h4 className="font-semibold text-white mb-2">Stabilité financière</h4>
              <p className="text-sm text-slate-400">
                Assurer la stabilité du système financier et réduire les risques systémiques.
              </p>
            </div>
            <div className="p-4 bg-indigo-950/50 rounded-xl hover:bg-indigo-900/30 transition-colors">
              <h4 className="font-semibold text-white mb-2">Service économique</h4>
              <p className="text-sm text-slate-400">
                Fournir des analyses économiques, des statistiques, ainsi que des services aux entreprises et aux particuliers.
              </p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-indigo-950/50 rounded-xl border-l-4 border-indigo-500">
            <p className="text-sm text-slate-300">
              <span className="font-semibold text-white">Gouverneur :</span> François Villeroy de Galhau
            </p>
          </div>
        </div>

        {/* Organigramme */}
        <div className="card-bg rounded-2xl p-6 border border-indigo-900/30 hover-lift">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Users size={24} className="text-indigo-400" />
            Organigramme de mon service
          </h3>
          <p className="text-slate-400 text-sm mb-6">
            Le service dans lequel je travaille dépend de la <span className="text-indigo-400">Direction Générale des Systèmes d'Information (DGSI)</span>, plus précisément du département <span className="text-indigo-400">DIT PRISM</span>.
          </p>

          {/* Org Chart */}
          <div className="space-y-4">
            {/* Direction */}
            <div className="flex justify-center">
              <div className="p-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500 rounded-xl text-center animate-pulse-glow">
                <p className="text-xs text-slate-400 mb-1">Directrice DGSI – DIT PRISM</p>
                <p className="font-semibold text-indigo-400">Catherine Joyeux</p>
              </div>
            </div>

            <div className="flex justify-center">
              <ChevronRight size={24} className="rotate-90 text-indigo-500/50" />
            </div>

            {/* Chefs de service */}
            <div className="flex justify-center gap-4 flex-wrap">
              <div className="p-4 bg-indigo-950/50 border border-indigo-500/30 rounded-xl text-center">
                <p className="text-xs text-slate-400 mb-1">Chef de service</p>
                <p className="font-semibold text-white">Anthony Debelle</p>
              </div>
              <div className="p-4 bg-indigo-950/50 border border-indigo-500/30 rounded-xl text-center">
                <p className="text-xs text-slate-400 mb-1">Adjoint</p>
                <p className="font-semibold text-white">Benoît Chemin</p>
              </div>
            </div>

            <div className="flex justify-center">
              <ChevronRight size={24} className="rotate-90 text-indigo-500/50" />
            </div>

            {/* Pôles */}
            <div className="flex justify-center">
              <div className="p-4 bg-indigo-950/30 border border-indigo-500/50 rounded-xl hover-glow max-w-md w-full">
                <div className="text-center mb-3">
                  <span className="px-2 py-1 text-xs bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded font-semibold">MON PÔLE</span>
                </div>
                <h4 className="font-semibold text-white text-center mb-2">Technicien de proximité</h4>
                <p className="text-xs text-slate-400 text-center mb-3">~30 techniciens</p>
                <div className="space-y-2 text-xs">
                  <div className="p-2 bg-indigo-950/50 rounded-lg">
                    <p className="text-slate-400">Siège</p>
                    <p className="text-white">David Delbare</p>
                  </div>
                  <div className="p-2 bg-indigo-950/50 rounded-lg">
                    <p className="text-slate-400">Réaumur</p>
                    <p className="text-white">Michael Fejer de Harali</p>
                  </div>
                  <div className="p-2 bg-indigo-950/50 rounded-lg">
                    <p className="text-slate-400">Noisiel</p>
                    <p className="text-white">Didier Quinquilla</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-3 text-center">Support sur site, intervention directe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
