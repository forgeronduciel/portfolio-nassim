"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const refuseCookies = () => {
    localStorage.setItem("cookie-consent", "refused");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 max-w-md card-bg rounded-2xl p-6 border border-indigo-900/30 shadow-2xl shadow-black/50 z-50 animate-slide-up">
      <h3 className="text-lg font-bold text-indigo-400 mb-2">Cookies</h3>
      <p className="text-sm text-slate-300 mb-4">
        Nous utilisons des cookies techniques pour le bon fonctionnement du site et des mesures anonymes d'audience. Vous pouvez accepter ou refuser.
      </p>
      <div className="flex gap-3 mb-2">
        <button
          type="button"
          onClick={refuseCookies}
          className="flex-1 px-4 py-2 rounded-xl border border-indigo-500/30 text-sm text-slate-300 hover:border-indigo-500 hover:text-indigo-400 transition-all duration-300"
        >
          Refuser les cookies non nécessaires
        </button>
        <button
          type="button"
          onClick={acceptCookies}
          className="px-6 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-sm hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
        >
          Accepter
        </button>
      </div>
      <a href="#" className="text-sm text-slate-400 hover:text-indigo-400 underline transition-colors">
        En savoir plus
      </a>
    </div>
  );
}
