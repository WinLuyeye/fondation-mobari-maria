"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        {/* Image */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative h-[450px] overflow-hidden rounded-2xl">
            <Image
              src="https://res.cloudinary.com/dukqurtfw/image/upload/v1783812933/IMG-20260704-WA0093_s4f1mw.jpg"
              alt="Fondation Mobari Maria - Action humanitaire"
              fill
              className="object-cover"
            />
          </div>

          {/* Badge */}

          <div className="absolute -bottom-6 -right-6 rounded-xl bg-yellow-400 px-8 py-6 shadow-xl">
            <p className="text-3xl font-bold text-black">2022</p>

            <p className="text-sm font-medium text-black">Année de création</p>
          </div>
        </motion.div>

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[3px] text-yellow-500">
            À propos de nous
          </span>

          <h2 className="mb-6 text-3xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            Fondation Mobari Maria :
            <br />
            <span className="text-yellow-500">Vivre pour transformer</span>
          </h2>

          <p className="mb-6 text-base leading-8 text-gray-600">
            La Fondation Mobari Maria est une organisation à but non lucratif créée le 5 juin 2022 avec la conviction qu'une société plus juste se construit par la solidarité, l'inclusion et l'engagement citoyen.
          </p>

          <p className="mb-8 text-base leading-8 text-gray-600">
           Depuis sa création, la Fondation agit auprès des populations vulnérables afin de favoriser leur autonomie, protéger leurs droits et contribuer durablement au développement des communautés en République Démocratique du Congo.
          </p>

          {/* Quote */}

          <div className="mb-8 border-l-4 border-yellow-400 pl-5">
            <p className="text-xl font-semibold italic text-gray-800">
              « Chaque vie possède le pouvoir de transformer une autre. »
            </p>
          </div>

          <Link
            href="/a-propos"
            className="inline-flex items-center gap-3 rounded-lg bg-black px-7 py-4 font-semibold text-white transition hover:bg-yellow-400 hover:text-black"
          >
            En savoir plus
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
