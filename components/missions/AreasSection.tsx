import {
  GraduationCap,
  BriefcaseBusiness,
  HeartHandshake,
  HandCoins,
  Stethoscope,
  Users,
} from "lucide-react";

const areas = [
  {
    title: "Éducation",
    description:
      "Favoriser l'accès à l'éducation et à la formation pour les enfants et les jeunes.",
    icon: GraduationCap,
  },

  {
    title: "Formation professionnelle",
    description:
      "Développer les compétences nécessaires à l'insertion professionnelle et l'autonomie financière.",
    icon: BriefcaseBusiness,
  },

  {
    title: "Entrepreneuriat",
    description:
      "Accompagner les femmes et les jeunes dans la création et le développement de leurs activités.",
    icon: HandCoins,
  },

  {
    title: "Action humanitaire",
    description:
      "Apporter une assistance matérielle, alimentaire et sociale aux populations vulnérables.",
    icon: HeartHandshake,
  },

  {
    title: "Santé & bien-être",
    description:
      "Contribuer à l'amélioration des conditions de vie des communautés.",
    icon: Stethoscope,
  },

  {
    title: "Développement communautaire",
    description:
      "Participer à des projets qui améliorent durablement la vie des populations.",
    icon: Users,
  },
];

export default function AreasSection() {
  return (
    <section className="bg-gray-100 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-14 text-center text-3xl font-extrabold md:text-5xl">
          Nos domaines d'intervention
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, index) => {
            const Icon = area.icon;

            return (
              <div
                key={index}
                className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400">
                  <Icon className="text-black" />
                </div>

                <h3 className="mb-4 text-xl font-bold">{area.title}</h3>

                <p className="leading-7 text-gray-600">{area.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
