import Image from "next/image";

import Script from "next/script";

export default function HomePage() {
  return (
    <main>

      {/* Hero */}
      <section className="hero hero-split">
        <div className="hero-content">

          <p className="eyebrow">
            PHILOSOPHY OF DATA · DATA ENGINEERING · AI · DECISION-MAKING
          </p>

          <h2>
            Making Sense of Complex Problems.
          </h2>

          <p className="hero-text">
            With nearly a decade of multidisciplinary experience
            spanning teaching, auditing, research, consulting, 
            and strategic problem-solving, 
            three interests have remained central 
            to my work: philosophy, data, and strategy.
          </p>

          <p className="hero-text">
            My work focuses on understanding complex problems, 
            interpreting information, 
            and applying evidence to improve decision-making.
          </p>
          <p>
            Building on this foundation, 
            I am developing my expertise in data engineering,
            backend systems, data platforms, and AI, 
            with a long-term focus on Data & 
            AI Engineering and Solutions Architecture.
          </p>

          <p className="hero-text">
            My entrepreneurial ambitions span commerce 
            and enterprise development, 
            with a focus on building 
            sustainable businesses that 
            create opportunities and meaningful impact.
          </p>
          <p className="hero-text">
            My academic work remains grounded in philosophy, with doctoral research 
            exploring data-driven decision-making and its ethical implications.
            My goal is to bring together philosophical reasoning, engineering, 
            and strategic thinking to develop practical, responsible solutions.
          </p>

          <div className="hero-buttons">
            <a href="/career" className="button primary">
              Explore Career
            </a>

            <a
            href="/projects" className="button primary">
              View My Projects
            </a>
          </div>
        </div>
        <div>

          <div className="services-image">
            <Image
              src="/images/aderayo-about-1.png"
              alt="Aderayo Olamide Adelanwa"
              width={1000}
              height={650}
              />
          </div>

        </div>
      </section>

      {/* Newsletter */}
      <section className="page-shell">
        <div className="newsletter">

          <p className="eyebrow">
            The Decision Brief
          </p>

          <h2>
            Ideas worth following.
          </h2>

          <p>
            Explore ideas that challenge your thinking, 
            deepen your understanding, and inspire practical solutions. 
            Subscribe for fresh perspectives on applied philosophy, decision-making, research, strategy, data engineering, and AI.
            
          </p>

          <Script
            src="https://f.convertkit.com/ckjs/ck.5.js"
            strategy="afterInteractive"
          />

          <form
            action="https://app.kit.com/forms/9955580/subscriptions"
            method="post"
            className="newsletter-form formkit-form"
            data-sv-form="9955580"
            data-uid="24f018d8d3"
            data-format="inline"
            data-version="5"
          >

            <input
              className="formkit-input"
              name="email_address"
              type="email"
              placeholder="Your email address"
              aria-label="Email address"
              required
            />

            <button
              type="submit"
              className="newsletter-submit formkit-submit"
            >
              Subscribe
            </button>

          </form>

          <p className="newsletter-note">
            You'll receive an email to confirm your subscription.
          </p>

        </div>
      </section>


      {/* Contact CTA */}
      <section className="page-shell">
        <div className="home-contact">

          <p className="eyebrow">
             CONNECT & COLLABORATE
          </p>

          <p className="hero-text">
            Let's Explore Possibilities.
            Interested in collaboration, 
            business partnerships, or discussing an opportunity?
          </p>

          <a href="/contact" className="button secondary">
            Start a Conversation
          </a>

        </div>
      </section>

    </main>
  );
}