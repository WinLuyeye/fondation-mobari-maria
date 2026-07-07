import { HeartHandshake, ShieldCheck, Users, HandHeart } from "lucide-react";

const values = [
  {
    title: "Solidarité",
    description:
      "Nous croyons à l'entraide et au soutien des personnes vulnérables.",
    icon: HeartHandshake,
  },

  {
    title: "Compassion",
    description:
      "Chaque action est guidée par le respect de la dignité humaine.",
    icon: HandHeart,
  },

  {
    title: "Responsabilité",
    description: "Nous agissons avec transparence et engagement.",
    icon: ShieldCheck,
  },

  {
    title: "Inclusion",
    description: "Nous œuvrons pour donner une chance à chacun.",
    icon: Users,
  },
];

export default function ValuesSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-extrabold md:text-5xl">
          Nos valeurs
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <div
                key={index}
                className="rounded-2xl bg-white p-8 text-center shadow-lg"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400">
                  <Icon className="text-black" />
                </div>

                <h3 className="mb-3 font-bold text-xl">{value.title}</h3>

                <p className="text-sm leading-7 text-gray-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
