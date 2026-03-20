export default function HeroSection() {
  return (
    <section id="accueil" className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Decorative shapes with animations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />

        {/* Large blob top right */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-indigo-900/40 rounded-full blur-3xl animate-float" />
        <div className="absolute top-20 right-40 w-64 h-64 bg-purple-800/30 rounded-full blur-2xl animate-float-delay" />

        {/* Small blobs */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-indigo-600/20 rounded-full blur-xl animate-float-delay-2" />
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-purple-600/30 rounded-full blur-xl animate-float" />

        {/* Bottom left blob */}
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-indigo-800/30 rounded-full blur-2xl animate-float-delay" />

        {/* Additional decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-purple-900/20 rounded-full blur-2xl animate-float-delay-2" />

        {/* Dots pattern */}
        <div className="absolute top-1/3 left-1/3 grid grid-cols-10 gap-4 opacity-30">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={`dot-${i}`} className="w-1 h-1 bg-indigo-400 rounded-full" />
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 animate-slide-up">
        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white shadow-2xl animate-pulse-glow">
          NA
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Nassim <span className="gradient-text">ABIARI</span>
        </h1>
        <p className="text-xl text-slate-300 mb-2">BTS SIO - Option SISR</p>
        <p className="text-lg text-slate-400 mb-6">Technicien de proximité en alternance</p>
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 transition-all duration-300 hover:scale-105 cursor-default">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          Banque de France - DGSI
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-slate-500 tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-indigo-500/50 flex justify-center pt-2">
          <div className="w-1 h-3 rounded-full bg-indigo-500" />
        </div>
      </div>
    </section>
  );
}
