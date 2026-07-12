"use client";

import {
  HeartHandshake,
  ShieldCheck,
  Users,
  HandHeart,
} from "lucide-react";

import { motion } from "framer-motion";

const values = [
  {
    title: "Solidarité",
    description:
      "Nous plaçons l'entraide au cœur de chacune de nos actions afin de soutenir durablement les populations vulnérables.",
    icon: HeartHandshake,
  },

  {
    title: "Compassion",
    description:
      "Nous agissons avec empathie et respect de la dignité humaine auprès de chaque bénéficiaire.",
    icon: HandHeart,
  },

  {
    title: "Responsabilité",
    description:
      "Nos actions sont guidées par la transparence, l'intégrité et une gestion responsable.",
    icon: ShieldCheck,
  },

  {
    title: "Inclusion",
    description:
      "Nous croyons qu'une société forte est une société où chacun trouve sa place sans discrimination.",
    icon: Users,
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="text-sm font-bold uppercase tracking-[3px] text-yellow-500">
            Nos valeurs
          </span>

          <h2 className="mt-5 text-4xl font-extrabold md:text-5xl">
            Les principes qui
            <span className="text-yellow-500"> guident chacune de nos actions</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 transition group-hover:bg-black">
                  <Icon className="text-black transition group-hover:text-white" />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {value.title}
                </h3>

                <p className="leading-8 text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}