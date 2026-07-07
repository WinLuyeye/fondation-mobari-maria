"use client";

import Link from "next/link";
import { HeartHandshake, Users, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const actions = [
  {
    title: "Faire un don",
    description:
      "Votre contribution permet de financer nos actions humanitaires et d'apporter un soutien aux personnes vulnérables.",
    icon: HeartHandshake,
    link: "/don",
  },

  {
    title: "Devenir bénévole",
    description:
      "Rejoignez une équipe engagée et participez directement à nos initiatives communautaires.",
    icon: Users,
    link: "/benevole",
  },

  {
    title: "Devenir partenaire",
    description:
      "Construisons ensemble des projets durables pour un impact plus grand auprès des communautés.",
    icon: Handshake,
    link: "/partenaire",
  },
];


export default function JoinMissionSection() {
  return (
    <section className="relative overflow-hidden bg-yellow-400 px-6 py-24">


      {/* Background decoration */}

      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-black/10" />

      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-black/10" />



      <div className="relative z-10 mx-auto max-w-7xl">


        {/* Header */}

        <div className="mx-auto mb-14 max-w-3xl text-center">


          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[3px] text-black/70">
            Rejoignez notre mission
          </span>



          <h2 className="mb-6 text-3xl font-extrabold leading-tight text-black md:text-5xl">

            Ensemble, construisons
            <br />

            un avenir meilleur

          </h2>



          <p className="text-lg leading-8 text-black/70">

            Transformer une vie, c'est déjà transformer une famille.
            Transformer une famille, c'est transformer une communauté.

          </p>


        </div>





        {/* Actions */}

        <div className="grid gap-8 md:grid-cols-3">


          {actions.map((action, index) => {

            const Icon = action.icon;


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

                className="rounded-2xl bg-white p-8 text-center shadow-lg transition hover:-translate-y-2"
              >


                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-black">

                  <Icon
                    size={30}
                    className="text-yellow-400"
                  />

                </div>




                <h3 className="mb-4 text-2xl font-bold text-gray-900">

                  {action.title}

                </h3>




                <p className="mb-6 leading-7 text-gray-600">

                  {action.description}

                </p>




                <Link
                  href={action.link}
                  className="inline-flex rounded-md bg-black px-7 py-3 font-semibold text-white transition hover:bg-gray-800"
                >
                  En savoir plus
                </Link>


              </motion.div>

            );

          })}


        </div>


      </div>


    </section>
  );
}