import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { news } from "@/components/actualites/newsData";

export async function generateStaticParams() {
  return news.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = news.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "Article introuvable",
    };
  }

  return {
    title: `${article.title} | Fondation Mobari Maria`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = news.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = news.filter((item) => item.slug !== article.slug);

  return (
    <main>
      {/* Hero */}

      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6 text-center text-white">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <span className="mb-5 inline-block text-sm font-bold uppercase tracking-[3px] text-yellow-400">
            {article.category}
          </span>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            {article.title}
          </h1>

          <p className="mt-6 text-gray-200">{article.date}</p>

          <Link
            href="/actualites"
            className="mt-8 inline-flex rounded-lg bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:bg-yellow-300"
          >
            Retour aux actualités
          </Link>
        </div>
      </section>

      {/* Article */}

      <section className="px-6 py-20">
        <article className="mx-auto max-w-4xl">
          <p className="mb-10 text-xl leading-9 text-gray-600">
            {article.excerpt}
          </p>

          <div className="whitespace-pre-line text-lg leading-9 text-gray-700">
            {article.content}
          </div>
        </article>
      </section>

      {/* Articles similaires */}

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-extrabold md:text-5xl">
            Articles similaires
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {relatedArticles.map((item) => (
              <Link
                key={item.slug}
                href={`/actualites/${item.slug}`}
                className="group overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-2"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={350}
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="p-6">
                  <span className="text-sm font-semibold text-yellow-500">
                    {item.category}
                  </span>

                  <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
