
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business & Ventures | Aderayo Olamide Adelanwa",
  description:
    "Explore the entrepreneurial ventures of Aderayo Olamide Adelanwa across data, AI, research, technology, lifestyle, hospitality, and commerce.",
};

const ventures = [
  {
    number: "01",
    name: "Ethentra",
    category: "DATA · AI · STRATEGY",
    description:
      "A Data Solutions company helping businesses collect, organise, transform and use data effectively. Our work combines technical engineering with analytical thinking, research and responsible data practices.",
    status: "Building & Developing",
    href: "https://ethentra.co",
    linkText: "Explore Ethentra ↗",
  },
  {
    number: "02",
    name: "Deran Sphere",
    category: "LIFESTYLE · HOSPITALITY · COMMERCE",
    description:
      "An entrepreneurial venture spanning  media, lifestyle, hospitality, and commerce, with a focus on meaningful experiences, practical offerings, and lasting customer value.",
    status: "Under Rebranding",
    href: null,
    linkText: null,
  },
];

export default function BusinessPage() {
  return (
    <main className="page-shell compact-page">

      {/* Introduction */}
      <section className="compact-hero">
        <p className="eyebrow">
          BUSINESS & ENTREPRENEURSHIP
        </p>

        <h1>
          Building Across Industries.
          <br />
          Creating Lasting Value.
        </h1>

        <p className="compact-intro">
          My entrepreneurial interests span research,
          technology, media, lifestyle, hospitality, and commerce.
          Through Ethentra and Deran Sphere, I am developing
          ventures that combine strategic thinking, practical
          problem-solving, memorable experiences, and
          long-term value.
        </p>
      </section>

      {/* Ventures */}
      <section className="compact-section">
        <div className="compact-section-heading">
          <p className="eyebrow">
            VENTURES & INITIATIVES
          </p>

          <h2>What I Am Building.</h2>
        </div>

        <div className="venture-grid">
          {ventures.map((venture) => (
            <article
              className="venture-card"
              key={venture.number}
            >
              <div className="venture-card-top">
                <span className="venture-number">
                  {venture.number} / VENTURE
                </span>

                <span className="venture-status">
                  {venture.status}
                </span>
              </div>

              <p className="venture-category">
                {venture.category}
              </p>

              <h3>{venture.name}</h3>

              <p className="venture-description">
                {venture.description}
              </p>

              {venture.href ? (
                <a
                  href={venture.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="venture-link"
                >
                  {venture.linkText}
                </a>
              ) : (
                <span className="venture-unavailable">
                  Reopening details to be announced
                </span>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Business Direction */}
      <section className="compact-section">
        <div className="compact-highlight">
          <p className="eyebrow">
            ENTREPRENEURIAL DIRECTION
          </p>

          <h2>Ideas Into Practical Ventures.</h2>

          <p>
            My approach to entrepreneurship is grounded in
            identifying real needs, developing sustainable
            solutions, and building businesses that create
            meaningful economic and social value.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="compact-section compact-cta">
        <p className="eyebrow">CONNECT & COLLABORATE</p>

        <h2>Let's Explore Possibilities.</h2>

        <p>
          Interested in collaboration, business partnerships,
          or discussing an opportunity?
        </p>

        <div className="compact-actions">
          <Link href="/contact" className="button primary">
            Get in Touch ↗
          </Link>

          <a
            href="https://ethentra.co"
            target="_blank"
            rel="noopener noreferrer"
            className="button secondary"
          >
            Visit Ethentra ↗
          </a>
        </div>
      </section>

    </main>
  );
}
