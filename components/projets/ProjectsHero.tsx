import Image from "next/image";

export default function ProjectsHero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      <Image
        src="https://res.cloudinary.com/dukqurtfw/image/upload/v1783459503/IMG-20260704-WA0070_gtvhix.jpg"
        alt="Projets Fondation Mobari Maria"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 px-6 text-center text-white">
        <span className="mb-5 inline-block text-sm font-bold uppercase tracking-[4px] text-yellow-400">
          Nos réalisations
        </span>

        <h1 className="text-4xl font-extrabold sm:text-5xl md:text-7xl">
          Des actions concrètes,
          <br />
          des vies transformées
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-200">
          À travers ses projets, la Fondation Mobari Maria apporte un soutien
          durable aux personnes vulnérables et aux communautés.
        </p>
      </div>
    </section>
  );
}
