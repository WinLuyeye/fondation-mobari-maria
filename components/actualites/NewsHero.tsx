"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function NewsHero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6 text-center text-white">
      {/* Background Image */}

      <motion.div
        initial={{
          scale: 1,
        }}
        animate={{
          scale: 1.08,
        }}
        transition={{
          duration: 8,
          ease: "linear",
        }}
        className="absolute inset-0"
      >
        <Image
          src="https://res.cloudinary.com/dukqurtfw/image/upload/v1783460711/IMG-20260704-WA0104_bnbyux.jpg"
          alt="Actualités Fondation Mobari Maria"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="relative z-10 mx-auto max-w-4xl"
      >
        <span className="mb-5 inline-block text-sm font-bold uppercase tracking-[3px] text-yellow-400">
          Fondation Mobari Maria
        </span>

        <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          Nos actualités
        </h1>

        <p className="mx-auto max-w-3xl text-base leading-8 text-gray-200 sm:text-lg md:text-xl">
          Découvrez les activités, événements et initiatives de la Fondation
          Mobari Maria sur le terrain.
        </p>
      </motion.div>
    </section>
  );
}
