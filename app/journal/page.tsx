
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Essays and research notes on philosophy, technology, AI, human judgment, software systems, and technical learning.",
};
import { journalPosts } from "../../content/journal/posts";
export default function JournalPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="eyebrow">Journal</p>

        <h1>Research, ideas, and work in progress.</h1>

        <p>
          Essays and notes on research, philosophy, technology, human judgment,
          software systems, and questions I am currently exploring.
        </p>
      </section>

      <section className="research-direction">
        <p className="eyebrow">Journal Areas</p>

        <p>
          Research · Philosophy · Technology · AI · Software Systems ·
          Human Judgment · Technical Learning
        </p>
      </section>

      <section className="journal-list">
        {journalPosts.length === 0 ? (
          <div className="journal-empty">
            <p className="eyebrow">Coming Soon</p>

            <h2>New essays and research notes will appear here.</h2>

            <p>
              I use this space to develop ideas, document research questions,
              and share reflections from my academic and technical work.
            </p>
          </div>
        ) : (
          journalPosts.map((post) => (
            <article className="journal-card" key={post.slug}>
              <p className="journal-meta">
                {post.category} · {post.date}
              </p>

              <h2>
                <a href={`/journal/${post.slug}`}>
                  {post.title}
                </a>
              </h2>

              <p>{post.description}</p>

              <a
                href={`/journal/${post.slug}`}
                className="journal-read"
              >
                Read essay →
              </a>
            </article>
          ))
        )}
      </section>

    </main>
  );
}