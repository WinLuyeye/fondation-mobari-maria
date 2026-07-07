"use client";

import { motion } from "framer-motion";
import { CalendarDays, HeartHandshake, Users, HandHeart } from "lucide-react";

const impacts = [
  {
    number: "2022",
    label: "Année de création",
    description:
      "Depuis sa création, la Fondation Mobari Maria œuvre pour un impact social durable.",
    icon: CalendarDays,
  },

  {
    number: "+10",
    label: "Actions solidaires",
    description:
      "Des initiatives humanitaires menées auprès des personnes vulnérables.",
    icon: HeartHandshake,
  },

  {
    number: "+100",
    label: "Bénéficiaires accompagnés",
    description:
      "Des enfants, jeunes et familles soutenus à travers nos programmes.",
    icon: Users,
  },

  {
    number: "+10",
    label: "Communautés soutenues",
    description: "Un engagement continu pour améliorer les conditions de vie.",
    icon: HandHeart,
  },
];

export default function ImpactSection() {
  return (
    <section className="relative overflow-hidden bg-gray-50 px-6 py-24">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[3px] text-yellow-500">
            Notre impact
          </span>

          <h2 className="mb-6 text-3xl font-extrabold text-gray-900 md:text-5xl">
            Chaque action contribue à
            <span className="text-yellow-500"> transformer une vie</span>
          </h2>

          <p className="leading-8 text-gray-600">
            Grâce à l'engagement de nos bénévoles, partenaires et donateurs, la
            Fondation Mobari Maria travaille chaque jour à restaurer la dignité
            et créer de nouvelles opportunités.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {impacts.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{
                  once: true,
                }}
                className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400">
                  <Icon size={30} className="text-black" />
                </div>

                <h3 className="mb-3 text-4xl font-extrabold text-yellow-500">
                  {item.number}
                </h3>

                <h4 className="mb-3 text-lg font-bold text-gray-900">
                  {item.label}
                </h4>

                <p className="text-sm leading-7 text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
