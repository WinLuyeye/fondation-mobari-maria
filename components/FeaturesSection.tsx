import {
  GraduationCap,
  HeartHandshake,
  UsersRound,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Autonomisation",
    description:
      "Nous accompagnons les femmes et les jeunes vers l'indépendance économique grâce à l'entrepreneuriat, la formation et le développement des compétences.",
    icon: UsersRound,
  },

  {
    title: "Éducation & Formation",
    description:
      "Nous favorisons l'accès à l'éducation et développons des programmes de formation professionnelle pour préparer l'avenir.",
    icon: GraduationCap,
  },

  {
    title: "Action Humanitaire",
    description:
      "Nous apportons une aide concrète aux orphelins, aux familles vulnérables et aux communautés dans le besoin.",
    icon: HeartHandshake,
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative z-30 -mt-20 px-6 pb-24 md:-mt-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 overflow-hidden rounded-xl bg-white shadow-2xl md:grid-cols-3">

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