import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import HeroSection from "@/components/HeroSection";
import PresentationSection from "@/components/PresentationSection";
import CompetencesSection from "@/components/CompetencesSection";
import RealisationsSection from "@/components/RealisationsSection";
import ActivitesSection from "@/components/ActivitesSection";
import VeilleSection from "@/components/VeilleSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import ReadingProgress from "@/components/ReadingProgress";
import BackToTop from "@/components/BackToTop";
import ScrollRevealInit from "@/components/ScrollRevealInit";

export default function Home() {
  return (
    <>
      <ReadingProgress />
      <ScrollRevealInit />
      <Sidebar />
      <MobileNav />

      <main className="lg:mr-72 pt-16 lg:pt-0">
        <HeroSection />
        <PresentationSection />
        <CompetencesSection />
        <RealisationsSection />
        <ActivitesSection />
        <VeilleSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
      </main>

      <BackToTop />
      <CookieBanner />
    </>
  );
}
