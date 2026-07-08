import Image from "next/image";

export default function DonationCTA() {
  return (
    <section className="relative overflow-hidden px-6 py-28 text-center text-white">
      {/* Background Image */}

      <Image
        src="https://res.cloudinary.com/dukqurtfw/image/upload/v1783459503/IMG-20260704-WA0070_gtvhix.jpg"
        alt="Soutenir la Fondation Mobari Maria"
        fill
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-4xl">
        <span className="mb-5 inline-block text-sm font-bold uppercase tracking-[3px] text-yellow-400">
          Fondation Mobari Maria
        </span>

        <h2 className="mb-6 text-3xl font-extrabold leading-tight md:text-5xl">
          Ensemble, faisons naître
          <span className="text-yellow-400"> l'espoir</span>
        </h2>

        <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-gray-200">
          Transformer une vie, c'est déjà transformer une famille. Transformer
          une famille, c'est transformer une communauté.
        </p>

        <button
          className="
            rounded-lg
            bg-yellow-400
            px-10
            py-4
            font-semibold
            text-black
            transition
            hover:bg-yellow-300
          "
        >
          Faire un don maintenant
        </button>
      </div>
    </section>
  );
}
