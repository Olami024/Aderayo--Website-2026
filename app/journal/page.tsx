
import type { Metadata } from "next";
import Link from "next/link";

import {
  journal,
  journalCategories,
  getAllArticles,
} from "../../lib/journal";

export const metadata: Metadata = {
  title: "Journal | Aderayo Olamide Adelanwa",
  description:
    "Articles and explorations in philosophy of data, data engineering, AI, decision-making, and strategy.",
};

export default function JournalPage() {
  const journalPosts = getAllArticles();

  return (
    <main className="page-shell journal-page">

      {/* JOURNAL HERO */}
      <section className="journal-hero">
        <p className="eyebrow">
          {journal.title}
        </p>

        <h1>{journal.tagline}</h1>

        <p className="journal-intro">
          {journal.description}
        </p>
      </section>

      {/* JOURNAL CATEGORIES */}
      <section className="journal-section">
        <div className="journal-section-heading">
          <p className="eyebrow">
            EXPLORE BY TOPIC
          </p>

          <h2>Areas of Inquiry.</h2>
        </div>

        <div className="journal-categories">
          {journalCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/journal/category/${category.slug}`}
              className="journal-category-link"
            >
              {category.name}
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      {/* PUBLISHED ARTICLES */}
      <section className="journal-section">
        <div className="journal-section-heading">
          <p className="eyebrow">
            JOURNAL ENTRIES
          </p>

          <h2>Writing & Perspectives.</h2>

          <p>
            Essays, technical articles, and reflections
            on data, technology, philosophy, and
            decision-making.
          </p>
        </div>

        {journalPosts.length === 0 ? (
          <div className="journal-empty">
            <p className="eyebrow">
              COMING SOON
            </p>

            <h3>
              New writing is on the way.
            </h3>

            <p>
              I am developing articles exploring data
              engineering, artificial intelligence,
              philosophy of data, and decision-making.
            </p>
          </div>
        ) : (
          <div className="journal-grid">
            {journalPosts.map((post) => {
              const category = journalCategories.find(
                (item) =>
                  item.slug === post.category
              );

              return (
                <article
                  className="journal-card"
                  key={post.slug}
                >
                  <div className="journal-card-meta">
                    <Link
                      href={`/journal/category/${post.category}`}
                    >
                      {category?.name || post.category}
                    </Link>

                    <span>{post.date}</span>
                  </div>

                  <h3>
                    <Link href={`/journal/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p>{post.description}</p>

                  <Link
                    href={`/journal/${post.slug}`}
                    className="journal-read"
                  >
                    Read Article ↗
                  </Link>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
