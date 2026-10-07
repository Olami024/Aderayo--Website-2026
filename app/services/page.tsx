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
        <article className="focus-card">


            <h2>Research, Decision Systems & Technical Services</h2>

            <p>
              I help founders, growing businesses, and organisations understand markets, 
              evaluate evidence, structure complex decisions, and build practical technology solutions.
            </p>
            
            <div className="services-image">
              <Image
                src="/images/aderayo-about-1.png"
                alt="Aderayo Olamide Adelanwa"
                width={1000}
                height={650}
                />
            </div>

            <div className="services-paths">

              <div className="services-path">
                <span>01 / Market & Growth Research</span>
                <p>
                  <p>
                      Structured research to understand markets, customers, competitors, positioning, trends, and growth opportunities.
                      <p>
                        <strong>
                        Services: Market research, competitor analysis, 
                        customer research, opportunity assessment, 
                        positioning, and industry research.
                        </strong>
                      </p>
                  </p>
                </p>
              </div>

              <div className="services-path">
                <span>02 / Evidence & Decision Research</span>
                <p>
                  <p>
                    Structured research that turns complex or fragmented information into clearer choices.
                    <p>
                      <strong>
                      Services: Evidence synthesis, desk research, comparative analysis, 
                      technology research, research briefs, and decision-focused analysis.
                      </strong>
                    </p>
                  </p>
                </p>
              </div>
              
              <div className="services-path">
                <span>03 / Decision Systems</span>
                <p>
                  <p>
                    Research and advisory work focused on how important organisational decisions are structured, supported, and improved.
                    <p>
                      <strong>
                      Services: Decision mapping, process analysis, decision criteria, human judgment and 
                      escalation points, recommendation structures, and outcome review.
                      </strong>
                    </p>
                  </p>
                </p>
              </div>

              
              <div className="services-path">
                <span>04 / Python Backend & Technical Services</span>
                <p>
                  <p>
                    Backend development for digital products, internal tools, and emerging decision systems.
                    <p>
                      <strong>
                      Services:Python, FastAPI, REST APIs, PostgreSQL, integrations, 
                      authentication, testing, Docker, deployment, and backend maintenance.
                      </strong>
                    </p>
                  </p>
                  <p>
                    My technical work is progressively expanding into 
                    MLOps, ML systems,recommendation systems, and decision-support applications.
                  </p>
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