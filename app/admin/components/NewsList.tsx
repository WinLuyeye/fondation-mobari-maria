"use client";

import Image from "next/image";

export default function NewsList({ articles, onEdit, onDelete }: any) {
  if (articles.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 text-lg">Aucun article pour le moment</p>
        <p className="text-gray-400 text-sm mt-2">Commencez par créer un nouvel article</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {articles.map((article: any) => (
        <div
          key={article.id}
          className="bg-white rounded-xl shadow-sm border p-4 hover:shadow-md transition"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative w-full md:w-48 h-32 flex-shrink-0">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <span className="text-xs font-semibold text-yellow-500 uppercase">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 truncate">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{article.date}</p>
                </div>

                <div className="flex gap-2 ml-4 flex-shrink-0">
                  <button
                    onClick={() => onEdit(article)}
                    className="px-3 py-1 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => onDelete(article.id)}
                    className="px-3 py-1 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}