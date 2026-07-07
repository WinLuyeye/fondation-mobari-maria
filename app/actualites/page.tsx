import NewsHero from "@/components/actualites/NewsHero";
import NewsGrid from "@/components/actualites/NewsGrid";

export const metadata = {
  title: "Actualités | Fondation Mobari Maria",
  description:
    "Découvrez les dernières actualités et actions de la Fondation Mobari Maria.",
};

export default function ActualitesPage() {
  return (
    <main>
      <NewsHero />

      <NewsGrid />
    </main>
  );
}
