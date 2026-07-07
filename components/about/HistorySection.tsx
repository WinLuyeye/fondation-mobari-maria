import { CalendarDays } from "lucide-react";

export default function HistorySection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span className="mb-4 block text-sm font-bold uppercase tracking-[3px] text-yellow-500">
              Notre histoire
            </span>

            <h2 className="mb-6 text-3xl font-extrabold md:text-5xl">
              Une vision née d'un engagement humain
            </h2>

            <p className="mb-6 leading-8 text-gray-600">
              La Fondation Mobari Maria (FMM) est une organisation à but non
              lucratif créée le 5 juin 2022, une date symbolique correspondant à
              l'anniversaire de naissance de sa fondatrice Madame Maria Mobari
              EKOLOANE.
            </p>

            <p className="leading-8 text-gray-600">
              À travers cette fondation, un événement personnel est devenu un
              engagement durable au service des populations vulnérables en
              République Démocratique du Congo.
            </p>
          </div>

          <div className="rounded-2xl bg-gray-100 p-10">
            <CalendarDays size={45} className="mb-6 text-yellow-500" />

            <h3 className="mb-3 text-3xl font-bold">5 Juin 2022</h3>

            <p className="leading-7 text-gray-600">
              Date de création officielle de la Fondation Mobari Maria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
