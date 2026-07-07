"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  School,
  HandHeart,
  Users,
} from "lucide-react";

const realizations = [
  {
    title: "Soutien aux orphelins",
    description:
      "Des visites régulières dans les orphelinats pour apporter du soutien moral, matériel et humain aux enfants vulnérables.",
    icon: HeartHandshake,
  },

  {
    title: "Distribution de dons",
    description:
      "Distribution de vivres, vêtements, fournitures scolaires et produits de première nécessité aux familles dans le besoin.",
    icon: HandHeart,
  },

  {
    title: "Actions éducatives",
    description:
      "Organisation d'activités éducatives, récréatives et de sensibilisation pour accompagner les enfants et les jeunes.",
    icon: School,
  },

  {
    title: "Accompagnement communautaire",
    description:
      "Des initiatives solidaires pour soutenir les familles en difficulté et renforcer les communautés locales.",
    icon: Users,
  },
];


const images = [
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=900&auto=format&fit=crop",
    alt: "Action humanitaire",
  },

  {
    src: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=900&auto=format&fit=crop",
    alt: "Soutien aux enfants",
  },

  {
    src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=900&auto=format&fit=crop",
    alt: "Solidarité communautaire",
  },
];


export default function RealizationsSection() {
  return (
    <section className="bg-white px-6 py-24">

      <div className="mx-auto max-w-7xl">


        {/* Header */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[3px] text-yellow-500">
            Nos réalisations
          </span>

          <h2 className="mb-6 text-3xl font-extrabold text-gray-900 md:text-5xl">
            Des actions concrètes pour
            <span className="text-yellow-500">
              {" "}transformer des vies
            </span>
          </h2>


          <p className="leading-8 text-gray-600">
            Depuis sa création, la Fondation Mobari Maria mène des actions
            concrètes pour apporter de l'espoir, restaurer la dignité et
            améliorer les conditions de vie des personnes vulnérables.
          </p>

        </div>





        <div className="grid gap-12 lg:grid-cols-2">


          {/* Gallery */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="grid grid-cols-2 gap-5"
          >

            {images.map((image, index) => (

              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl ${
                  index === 0
                    ? "col-span-2 h-[280px]"
                    : "h-[220px]"
                }`}
              >

                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-500 hover:scale-110"
                />

              </div>

            ))}


          </motion.div>






          {/* Content */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="grid gap-6"
          >

            {realizations.map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex gap-5 rounded-xl border border-gray-100 p-5 transition hover:shadow-lg"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-400">

                    <Icon
                      size={24}
                      className="text-black"
                    />

                  </div>


                  <div>

                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>


                    <p className="leading-7 text-gray-600">
                      {item.description}
                    </p>

                  </div>


                </div>
              );

            })}


          </motion.div>


        </div>


      </div>


    </section>
  );
}