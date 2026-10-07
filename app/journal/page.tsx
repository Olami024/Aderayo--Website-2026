
import type { Metadata } from "next";
import Link from "next/link";

import {
  journal,
  journalCategories,
  getAllArticles,
} from "../../lib/journal";


export const metadata: Metadata = {
  title: "Journal",
  description:
    "Research, decision systems, markets, technology, and human judgment.",
};


export default function JournalPage() {
  const journalPosts = getAllArticles();

  return (
    <main className="page-shell">

      {/* JOURNAL HERO */}
      <section className="page-hero">

        <p className="eyebrow">
          {journal.title}
        </p>

        <h1>
          {journal.tagline}
        </h1>

        <p>
          {journal.description}
        </p>

      </section>


      {/* JOURNAL CATEGORIES */}
      <section className="research-direction">

        <p className="eyebrow">
          Journal Categories
        </p>

        <div className="journal-categories">

          {journalCategories.map((category) => (

            <Link
              key={category.slug}
              href={`/journal/category/${category.slug}`}
              className="journal-category-link"
            >
              {category.name}
            </Link>

          ))}

        </div>

      </section>


      {/* ARTICLES */}
      <section className="journal-list">

        {journalPosts.length === 0 ? (

          <div className="journal-empty">

            <p className="eyebrow">
              Coming Soon
            </p>

            <h2>
              New essays and research notes will appear here.
            </h2>

            <p>
              I use this space to investigate questions,
              develop ideas, and write about research,
              markets, human judgment, technology,
              and decision systems.
            </p>

          </div>

        ) : (

          journalPosts.map((post) => (

            <article
              className="journal-card"
              key={post.slug}
            >

              <p className="journal-meta">

                <Link
                  href={`/journal/category/${post.category}`}
                >
                  {journalCategories.find(
                    (category) =>
                      category.slug === post.category
                  )?.name || post.category}
                </Link>

                {" · "}

                {post.date}

              </p>


              <h2>
                <Link href={`/journal/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>


              <p>
                {post.description}
              </p>


              <Link
                href={`/journal/${post.slug}`}
                className="journal-read"
              >
                Read essay →
              </Link>

            </article>

          ))

        )}

      </section>

    </main>
  );
}