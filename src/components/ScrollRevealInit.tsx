"use client";

import { useEffect } from "react";

export default function ScrollRevealInit() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll("section[id]:not(#accueil)")
    ) as HTMLElement[];

    // Add hidden class via JS — sections stay visible if JS fails
    for (const el of sections) el.classList.add("reveal-hidden");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.remove("reveal-hidden");
            entry.target.classList.add("section-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.06 }
    );

    for (const el of sections) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return null;
}
