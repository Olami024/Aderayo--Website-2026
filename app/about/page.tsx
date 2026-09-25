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
          Aderayo is a Research Consultant and Technical Writer with several years of experience in research, interdisciplinary consulting, research training, and research-informed communication. 
          Her technical writing includes documentation, tutorials, and technical notes on backend systems, APIs, databases, data infrastructure, AI applications, research software, and emerging technologies.
          She is also expanding her technical practice through Python development and backend software engineering, with a growing focus on how research can inform the design, documentation, and evaluation of technical systems.
          Alongside her professional work, Aderayo is a PhD Researcher in Philosophy studying the intersection of technology and human judgment, with particular interest in how computational systems shape reasoning and decision-making.
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
          Alongside my research and writing work, I am developing my technical
          practice in Python and backend software engineering. My current learning
          focuses on APIs, server-side development, databases, data handling, and
          the architecture behind web applications.
        </p>

        <p>
          This technical work complements my broader interest in how computational
          systems are designed, documented, evaluated, and used in real-world
          decision-making.
        </p>
      </section>
    </main>
  );
}