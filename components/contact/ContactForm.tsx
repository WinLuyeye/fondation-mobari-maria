"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section className="bg-gray-100 px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        {/* Texte */}

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
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
        >
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[3px] text-yellow-500">
            Écrivez-nous
          </span>

          <h2 className="mb-6 text-3xl font-extrabold text-gray-900 md:text-5xl">
            Parlons ensemble de votre engagement
          </h2>

          <p className="leading-8 text-gray-600">
            Que vous souhaitiez soutenir nos actions, devenir partenaire,
            participer à nos projets ou obtenir plus d'informations, notre
            équipe est disponible pour vous répondre.
          </p>
        </motion.div>

        {/* Formulaire */}

        <motion.form
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="rounded-2xl bg-white p-8 shadow-xl"
        >
          <div className="grid gap-5">
            <input
              type="text"
              placeholder="Nom complet"
              className="rounded-lg border border-gray-200 px-5 py-4 outline-none transition focus:border-yellow-400"
            />

            <input
              type="email"
              placeholder="Adresse email"
              className="rounded-lg border border-gray-200 px-5 py-4 outline-none transition focus:border-yellow-400"
            />

            <input
              type="text"
              placeholder="Téléphone"
              className="rounded-lg border border-gray-200 px-5 py-4 outline-none transition focus:border-yellow-400"
            />

            <input
              type="text"
              placeholder="Sujet"
              className="rounded-lg border border-gray-200 px-5 py-4 outline-none transition focus:border-yellow-400"
            />

            <textarea
              rows={5}
              placeholder="Votre message"
              className="rounded-lg border border-gray-200 px-5 py-4 outline-none transition focus:border-yellow-400"
            />

            <button
              type="submit"
              className="rounded-lg bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:bg-yellow-300"
            >
              Envoyer le message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
