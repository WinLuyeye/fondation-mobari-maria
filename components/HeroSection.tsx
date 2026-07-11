"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";

const slides = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dukqurtfw/image/upload/v1783460711/IMG-20260704-WA0104_bnbyux.jpg",

    title: "Ensemble, construisons une société plus juste et plus solidaire.",

    description:
      "Depuis 2022, la Fondation Mobari Maria œuvre en République Démocratique du Congo pour promouvoir la dignité humaine, l'inclusion sociale et le développement durable des communautés les plus vulnérables.",

    primary: "Faire un don",

    secondary: "Découvrir la fondation",
  },

  {
    id: 2,
    image:
      "https://res.cloudinary.com/dukqurtfw/image/upload/v1783459502/IMG-20260704-WA0057_kag2xg.jpg",

    title: "Former, accompagner et autonomiser pour transformer durablement les vies.",

    description:
      "Nous développons des programmes d'éducation, de formation professionnelle, d'entrepreneuriat et d'insertion afin d'offrir aux femmes, aux jeunes et aux enfants vulnérables les moyens de construire leur avenir.",

    primary: "Nos missions",

    secondary: "Nos programmes",
  },

  {
    id: 3,
    image:
      "https://res.cloudinary.com/dukqurtfw/image/upload/v1783459503/IMG-20260704-WA0070_gtvhix.jpg",

    title: "Chaque action aujourd'hui construit l'espoir de demain.",

    description:
      "À travers nos actions humanitaires, nos campagnes de sensibilisation, notre soutien aux orphelins, aux familles vulnérables et aux personnes âgées, nous faisons naître un changement durable dans les communautés.",

    primary: "Nos réalisations",

    secondary: "Rejoindre notre mission",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <Navbar />

      <AnimatePresence initial={false}>
        <motion.div
          key={slides[current].id}
          initial={{
            opacity: 0,
            scale: 1.02,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          {/* Image avec effet zoom */}

          <motion.div
            initial={{
              scale: 1.05,
            }}
            animate={{
              scale: 1.12,
            }}
            transition={{
              duration: 8,
              ease: "linear",
            }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].image}
              alt={slides[current].title}
              fill
              priority={current === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>

          {/* Overlay */}

          <div className="absolute inset-0 bg-black/65" />

          {/* Content */}

          <div className="relative z-10 flex h-full items-center justify-center px-6">
            <div className="mx-auto max-w-5xl text-center text-white">
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                }}
                className="
                  mb-6
                  text-4xl
                  font-extrabold
                  leading-tight

                  sm:text-5xl

                  md:text-6xl

                  lg:text-7xl
                "
              >
                {slides[current].title}
              </motion.h1>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                }}
                className="
                  mx-auto
                  mb-10
                  max-w-3xl
                  text-base
                  leading-8
                  text-gray-200

                  sm:text-lg

                  md:text-xl
                "
              >
                {slides[current].description}
              </motion.p>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                }}
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-5

                  sm:flex-row
                "
              >
                <Link
                  href="/don"
                  className="
                    rounded-lg
                    bg-yellow-400
                    px-8
                    py-4
                    text-sm
                    font-semibold
                    text-black
                    transition
                    hover:bg-yellow-300

                    md:text-base
                  "
                >
                  {slides[current].primary}
                </Link>

                <Link
                  href="/a-propos"
                  className="
                    rounded-lg
                    border
                    border-white
                    px-8
                    py-4
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-white
                    hover:text-black

                    md:text-base
                  "
                >
                  {slides[current].secondary}
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
