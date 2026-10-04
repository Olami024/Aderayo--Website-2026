import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Aderayo Olamide Adelanwa, a research consultant, a backend engineer and philosopher of technology studying human judgment and computational systems.",
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
          Aderayo is a research consultant with over six years of experience and an academic background in philosophy. 
          Her work focuses on research and decision intelligence, helping individuals and organisations investigate complex problems, understand evidence, markets, and emerging technologies, and make better-informed decisions.
        </p>
        <p>
          Through Ethentra, she is building a research-led company that connects research, education, technology, and innovation.
          Alongside her professional work, Aderayo is a PhD Researcher in Philosophy examining how computational systems shape human judgment, reasoning, and decision-making; while building a career path in Backend Engineering and MLOps.
        </p>
        <p>
          Her long-term goal is to build globally relevant institutions, technologies, 
          and knowledge that strengthen human capability, responsible innovation, and sustainable organisations.
        </p>
        <div className="about-image-single">
          <Image
          src="/images/aderayo-about-3.png"
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
              Her doctoral research, broader research agenda, and work on human
              judgment, uncertainty, ethics, software systems, AI, and
              computational decision-making.
            </p>
          </div>

          <span className="arrow">Explore research →</span>
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
              Her entrepreneurial interests span research, technology, lifestyle, hospitality, and commerce.
            </p>
          </div>

          <span className="arrow">Explore ventures →</span>
        </a>
      </section>
    </main>
  );
}