const objectives = [
  "Mettre en place des programmes de formation socio-professionnelle.",
  "Encourager l'autonomisation économique des femmes.",
  "Former les jeunes aux métiers d'avenir et au leadership.",
  "Promouvoir la solidarité et la responsabilité sociale.",
  "Développer des projets durables au profit des communautés.",
  "Apporter une assistance humanitaire aux personnes vulnérables.",
];

export default function ObjectivesSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-10 text-center text-3xl font-extrabold md:text-5xl">
          Nos objectifs
        </h2>

        <div className="grid gap-5">
          {objectives.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border bg-white p-6 shadow-sm"
            >
              <p className="font-medium text-gray-700">✓ {item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
