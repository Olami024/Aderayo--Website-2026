import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Aderayo Olamide Adelanwa, a research consultant, technical writer, and philosopher of technology studying human judgment and computational systems.",
};

import Image from "next/image";
export default function AboutPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="eyebrow">About</p>

        <h1>
          Aderayo Olamide Adelanwa
        </h1>

        <p>
          Aderayo is a Research Consultant whose work focuses on helping individuals, organisations, and interdisciplinary teams investigate complex questions, develop credible evidence, and translate research into clear, usable knowledge.
          With over six years of research experience and more than 70 projects delivered, her practice spans research design, qualitative, quantitative, and mixed-method inquiry, data collection and analysis, evidence synthesis, research reporting, and project coordination. 
          She works across academic, organisational, and applied research contexts, supporting the development of well-structured studies, rigorous analysis, and findings that inform understanding, communication, and decision-making.
          
          Her research consulting practice also extends to research methodology, training, advisory support, and capacity development for individuals, researchers, and interdisciplinary research teams. 
          She is expanding this work towards meta-research, with an interest in examining how research is designed, conducted, evaluated, and communicated, and how research practices can be strengthened.
          
          Through Ethentra, she is building a research-driven practice that connects research, learning, and technology, with particular interest in investigating digital systems and translating evidence into practical knowledge.
          Alongside her professional work, Aderayo is a PhD Researcher in Philosophy examining how computational systems shape human judgment, reasoning, and decision-making.
        </p>
        <div className="about-image-single">
          <Image
          src="/images/aderayo-about-2.png"
          alt="Aderayo Olamide Adelanwa"
          width={700}
          height={850}
          />
        </div>
        
      </section>
      

      <section className="about-grid">
        <a href="/about/research" className="about-card">
          
          <div>
            <p className="eyebrow">01</p>
            <h2>Research & PhD</h2>
            <p>
              My doctoral research, broader research agenda, and work on human
              judgment, uncertainty, ethics, software systems, AI, and
              computational decision-making.
            </p>
          </div>

          <span className="arrow">Explore research →</span>
        </a>

        <a href="/about/consulting" className="about-card">
          <div>
            <p className="eyebrow">02</p>
            <h2>Consulting & Writing</h2>
            <p>
              Research consulting and training;  technical and research writing,
              documentation, and communication for complex ideas and
              technology.
            </p>
          </div>

          <span className="arrow">View professional work →</span>
        </a>

        <a href="/about/media" className="about-card">
          <div>
            <p className="eyebrow">03</p>
            <h2>Media</h2>
            <p>
              Articles, essays, socials, video, newsletter, future talks,
              interviews, podcasts, and public-facing research communication.
            </p>
          </div>

          <span className="arrow">Explore media →</span>
        </a>

        <a href="/about/ventures" className="about-card">
          <div>
            <p className="eyebrow">04</p>
            <h2>Ventures</h2>
            <p>
              My entrepreneurial interests span research, technology, lifestyle, hospitality, and commerce.
            </p>
          </div>

          <span className="arrow">Explore ventures →</span>
        </a>
      </section>

      <section className="about-section">
        <p className="eyebrow">Technical Practice</p>

        <h2>Building a deeper understanding of software systems.</h2>

        <p>
          Alongside her research consulting work, Aderayo maintains a technical writing practice focused on documentation, tutorials, and clear explanations of backend systems, APIs, databases, data infrastructure, AI applications, research software, and emerging technologies.
          She is also developing her software engineering practice through Python and backend development, with a focus on server-side applications, data handling, databases, and web application architecture.
          
          This work complements her broader interest in how computational systems are designed, documented, evaluated, and used in real-world decision-making.
        </p>
      </section>
    </main>
  );
}