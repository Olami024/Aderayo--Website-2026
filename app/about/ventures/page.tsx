import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ventures",
  description:
    "Entrepreneurial ventures by Aderayo Olamide Adelanwa across research, technology, lifestyle, hospitality, and commerce.",
};

export default function VenturesPage() {
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
          hospitality, and commerce. I am interested in building ventures that
          bring together ideas, practical problem-solving, and long-term value.
        </p>
      </section>

      <section className="research-direction">
        <p className="eyebrow">Current Venture</p>

        <h2>Ethentra</h2>

        <p>
          Ethentra is a research, education 
          and technology company advancing knowledge, 
          developing professional capability, 
          and building practical technology solutions.
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