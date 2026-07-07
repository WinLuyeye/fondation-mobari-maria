import MissionsHero from "@/components/missions/MissionsHero";
import MissionIntro from "@/components/missions/MissionIntro";
import AreasSection from "@/components/missions/AreasSection";
import ObjectivesSection from "@/components/missions/ObjectivesSection";

export const metadata = {
  title: "Nos missions | Fondation Mobari Maria",
  description:
    "Découvrez les missions de la Fondation Mobari Maria : autonomisation des femmes, formation des jeunes, action humanitaire et développement communautaire en RDC.",
};

export default function MissionsPage() {
  return (
    <main>
      <MissionsHero />
      <MissionIntro />
      <AreasSection />
      <ObjectivesSection />
    </main>
  );
}