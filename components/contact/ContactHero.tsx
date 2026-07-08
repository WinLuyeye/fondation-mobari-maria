import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      <Image
        src="https://res.cloudinary.com/dukqurtfw/image/upload/v1783460711/IMG-20260704-WA0104_bnbyux.jpg"
        alt="Contact Fondation Mobari Maria"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex min-h-[90vh] items-center justify-center px-6 text-center text-white">
        <div className="max-w-4xl">
          <span className="mb-5 inline-block text-sm font-bold uppercase tracking-[3px] text-yellow-400">
            Fondation Mobari Maria
          </span>

          <h1 className="mb-6 text-4xl font-extrabold md:text-6xl">
            Contactez-nous
          </h1>

          <p className="text-lg leading-8 text-gray-200">
            Une question, un projet, un partenariat ou simplement envie de
            rejoindre notre mission ? Nous sommes à votre écoute.
          </p>
        </div>
      </div>
    </section>
  );
}
