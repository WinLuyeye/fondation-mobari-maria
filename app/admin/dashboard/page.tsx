"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { newsManager, auth } from "../newsData";
import NewsForm from "../components/NewsForm";
import NewsList from "../components/NewsList";

export default function Dashboard() {
  const [articles, setArticles] = useState([]);
  const [editingArticle, setEditingArticle] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!auth.isAuthenticated()) {
      router.push("/admin");
      return;
    }
    loadArticles();
  }, [router]);

  const loadArticles = () => {
    setArticles(newsManager.getAll());
  };

  const handleDelete = (id: number) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet article ?")) {
      newsManager.delete(id);
      loadArticles();
    }
  };

  const handleEdit = (article: any) => {
    setEditingArticle(article);
    setShowForm(true);
  };

  const handleSave = (article: any) => {
    if (article.id) {
      newsManager.update(article.id, article);
    } else {
      newsManager.create(article);
    }
    setShowForm(false);
    setEditingArticle(null);
    loadArticles();
  };

  const handleLogout = () => {
    auth.logout();
    router.push("/admin");
  };

  if (!auth.isAuthenticated()) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Administration</h1>
            <p className="text-sm text-gray-600">Gestion des actualités</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm font-semibold text-red-600 hover:text-red-700 transition"
          >
            Déconnexion
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {!showForm ? (
          <>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-semibold text-gray-800">
                {articles.length} article{articles.length > 1 ? "s" : ""}
              </h2>
              <button
                onClick={() => {
                  setEditingArticle(null);
                  setShowForm(true);
                }}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-lg transition"
              >
                + Nouvel article
              </button>
            </div>

            <NewsList
              articles={articles}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </>
        ) : (
          <NewsForm
            article={editingArticle}
            onSave={handleSave}
            onCancel={() => {
              setShowForm(false);
              setEditingArticle(null);
            }}
          />
        )}
      </main>
    </div>
  );
}