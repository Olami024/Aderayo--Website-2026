
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Explorations | Aderayo Olamide Adelanwa",
  description:
    "Explore projects and intellectual work in data engineering, AI, backend systems, philosophy of data, and decision-making.",
};

const categories = [
  {
    number: "01",
    title: "Data Engineering, Architecture & Intelligent Systems",
    label: "TECHNICAL EXPLORATIONS",
    description:
      "Practical projects and technical explorations in data engineering, data architecture, database systems, data pipelines, ETL/ELT processes, cloud infrastructure, data integration, automation and AI applications.",
  },
  {
    number: "02",
    title: "Data Strategy, Management, Governance & Responsible AI",
    label: "STRATEGIC & GOVERNANCE EXPLORATIONS",
    description:
      "Explorations of enterprise data strategy, data management, data governance frameworks, data quality, business intelligence, organisational decision-making, privacy, accountability, regulatory compliance and responsible AI. With an interest in aligning data capabilities with organisational objectives, ethical standards and sustainable value creation.",
  },
  {
    number: "03",
    title: "Philosophy of Data, Knowledge, Ethics & Value",
    label: "PHILOSOPHICAL EXPLORATIONS",
    description:
      "Philosophical and critical inquiries into the nature, production, interpretation and use of data, with particular attention to epistemological, ethical and axiological questions, algorithmic inference, knowledge, human judgment and the relationship between technology and society.",
  },
];

// Add projects here as they are completed.
// Use actual working URLs for case studies and repositories.

type Project = {
  title: string;
  category: string;
  technologies: string[];
  description: string;
  caseStudyUrl?: string;
  githubUrl?: string;
};

const projects: Project[] = [];

export default function ProjectsPage() {
  return (
    <main className="page-shell compact-page">

      {/* Hero */}
      <section className="compact-hero">
        <p className="eyebrow">
          PROJECTS & EXPLORATIONS
        </p>

        <h1>
          Thinking, Building &
          <br />
          Exploring Solutions.
        </h1>

        <p className="compact-intro">
          A collection of technical projects, case studies,
          and intellectual explorations at the intersection
          of data engineering, artificial intelligence,
          philosophy of data, and decision-making.
        </p>

        <p>
          My work combines practical engineering,
          critical inquiry, and problem-solving
          to explore how information is processed,
          systems are developed, and technology
          influences decisions.
        </p>
      </section>

      {/* Areas */}
      <section className="compact-section">
        <div className="compact-section-heading">
          <p className="eyebrow">
            AREAS OF EXPLORATION
          </p>

          <h2>What I Explore.</h2>
          <p>
            My work and ongoing professional development 
            span three interconnected areas, combining
            technical practice, strategic and governance thinking,
            and philosophical inquiry into data and technology.
          </p>
        </div>

        <div className="exploration-grid">
          {categories.map((item) => (
            <article
              className="exploration-card"
              key={item.number}
            >
              <span className="card-number">
                {item.number} / {item.label}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="compact-section">
        <div className="compact-section-heading">
          <p className="eyebrow">
            SELECTED WORK
          </p>

          <h2>Projects & Case Studies.</h2>

          <p>
            A growing portfolio documenting practical
            implementations, technical decisions,
            research explorations, and lessons learned.
          </p>
        </div>

        {projects.length > 0 ? (
          <div className="project-grid">
            {projects.map((project) => (
              <article
                className="project-card"
                key={project.title}
              >
                <span className="card-number">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.caseStudyUrl && (
                    <Link href={project.caseStudyUrl}>
                      Read Case Study ↗
                    </Link>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View GitHub ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="compact-highlight">
            <h3>Work in Progress.</h3>

            <p>
              I am developing and documenting new projects
              in data engineering, backend systems, and AI.
              Completed work and case studies will appear
              here as they become available.
            </p>
          </div>
        )}
      </section>

      {/* Project Methodology */}
      <section className="compact-section">
        <div className="compact-section-heading">
          <p className="eyebrow">
            MY APPROACH
          </p>

          <h2>From Problems to Solutions.</h2>
        </div>

        <div className="process-grid">
          {[
            ["01", "Understand", "Define the problem and requirements."],
            ["02", "Design", "Choose an appropriate technical approach."],
            ["03", "Build", "Develop and integrate the solution."],
            ["04", "Evaluate", "Test, document, and improve the results."],
          ].map(([number, title, description]) => (
            <div className="process-card" key={number}>
              <span className="card-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="compact-section compact-cta">
        <p className="eyebrow">
          EXPLORE MORE
        </p>

        <h2>Code, Ideas & Collaboration.</h2>

        <p>
          Explore my technical work on GitHub or get
          in touch about professional opportunities.
        </p>

        <div className="compact-actions">
          <Link href="/contact" className="button primary">
            Get in Touch ↗
          </Link>

         <a href="https://github.com/Olami024" aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="button secondary"
          >
            Follow on Github
          </a>
        </div>
      </section>

    </main>
  );
}
