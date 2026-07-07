import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import InterventionSection from "@/components/InterventionSection";

export default function HomePage() {
  return (
    <main className="bg-[#f5f5f5]">
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <InterventionSection />
    </main>
  );
}