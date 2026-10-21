
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career | Aderayo Olamide Adelanwa",
  description:
    "Explore Aderayo Olamide Adelanwa's career across philosophy, research, data engineering, AI, and strategic problem-solving.",
};

const technicalFocus = [
  {
    number: "01",
    title: "Data Engineering & Platforms",
    description:
      "Developing expertise in Python, SQL, databases, ETL/ELT pipelines, data integration, processing, and cloud data infrastructure.",
  },
  {
    number: "02",
    title: "Backend Engineering",
    description:
      "Building Python backend systems, REST APIs, database-driven applications, and system integrations.",
  },
  {
    number: "03",
    title: "AI Engineering",
    description:
      "Exploring AI applications, information retrieval, intelligent workflows, and practical AI integrations.",
  },
];

const experience = [
  {
    title: "Research & Consulting",
    description:
      "Research design, analytical inquiry, strategic analysis, writing, and evidence-based problem-solving.",
  },
  {
    title: "Auditing & Organisational Work",
    description:
      "Experience involving organisational compliance, information evaluation, project coordination, and operational processes.",
  },
  {
    title: "Teaching & Learning",
    description:
      "Teaching applied philosophy, supporting learning, and communicating complex ideas across different audiences.",
  },
];

export default function CareerPage() {
  return (
    <main className="page-shell career-page">

      {/* Hero */}
      <section className="career-hero">
        <div className="career-hero-content">
          <p className="eyebrow">
            CAREER & PROFESSIONAL DEVELOPMENT
          </p>

          <h1>
            From Critical Thinking to Engineering Solutions.
          </h1>

          <p className="career-intro">
            My professional journey spans nearly a decade
            of multidisciplinary experience across teaching,
            auditing, research, consulting, writing, and
            strategic problem-solving.
          </p>

          <p>
            Philosophy, data, and strategy have remained
            central to how I understand problems, evaluate
            evidence, and approach decision-making.
          </p>

          <p>
            I am now deepening my expertise in data
            engineering, backend systems, data platforms,
            and AI, with a long-term focus on Data & AI
            Engineering and Solutions Architecture.
          </p>
        </div>

        <div className="career-image">
          <Image
            src="/images/aderayo-about-3.png"
            alt="Aderayo Olamide Adelanwa"
            width={700}
            height={850}
            sizes="(max-width: 768px) 100vw, 38vw"
            priority
          />
        </div>
      </section>

      {/* Technical Specializations */}
      <section className="career-section">
        <div className="career-section-heading">
          <p className="eyebrow">
            TECHNICAL DIRECTION
          </p>

          <h2>Engineering & Technical Focus.</h2>

          <p>
            Building practical capabilities across
            data infrastructure, software systems,
            and artificial intelligence.
          </p>
        </div>

        <div className="career-card-grid">
          {technicalFocus.map((item) => (
            <article
              className="career-card"
              key={item.number}
            >
              <span className="career-card-number">
                {item.number} / TECHNICAL FOCUS
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Professional Experience */}
      <section className="career-section">
        <div className="career-section-heading">
          <p className="eyebrow">
            PROFESSIONAL EXPERIENCE
          </p>

          <h2>Experience Across Disciplines.</h2>

          <p>
            My professional background combines research,
            organisational work, teaching, and practical
            problem-solving.
          </p>
        </div>

        <div className="career-card-grid">
          {experience.map((item) => (
            <article
              className="career-card"
              key={item.title}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Academic Work */}
      <section className="career-section">
        <div className="career-academic-card">
          <p className="eyebrow">
            ACADEMIC & RESEARCH WORK
          </p>

          <h2>Philosophy of Data & Decision-Making.</h2>

          <p>
            My academic work in philosophy explores
            data-driven decision-making, human judgment,
            ethical responsibility, and the relationship
            between evidence and technological systems.
          </p>

          <p>
            My broader interests include applied philosophy,
            philosophy of data, ethics, and interdisciplinary
            approaches to understanding complex problems.
          </p>

          <div className="career-actions">
            <a
              href="/documents/aderayo-adelanwa-academic-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button secondary"
            >
              Academic CV ↗
            </a>

            <a
              href="https://orcid.org/0009-0002-3800-2661"
              target="_blank"
              rel="noopener noreferrer"
              className="button secondary"
            >
              ORCID ↗
            </a>

            <a
              href="https://scholar.google.com/citations?user=CpTbnwQAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="button secondary"
            >
              Google Scholar ↗
            </a>
          </div>
        </div>
      </section>

      {/* Closing Navigation */}
      <section className="career-footer">
        <p className="eyebrow">EXPLORE MORE</p>

        <h2>Explore My Work.</h2>

        <div className="career-actions">
          <Link href="/projects" className="button primary">
            Explore Projects ↗
          </Link>

          <Link href="/business" className="button secondary">
            Explore Business ↗
          </Link>

          <Link href="/contact" className="button secondary">
            Get in Touch ↗
          </Link>
        </div>
      </section>

    </main>
  );
}
