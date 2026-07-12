"use client";

import {
  GraduationCap,
  BriefcaseBusiness,
  Lightbulb,
  HeartHandshake,
  HeartPulse,
  Building2,
  ShieldCheck,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const interventions = [
  {
    title: "Éducation & Inclusion scolaire",
    description:
      "Nous favorisons l'accès à une éducation de qualité pour les enfants et les jeunes, notamment les plus vulnérables, afin de garantir l'égalité des chances.",
    icon: GraduationCap,
  },

  {
    title: "Formation professionnelle",
    description:
      "Nous développons les compétences des jeunes, des femmes et des jeunes filles afin de faciliter leur insertion professionnelle et leur autonomie.",
    icon: BriefcaseBusiness,
  },

  {
    title: "Entrepreneuriat",
    description:
      "Nous accompagnons la création d'activités génératrices de revenus et encourageons l'entrepreneuriat comme levier de développement durable.",
    icon: Lightbulb,
  },

  {
    title: "Action humanitaire",
    description:
      "Nous apportons une assistance alimentaire, matérielle, sociale et morale aux personnes en situation de vulnérabilité.",
    icon: HeartHandshake,
  },

  {
    title: "Santé & Bien-être",
    description:
      "Nous contribuons à l'amélioration des conditions de vie et au bien-être des communautés grâce à des actions de prévention et d'accompagnement.",
    icon: HeartPulse,
  },

  {
    title: "Développement communautaire",
    description:
      "Nous mettons en œuvre des projets durables visant à améliorer les conditions de vie des communautés locales.",
    icon: Building2,
  },

  {
    title: "Protection sociale & Droits humains",
    description:
      "Nous sensibilisons les communautés à la protection des enfants, aux droits humains, à la citoyenneté responsable et à la cohésion sociale.",
    icon: ShieldCheck,
  },

  {
    title: "Sensibilisation & Inclusion",
    description:
      "Nous organisons des campagnes contre les violences basées sur le genre, les abus, les discriminations et favorisons une société plus inclusive.",
    icon: Users,
  },
];

export default function InterventionSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Header */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="mb-4 inline-block rounded-full bg-yellow-100 px-5 py-2 text-sm font-bold uppercase tracking-[3px] text-yellow-600">
            Nos domaines d'intervention
          </span>

          <h2 className="mb-6 text-3xl font-extrabold text-gray-900 md:text-5xl">
            Des actions concrètes pour
            <span className="text-yellow-500"> transformer durablement les vies</span>
          </h2>

          <p className="leading-8 text-gray-600">
            La Fondation Mobari Maria agit à travers plusieurs programmes
            complémentaires afin de promouvoir la dignité humaine,
            l'inclusion sociale, l'autonomisation et le développement durable
            des communautés en République Démocratique du Congo.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

          {interventions.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition hover:shadow-xl"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-black">

                  <Icon
                    size={30}
                    className="text-black transition-all duration-300 group-hover:text-yellow-400"
                  />

                </div>

                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="leading-7 text-gray-600">
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