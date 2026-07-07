import Link from "next/link";

export default function ProjectCTA() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl rounded-3xl bg-black px-8 py-14 text-center text-white">
        <h2 className="text-3xl font-extrabold md:text-5xl">
          Participez à notre mission
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-300">
          Chaque contribution permet de renforcer nos actions et d'apporter un
          soutien durable aux communautés vulnérables.
        </p>

        <Link
          href="/don"
          className="mt-8 inline-flex rounded-lg bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:bg-yellow-300"
        >
          Soutenir la fondation
        </Link>
      </div>
    </section>
  );
}
