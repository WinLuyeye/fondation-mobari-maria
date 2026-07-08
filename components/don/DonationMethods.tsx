import {
  Banknote,
  Shirt,
  GraduationCap,
  HeartHandshake,
  Package,
  Users,
} from "lucide-react";

const methods = [
  {
    title: "Don financier",
    description:
      "Soutenez directement nos programmes grâce à une contribution financière.",
    icon: Banknote,
  },

  {
    title: "Don matériel",
    description:
      "Offrez des vêtements, fournitures, équipements ou produits essentiels.",
    icon: Package,
  },

  {
    title: "Don alimentaire",
    description:
      "Aidez les familles vulnérables avec des produits de première nécessité.",
    icon: HeartHandshake,
  },

  {
    title: "Don scolaire",
    description:
      "Participez à l'éducation des enfants grâce aux fournitures et matériels scolaires.",
    icon: GraduationCap,
  },

  {
    title: "Don vestimentaire",
    description: "Apportez des vêtements aux enfants et familles accompagnées.",
    icon: Shirt,
  },

  {
    title: "Don de compétences",
    description:
      "Mettez vos connaissances et votre temps au service de notre mission.",
    icon: Users,
  },
];

export default function DonationMethods() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <span className="text-sm font-bold uppercase tracking-[3px] text-yellow-500">
            Nos besoins
          </span>

          <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">
            Différentes façons de nous soutenir
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {methods.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-2xl bg-white p-8 text-center shadow-lg transition hover:-translate-y-2"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400">
                  <Icon className="text-black" />
                </div>

                <h3 className="mb-4 text-xl font-bold">{item.title}</h3>

                <p className="leading-7 text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
