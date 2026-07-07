import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      <Image
        src="https://res.cloudinary.com/dukqurtfw/image/upload/v1783460711/IMG-20260704-WA0104_bnbyux.jpg"
        alt="Fondation Mobari Maria"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 px-6 text-center text-white">
        <span className="mb-5 inline-block text-sm font-bold uppercase tracking-[4px] text-yellow-400">
          Fondation Mobari Maria
        </span>

        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-7xl">
          Vivre pour transformer
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-200">
          Une fondation engagée pour l'autonomisation, l'inclusion sociale et le
          développement humain en République Démocratique du Congo.
        </p>
      </div>
    </section>
  );
}
