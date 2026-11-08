import Image from "next/image";

import Script from "next/script";

export default function HomePage() {
  return (
    <main>

      {/* Hero */}
      <section className="hero hero-split">
        <div className="hero-content">

          <p className="eyebrow">
            PHILOSOPHY· DATA · AI · DECISION-MAKING
          </p>

          <h2>
            Making Sense of Complex Problems.
          </h2>

          <p className="hero-text">
            Over the past decade, 
            my professional experience 
            has spanned writing, teaching, 
            research, consulting, compliance, 
            and auditing.
          </p>

          <p className="hero-text">
             Building on this multidisciplinary foundation, 
             I am developing expertise as an 
             interdisciplinary data professional, 
             combining technical knowledge of data 
             engineering and architecture with 
             strategic capabilities in data management and governance. 
          </p>
          <p>
            Drawing on my background in philosophy, 
            I am particularly interested in the ethical, 
            axiological, epistemological and 
            organisational dimensions of data, 
            including its responsible use in 
            decision-making and technological innovation.
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