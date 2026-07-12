"use client";

import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

export default function HistorySection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[3px] text-yellow-500">
              Notre histoire
            </span>

            <h2 className="mb-8 text-4xl font-extrabold text-gray-900 md:text-5xl">
              Une fondation née d'un engagement
              <span className="text-yellow-500"> humain</span>
            </h2>

            <p className="mb-6 leading-8 text-gray-600">
              La Fondation Mobari Maria (FMM) est une organisation à but non
              lucratif créée le <strong>5 juin 2022</strong>, une date
              hautement symbolique puisqu'elle correspond à l'anniversaire de
              naissance de sa fondatrice,
              <strong> Madame Maria Mobari EKOLOANE.</strong>
            </p>

            <p className="mb-6 leading-8 text-gray-600">
              À travers cette initiative, un événement personnel est devenu un
              engagement durable au service des populations les plus
              vulnérables de la République Démocratique du Congo.
            </p>

            <p className="leading-8 text-gray-600">
              Depuis sa création, la Fondation agit avec détermination pour
              promouvoir la solidarité, l'inclusion sociale,
              l'autonomisation des femmes et des jeunes ainsi que le
              développement humain durable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-500 p-10 text-black shadow-xl"
          >
            <CalendarDays size={55} />

            <h3 className="mt-8 text-4xl font-extrabold">
              05 Juin 2022
            </h3>

            <p className="mt-6 leading-8">
              Date officielle de création de la Fondation Mobari Maria.
            </p>

            <div className="mt-10 rounded-xl bg-white/20 p-6 backdrop-blur">
              <p className="font-semibold uppercase tracking-widest">
                Notre devise
              </p>

              <h4 className="mt-3 text-2xl font-bold">
                Vivre pour transformer
              </h4>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}