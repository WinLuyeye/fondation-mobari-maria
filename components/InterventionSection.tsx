"use client";

import {
  GraduationCap,
  BriefcaseBusiness,
  Lightbulb,
  HeartHandshake,
  HeartPulse,
  Building2,
} from "lucide-react";
import { motion } from "framer-motion";

const interventions = [
  {
    title: "Éducation",
    description:
      "Favoriser l'accès à l'éducation et accompagner les enfants et les jeunes vers un meilleur avenir.",
    icon: GraduationCap,
  },
  {
    title: "Formation professionnelle",
    description:
      "Développer les compétences nécessaires pour faciliter l'insertion professionnelle et l'autonomie financière.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Entrepreneuriat",
    description:
      "Accompagner les femmes et les jeunes dans la création et le développement de leurs activités.",
    icon: Lightbulb,
  },
  {
    title: "Action humanitaire",
    description:
      "Apporter une assistance matérielle, alimentaire et sociale aux personnes en situation de vulnérabilité.",
    icon: HeartHandshake,
  },
  {
    title: "Santé & bien-être",
    description:
      "Contribuer à l'amélioration des conditions de vie et au bien-être des communautés.",
    icon: HeartPulse,
  },
  {
    title: "Développement communautaire",
    description:
      "Mettre en œuvre des projets durables pour améliorer les conditions de vie des populations.",
    icon: Building2,
  },
];

export default function InterventionSection() {
  return (
    <section className="bg-gray-50 px-6 py-24">

      <div className="mx-auto max-w-7xl">


        {/* Header */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[3px] text-yellow-500">
            Nos domaines d'intervention
          </span>


          <h2 className="mb-6 text-3xl font-extrabold text-gray-900 md:text-5xl">
            Construire un avenir meilleur
            <span className="text-yellow-500">
              {" "}ensemble
            </span>
          </h2>


          <p className="text-gray-600 leading-8">
            À travers ses différents programmes, la Fondation Mobari Maria
            agit pour répondre aux besoins essentiels des communautés et
            favoriser un développement humain durable.
          </p>

        </div>





        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {interventions.map((item, index) => {

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
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                className="group rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 transition group-hover:bg-black">

                  <Icon
                    size={28}
                    className="text-black transition group-hover:text-white"
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