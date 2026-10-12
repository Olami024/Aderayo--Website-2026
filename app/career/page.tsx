import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career | Aderayo Olamide Adelanwa",
  description:
    "Aderayo Olamide Adelanwa's professional work across philosophy, research, strategy, education, technology, and organisational problem-solving.",
};

const experience = [
  {
    role: "Founder & Research Lead",
    organisation: "Ethentra Limited",
    type: "Part-time",
    period: "Oct 2025 — Present",
    location: "Nigeria · Remote",
    description:
      "Building a research and technology company bringing together research, advisory, education, and applied technology. Ethentra operates through two complementary divisions: Ethentra Research Institute and Ethentra Technologies.",
  },
  {
    role: "Research Project Manager",
    organisation: "Freelance",
    type: "Contract",
    period: "Apr 2022 — Present",
    location: "Nigeria · Remote",
    description:
      "Manage interdisciplinary research projects and cross-functional research workflows for an academic chair. Coordinate research activities, documentation, collaborators, deliverables, and project timelines while supporting research outputs for academic and professional audiences.",
  },
  {
    role: "Guest Faculty — Entrepreneurship, Governance & Ethics",
    organisation: "Cedarfield Leadership Institute",
    type: "Seasonal",
    period: "Feb 2025 — Aug 2026",
    location: "Lagos State, Nigeria · Remote",
    description:
      "Delivered executive learning sessions for women leaders across entrepreneurship, corporate ethics, governance, strategic reasoning, and sustainable leadership. Designed practical learning experiences connecting philosophical and ethical reasoning with organisational and leadership decisions.",
  },
  {
    role: "Independent Research Consultant",
    organisation: "Freelance | Self-Employed",
    type: "Freelance",
    period: "Nov 2019 — Jan 2026",
    location: "Nigeria · Remote",
    description:
      "Delivered more than 70 research projects for individuals, international teams, professional networks, and non-governmental organisations. Worked across qualitative, quantitative, and mixed-method research, including research design, evidence synthesis, data analysis, report development, and project coordination.",
  },
  {
    role: "Graduate Research Assistant",
    organisation: "Institute of African and Diaspora Studies",
    type: "Contract",
    period: "Mar 2020 — May 2022",
    location: "Lagos, Nigeria · On-site",
    description:
      "Conducted interdisciplinary research across African ethics, informal economies, digital cultures, and women's experiences in African societies. Supported field research, qualitative coding, thematic analysis, research documentation, interdisciplinary coordination, and the development of academic and policy-oriented outputs.",
  },
  {
    role: "Assistant Compliance / Internal Audit Officer",
    organisation: "Premier Academy Lugbe",
    type: "Internship",
    period: "May 2018 — Mar 2019",
    location: "Abuja, Nigeria · On-site",
    description:
      "Supported organisational compliance with internal policies and regulatory requirements. Prepared compliance reports, audit documentation, regulatory records, and structured internal communications.",
  },
];

export default function CareerPage() {
  return (
    <main className="page-shell">

      {/* Hero */}
      <section className="page-hero">

        <p className="eyebrow">Career</p>

        <div className="about-image-single">
          <Image
            src="/images/aderayo-about-3.png"
            alt="Aderayo Olamide Adelanwa"
            width={700}
            height={850}
            priority
          />
        </div>

        <h1>
          Research, strategy and systems.
        </h1>

        <p className="hero-text">
          My professional path has developed across philosophy, research,
          strategy, education, entrepreneurship, and increasingly technology.
  
          What connects these areas is an interest in complex problems:
          how they are investigated, how evidence is interpreted, how
          organisations make decisions, and how practical systems can be
          designed around better understanding.
        </p>

      </section>


      {/* Professional Identity */}
      <section className="research-direction">

        <p className="eyebrow">Professional Direction</p>

        <h2>
          Philosophy · Research · Strategy · Technology
        </h2>

        <p className="hero-text">
          I describe my work broadly as research and solutions strategy.
          Research helps me understand a problem. Strategy helps translate
          that understanding into direction. Technology increasingly expands
          the kinds of solutions I am able to design and contribute to.
          Philosophy remains the intellectual foundation of my work: 
          reasoning, ethics, judgement, conceptual analysis, 
          and questions about how people make decisions.
        </p>

      </section>


      {/* Experience */}
      <section className="research-direction">

        <p className="eyebrow">Experience</p>

        <h2>
          Work across research, organisations and learning.
        </h2>

        <p className="hero-text">
          My experience spans independent consulting, interdisciplinary
          research, project management, executive education, organisational
          compliance, and building Ethentra.
        </p>

        <div className="career-experience-list">

          {experience.map((item) => (
            <article
              className="career-experience-item"
              key={`${item.role}-${item.organisation}`}
            >
              <div className="career-experience-heading">

                <div>
                  <h3>{item.role}</h3>

                  <p>
                    <strong>{item.organisation}</strong>
                    {item.type ? ` · ${item.type}` : ""}
                  </p>
                </div>

                <div className="career-experience-meta">
                  <p>{item.period}</p>
                  <p>{item.location}</p>
                </div>

              </div>

              <p>
                {item.description}
              </p>

            </article>
          ))}

        </div>

      </section>


      {/* Academic Work */}
      <section className="research-direction">

        <p className="eyebrow">Academic & Research Work</p>

        <h2>
          Human judgement in computational environments.
        </h2>

        <p className="hero-text">
          My academic work in philosophy focuses on human judgement,
          moral agency, and decision-making within increasingly
          data-driven and computational environments.
        </p>

        <p>
          My PhD research examines how computational systems shape the role
          of human judgement and agency in decision processes, particularly
          as data, algorithms, and machine-learning systems become more
          involved in organisational and social decisions.
        </p>

        <p>
          My broader academic interests include applied philosophy,
          philosophy of technology, ethics, and interdisciplinary studies.
        </p>

        <div className="hero-buttons">

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

      </section>


      {/* Technical Development */}
      <section className="research-direction">

        <p className="eyebrow">Technical Development</p>

        <h2>
          Building toward solution architecture.
        </h2>

        <p className="hero-text">
          I am deliberately building technical depth alongside my research
          and strategy practice.
        </p>

        <p>
          My current development focuses on Python backend engineering,
          PostgreSQL, Docker, cloud infrastructure, CI/CD, MLOps, vector
          search, retrieval systems, and production AI-enabled applications.
          With Solution architecture as the longer-term technical direction.
        </p>
      </section>


      {/* Closing */}
      <section className="research-direction">

        <p className="eyebrow">Looking Forward</p>

        <h2>
          Research & solutions strategy with increasing technical depth.
        </h2>

        <p className="hero-text">
          They are increasingly becoming parts of the same professional
          direction: understanding difficult problems, developing credible
          responses, and contributing to the design of systems that help
          organisations make and implement better decisions.
        </p>

        <div className="hero-buttons">

          <a href="/business" className="button secondary">
            Explore Business
          </a>

          <a href="/contact" className="button primary">
            Get in Touch
          </a>

        </div>

      </section>

    </main>
  );
}