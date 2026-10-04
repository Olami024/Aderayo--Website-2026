import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    " Professional Work by Aderayo Olamide Adelanwa.",
};

import Image from "next/image";
export default function ServicePage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="eyebrow">Services</p>

        <h1>
          Research & Decision Intelligence.
        </h1>
          <div className="services-image">
            <Image
              src="/images/aderayo-about-1.png"
              alt="Aderayo Olamide Adelanwa"
               width={1000}
               height={650}
              />
          </div>
      </section>

      <section>
        <article className="focus-card">
            
            <p className="eyebrow">What I Do</p>

            <h2>Research & Decision Intelligence</h2>

            <h4>One service. Three paths.</h4>

            <p>
              Different problems require different forms of investigation.
              My work is organised through three connected pathways.
            </p>

            <div className="intelligence-paths">

              <div className="intelligence-path">
                <span>01 / Growth Intelligence</span>
                <p>
                  <strong>
                    Understand customers, competitors, markets, positioning,
                    and digital opportunities before committing resources to growth.
                   </strong>
                </p>
              </div>

              <div className="intelligence-path">
                <span>02 / Evidence Intelligence</span>
                <p>
                  <strong>
                    Investigate complex questions through research,
                    evidence synthesis, analysis, and structured inquiry.
                  </strong>
                </p>
              </div>

              <div className="intelligence-path">
                <span>03 / Decision Intelligence</span>
                <p>
                  <strong>
                    Turn research, evidence, and organisational information
                    into clearer choices, priorities, and practical recommendations.
                  </strong>
                </p>
              </div>
            </div>

            <a href="/contact" className="button primary">
              Work with me →
            </a>
        </article>
      </section>

    </main>
  );
}