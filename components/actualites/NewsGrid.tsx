import NewsCard from "./NewsCard";
import { news } from "./newsData";

export default function NewsGrid() {
  return (
    <section className="bg-gray-50 px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        {news.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
