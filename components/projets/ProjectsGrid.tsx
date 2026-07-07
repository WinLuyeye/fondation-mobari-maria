import {
  HeartHandshake,
  GraduationCap,
  Users,
  PackageHeart,
  Baby,
  HandHeart,
} from "lucide-react";

const projects = [
  {
    title: "Soutien aux enfants vulnérables",
    description:
      "Visites dans les orphelinats, accompagnement moral et soutien aux enfants ayant besoin d'aide.",
    icon: Baby,
  },

  {
    title: "Distribution humanitaire",
    description:
      "Distribution de vivres, vêtements, fournitures scolaires et produits de première nécessité.",
    icon: PackageHeart,
  },

  {
    title: "Éducation et sensibilisation",
    description:
      "Organisation d'activités éducatives, récréatives et de sensibilisation pour les jeunes.",
    icon: GraduationCap,
  },

  {
    title: "Accompagnement des familles",
    description:
      "Soutien aux familles en difficulté à travers des initiatives de solidarité.",
    icon: Users,
  },

  {
    title: "Actions communautaires",
    description:
      "Mise en place d'initiatives visant à renforcer les communautés locales.",
    icon: HandHeart,
  },

  {
    title: "Programmes solidaires",
    description:
      "Développement d'actions humanitaires pour apporter une aide concrète.",
    icon: HeartHandshake,
  },
];

export default function ProjectsGrid() {
  return (
    <section className="bg-gray-100 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <div
                key={index}
                className="rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400">
                  <Icon size={30} className="text-black" />
                </div>

                <h3 className="mb-4 text-xl font-bold">{project.title}</h3>

                <p className="leading-7 text-gray-600">{project.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
