export default function NewsHero() {
  return (
    <section className="bg-black px-6 py-32 text-center text-white min-h-[90vh]">
      <div className="mx-auto max-w-4xl">
        <span className="mb-5 inline-block text-sm font-bold uppercase tracking-[3px] text-yellow-400">
          Fondation Mobari Maria
        </span>

        <h1 className="mb-6 text-4xl font-extrabold md:text-6xl">
          Nos actualités
        </h1>

        <p className="text-lg leading-8 text-gray-300">
          Découvrez les activités, événements et initiatives de la Fondation
          Mobari Maria sur le terrain.
        </p>
      </div>
    </section>
  );
}
