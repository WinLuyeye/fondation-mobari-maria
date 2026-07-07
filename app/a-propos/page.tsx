import AboutHero from "@/components/about/AboutHero";
import HistorySection from "@/components/about/HistorySection";
import VisionSection from "@/components/about/VisionSection";
import ValuesSection from "@/components/about/ValuesSection";

export const metadata = {
  title: "À propos | Fondation Mobari Maria",
  description:
    "Découvrez l'histoire, la vision et les valeurs de la Fondation Mobari Maria (FMM), organisation engagée pour la solidarité et le développement humain en RDC.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <HistorySection />
      <VisionSection />
      <ValuesSection />
    </main>
  );
}
