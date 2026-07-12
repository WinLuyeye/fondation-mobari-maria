import {
  GraduationCap,
  HeartHandshake,
  UsersRound,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Éducation & Inclusion scolaire",
    description:
      "Nous favorisons l'accès à une éducation de qualité pour les enfants et les jeunes, en soutenant l'inclusion scolaire, la réussite éducative et le développement des compétences nécessaires à leur avenir.",
    icon: GraduationCap,
  },

  {
    title: "Autonomisation & Entrepreneuriat",
    description:
      "Nous accompagnons les femmes, les jeunes et les jeunes filles à travers la formation professionnelle, le leadership, l'entrepreneuriat et l'insertion socio-professionnelle afin de renforcer leur autonomie économique.",
    icon: UsersRound,
  },

  {
    title: "Protection sociale & Action humanitaire",
    description:
      "Nous apportons une assistance aux orphelins, aux familles vulnérables, aux personnes âgées et aux communautés tout en menant des actions de sensibilisation, de solidarité et de protection des droits humains.",
    icon: HeartHandshake,
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative z-30 -mt-20 px-6 pb-24 md:-mt-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-2xl md:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
}