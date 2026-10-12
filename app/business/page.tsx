import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business",
  description:
    "Entrepreneurial ventures by Aderayo Olamide Adelanwa across research, strategy, technology, lifestyle, hospitality, and commerce.",
};

export default function BusinessPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="eyebrow">Ventures</p>

        <h1>
          Building across research, technology, lifestyle, hospitality,
          and commerce.
        </h1>

        <p>
          My entrepreneurial interests span research, technology, lifestyle,
          hospitality, and commerce building through Ethentra and Deran Sphere. 
          I am interested in building ventures that
          bring together ideas, practical problem-solving, memorable experience, and long-term value.
        </p>
        <p>
          Deran Sphere is currently close due to rebranding, to be reopening soon. 
          Ethentra provides solutions such as applied research, 
          strategic advisory, professional education, 
          and technical engagements.
        </p>

        <div className="hero-buttons">
          <a
            href="https://ethentra.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="button primary"
          >
            Visit Ethentra
          </a>
        </div>
      </section>
    </main>
  );
}