import Link from "next/link";
import { notFound } from "next/navigation";

import {
  journalCategories,
  getArticlesByCategory,
} from "../../../../lib/journal";

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { category } = await params;

  const categoryInfo = journalCategories.find(
    (item) => item.slug === category
  );

  if (!categoryInfo) {
    notFound();
  }

  const articles = getArticlesByCategory(category);

  return (
    <main>

      {/* CATEGORY HERO */}
      <section className="journal-category-hero">
        <div className="page-shell">

          <p className="eyebrow">
            Journal
          </p>

          <h1>
            {categoryInfo.name}
          </h1>

          <Link
            href="/journal"
            className="text-link"
          >
            ← Back to Journal
          </Link>

        </div>
      </section>


      {/* ARTICLES */}
      <section className="journal-category-articles">
        <div className="page-shell">

          {articles.length > 0 ? (

            <div className="journal-grid">

              {articles.map((article) => (

                <article
                  key={article.slug}
                  className="journal-card"
                >

                  <p className="journal-card-category">
                    {categoryInfo.name}
                  </p>

                  <h2>
                    {article.title}
                  </h2>

                  <p>
                    {article.description}
                  </p>

                  <Link
                    href={`/journal/${article.slug}`}
                    className="text-link"
                  >
                    Read article →
                  </Link>

                </article>

              ))}

            </div>

          ) : (

            <p>
              No articles have been published in this category yet.
            </p>

          )}

        </div>
      </section>

    </main>
  );
}