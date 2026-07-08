import DonationHero from "@/components/don/DonationHero";
import DonationMethods from "@/components/don/DonationMethods";
import DonationImpact from "@/components/don/DonationImpact";
import DonationCTA from "@/components/don/DonationCTA";


export const metadata = {
  title: "Faire un don | Fondation Mobari Maria",
  description:
    "Soutenez la Fondation Mobari Maria et contribuez à transformer des vies grâce à vos dons financiers, matériels ou votre engagement.",
};


export default function DonationPage() {
  return (
    <main>
      <DonationHero />
      <DonationMethods />
      <DonationImpact />
      <DonationCTA />
    </main>
  );
}