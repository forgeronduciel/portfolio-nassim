import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nassim ABIARI - Portfolio BTS SIO SISR",
  description: "Nassim ABIARI — Étudiant en BTS SIO option SISR en alternance à la Banque de France. Portfolio E5 : compétences, projets infrastructure, veille technologique.",
  keywords: ["BTS SIO", "SISR", "portfolio", "alternance", "Banque de France", "infrastructure", "réseau", "cybersécurité"],
  authors: [{ name: "Nassim ABIARI" }],
  openGraph: {
    title: "Nassim ABIARI - Portfolio BTS SIO SISR",
    description: "Portfolio E5 — Compétences réseau, infrastructure, cybersécurité. Alternance Banque de France.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Nassim ABIARI - Portfolio BTS SIO SISR",
    description: "Portfolio E5 — Compétences réseau, infrastructure, cybersécurité.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
