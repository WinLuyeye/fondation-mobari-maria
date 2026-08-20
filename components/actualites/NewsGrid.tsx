"use client";

import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import { newsManager } from "@/admin/newsData";

export default function NewsGrid() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(newsManager.getAll());
  }, []);

  return (
    <section className="bg-gray-50 px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        {articles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}