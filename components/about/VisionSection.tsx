"use client";

import { motion } from "framer-motion";

export default function VisionSection() {
  return (
    <section className="bg-gray-50 px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mx-auto max-w-5xl text-center"
      >
        <span className="text-sm font-bold uppercase tracking-[3px] text-yellow-500">
          Notre vision
        </span>

        <h2 className="mt-6 text-4xl font-extrabold md:text-5xl">
          Construire une société
          <span className="text-yellow-500"> plus juste</span>,
          <span className="text-yellow-500"> plus solidaire</span> et
          <span className="text-yellow-500"> inclusive</span>
        </h2>

        <p className="mt-10 leading-9 text-gray-600">
          Nous aspirons à bâtir une société où chaque personne, quelles que
          soient ses origines ou ses conditions de vie, bénéficie d'une réelle
          opportunité de s'épanouir, de retrouver sa dignité et de participer
          activement au développement de sa communauté.
        </p>

        <p className="mt-8 leading-9 text-gray-600">
          Notre ambition est de faire émerger une génération de femmes
          autonomes, de jeunes responsables et d'entrepreneurs engagés capables
          de devenir les acteurs du développement de la République
          Démocratique du Congo.
        </p>
      </motion.div>
    </section>
  );
}