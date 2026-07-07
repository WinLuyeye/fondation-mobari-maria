import Image from "next/image";
import { news } from "@/components/actualites/newsData";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return news.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const article = news.find((item) => item.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main>
      <section className="bg-black px-6 py-32 text-center text-white">
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold md:text-6xl">
          {article.title}
        </h1>

        <p className="mt-5 text-yellow-400">{article.date}</p>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <Image
            src={article.image}
            alt={article.title}
            width={1200}
            height={700}
            className="rounded-2xl object-cover"
          />

          <div className="mt-10 whitespace-pre-line text-lg leading-9 text-gray-700">
            {article.content}
          </div>
        </div>
      </section>
    </main>
  );
}
