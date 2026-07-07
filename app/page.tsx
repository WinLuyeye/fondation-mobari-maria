import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import InterventionSection from "@/components/InterventionSection";
import RealizationsSection from "@/components/RealizationsSection";
import ImpactSection from "@/components/ImpactSection";
import JoinMissionSection from "@/components/JoinMissionSection";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="bg-[#f5f5f5]">
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <InterventionSection />
      <RealizationsSection />
      <ImpactSection />
      <JoinMissionSection />
      <TestimonialSection />
      <Footer />
    </main>
  );
}