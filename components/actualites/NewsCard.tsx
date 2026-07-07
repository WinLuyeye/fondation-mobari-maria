"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NewsCard({ article }: any) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
      className="overflow-hidden rounded-2xl bg-white shadow-lg"
    >
      <Image
        src={article.image}
        alt={article.title}
        width={600}
        height={400}
        className="h-60 w-full object-cover"
      />

      <div className="p-7">
        <span className="text-sm font-semibold text-yellow-500">
          {article.category}
        </span>

        <h2 className="mt-3 text-2xl font-bold">{article.title}</h2>

        <p className="mt-4 leading-7 text-gray-600">{article.excerpt}</p>

        <Link
          href={`/actualites/${article.slug}`}
          className="mt-6 inline-block rounded-md bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
        >
          Lire l'article
        </Link>
      </div>
    </motion.article>
  );
}
