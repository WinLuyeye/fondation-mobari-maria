"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "./Navbar";

const slides = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dukqurtfw/image/upload/v1783460711/IMG-20260704-WA0104_bnbyux.jpg",
    title: "Ensemble, transformons des vies.",
    description:
      "Depuis 2022, la Fondation Mobari Maria agit en République Démocratique du Congo pour soutenir les personnes les plus vulnérables grâce à l'éducation, l'action humanitaire et au développement communautaire.",
    primary: "Faire un don",
    secondary: "Découvrir",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dukqurtfw/image/upload/v1783459502/IMG-20260704-WA0057_kag2xg.jpg",
    title: "Former aujourd'hui, bâtir le Congo de demain.",
    description:
      "Nous accompagnons les femmes et les jeunes grâce à la formation professionnelle, au leadership et à l'entrepreneuriat afin de favoriser leur autonomie.",
    primary: "Nos programmes",
    secondary: "Nous rejoindre",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dukqurtfw/image/upload/v1783459503/IMG-20260704-WA0070_gtvhix.jpg",
    title: "Chaque geste compte. Chaque vie mérite une chance.",
    description:
      "Nos actions humanitaires redonnent espoir aux orphelins, aux familles vulnérables et aux communautés qui ont besoin d'un accompagnement durable.",
    primary: "Nos réalisations",
    secondary: "Devenir bénévole",
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

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <Navbar />

      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            current === index
              ? "opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 flex h-full items-center justify-center px-6">
            <div className="mx-auto max-w-5xl text-center text-white">

              <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
                {slide.title}
              </h1>

              <p className="mx-auto mb-10 max-w-3xl text-base leading-8 text-gray-200 sm:text-lg md:text-xl">
                {slide.description}
              </p>

              <div className="items-center justify-center gap-8 sm:flex-row">

                <Link
                  href="/don"
                  className="rounded-lg bg-yellow-400 m-4 px-8 py-4 text-sm font-semibold text-black transition hover:bg-yellow-300 md:text-base"
                >
                  {slide.primary}
                </Link>

                <Link
                  href="/a-propos"
                  className="rounded-lg border border-white px-8 py-4 text-sm font-semibold transition hover:bg-white hover:text-black md:text-base"
                >
                  {slide.secondary}
                </Link>

              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation */}

      {/* <button
        onClick={previousSlide}
        className="absolute left-3 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 backdrop-blur transition hover:bg-white/40 md:flex"
      >
        <ChevronLeft className="text-white" size={28} />
      </button> */}

      {/* <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 backdrop-blur transition hover:bg-white/40 md:flex"
      >
        <ChevronRight className="text-white" size={28} />
      </button> */}

      {/* Indicators */}

      {/* <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-3">

        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              current === index
                ? "w-10 bg-yellow-400"
                : "w-3 bg-white/70"
            }`}
          />
        ))}

      </div> */}
    </section>
  );
}