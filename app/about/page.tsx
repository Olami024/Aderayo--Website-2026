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
          Aderayo Olamide Adelanwa is a researcher, consultant, founder, and emerging technology practitioner 
          working at the intersection of research, human judgment, decision systems, business, and technology.
          With more than six years of research experience and an academic background in philosophy,
          her work focuses on helping individuals and organisations investigate complex questions, 
          understand markets and evidence, evaluate alternatives, and make better-informed decisions.
        </p>
        <p>
          Her broader professional interest is in Decision Systems: how people, evidence, organisational processes, 
          business rules, data, software, and machine-learning systems come together to shape decisions and outcomes.
          Through her consulting work, Aderayo works on questions involving market research, 
          competitive positioning, evidence synthesis, opportunity assessment, organisational decision-making, and complex research problems
        </p>
        <p>
          Through Ethentra, she is building a research-led company connecting research, education, technology, and innovation.
          Alongside her professional work, Aderayo holds an Master degree(distinction) in Philosophy and currently a PhD Researcher in Philosophy 
          studying human judgment and moral agency within increasingly data-driven and computational decision environments.
        </p>
        <p>
          Her technical development in Python backend engineering, MLOps, and machine learning extends this research interest into the systems themselves: 
          how software and machine-learning infrastructure are designed, deployed, monitored, and incorporated into real organisational decisions.
          
        </p>
        <p>
          Over time, her work is developing toward the design and analysis of human-machine decision systems, 
          including recommendation, optimization, and machine-learning systems that support consequential business 
          and organisational decisions. Her long-term objective is to build globally relevant research, technologies, 
          institutions, and decision systems that strengthen human capability and create sustainable economic and organisational value.
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
              Doctoral research and broader work on human judgment,
              moral agency, uncertainty, reasoning, evidence, technology,
              artificial intelligence, and data-driven decision systems.
            </p>
          
          </div>

          <span className="arrow">Explore research →</span>
        </a>

         <a href="/about/research" className="about-card">
          
          <div>
            <p className="eyebrow">02</p>
            <h2>Decision Systems & Technology</h2>
            <p>
              Work and learning across decision systems, Python backend engineering,
              MLOps, machine learning, recommendation systems, optimization, 
              and the relationship between human and computational decision-making.
            </p>
          </div>

          <span className="arrow">Explore technology →</span>
        </a>

        <a href="/about/media" className="about-card">
          <div>
            <p className="eyebrow">03</p>
            <h2>Media</h2>
            <p>
              Articles, social media, newsletter, podcasts, and public-facing research communication.
            </p>
          </div>

          <span className="arrow">Explore media →</span>
        </a>

        <a href="/about/ventures" className="about-card">
          <div>
            <p className="eyebrow">04</p>
            <h2>Ventures</h2>
            <p>
              Entrepreneurial interests span research, technology, lifestyle, hospitality, and commerce.
            </p>
          </div>

          <span className="arrow">Explore ventures →</span>
        </a>
      </section>
    </main>
  );
}