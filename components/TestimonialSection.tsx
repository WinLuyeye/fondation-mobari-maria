"use client";

import { Quote, Users, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Bénéficiaire",
    role: "Communauté accompagnée",
    text: "Grâce aux actions de la Fondation Mobari Maria, nous avons retrouvé de l'espoir et bénéficié d'un accompagnement précieux.",
  },

  {
    name: "Bénévole FMM",
    role: "Membre engagé",
    text: "Servir les autres est une expérience qui transforme aussi notre propre vie. Chaque action compte.",
  },

  {
    name: "Partenaire",
    role: "Organisation engagée",
    text: "Nous croyons en la vision de la Fondation Mobari Maria et en son engagement pour un développement durable.",
  },
];

const partners = [
  "Partenaire 1",
  "Partenaire 2",
  "Partenaire 3",
  "Partenaire 4",
];

export default function TestimonialSection() {
  return (
    <section className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[3px] text-yellow-500">
            Témoignages
          </span>

          <h2 className="mb-6 text-3xl font-extrabold text-gray-900 md:text-5xl">
            Des histoires qui
            <span className="text-yellow-500"> inspirent</span>
          </h2>

          <p className="leading-8 text-gray-600">
            Derrière chaque action, il y a une personne, une famille et une
            communauté dont la vie peut être transformée.
          </p>
        </div>

        {/* Testimonials */}

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
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
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-xl"
            >
              <Quote className="mb-6 text-yellow-400" size={35} />

              <p className="mb-6 leading-7 text-gray-600">{item.text}</p>

              <h3 className="font-bold text-gray-900">{item.name}</h3>

              <p className="text-sm text-gray-500">{item.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Partners */}

        <div className="mt-20">
          <div className="mb-10 text-center">
            <span className="mb-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[3px] text-yellow-500">
              <Handshake size={18} />
              Nos partenaires
            </span>

            <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Ensemble pour un impact durable
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex h-28 items-center justify-center rounded-xl bg-white font-semibold text-gray-400 shadow-sm"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
