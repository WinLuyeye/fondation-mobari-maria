import ProjectsHero from "@/components/projets/ProjectsHero";
import ProjectsIntro from "@/components/projets/ProjectsIntro";
import ProjectsGrid from "@/components/projets/ProjectsGrid";
import ProjectCTA from "@/components/projets/ProjectCTA";

export const metadata = {
  title: "Nos projets | Fondation Mobari Maria",
  description:
    "Découvrez les projets et actions concrètes de la Fondation Mobari Maria auprès des enfants, familles vulnérables et communautés en RDC.",
};

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsHero />
      <ProjectsIntro />
      <ProjectsGrid />
      <ProjectCTA />
    </main>
  );
}