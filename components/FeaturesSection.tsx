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
      "Nous favorisons l'accès à une éducation inclusive pour les enfants vulnérables, soutenons la réussite scolaire et développons des programmes éducatifs favorisant l'égalité des chances.",
    icon: UsersRound,
  },

  {
    title: "Autonomisation des femmes & des jeunes",
    description:
      "Nous accompagnons les femmes, les jeunes et les jeunes filles à travers des formations professionnelles, l'entrepreneuriat, le leadership et l'insertion socio-professionnelle.",
    icon: GraduationCap,
  },

  {
    title: "Protection sociale & Action humanitaire",
    description:
      "Nous intervenons auprès des orphelins, des familles vulnérables, des personnes âgées et des communautés en apportant une assistance humanitaire, un accompagnement social et des actions de sensibilisation.",
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