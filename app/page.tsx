
import Image from "next/image";
import Script from "next/script";

export default function HomePage() {
  return (
    <main>

      {/* Hero */}
      <section className="hero hero-split">
        <div className="hero-content">
          <p className="eyebrow">
            Research Consultant | Philosophy, Human Judgment & Technology
          </p>

          <h1>
            Research & Decision Intelligence for better business and
            organisational decisions.
          </h1>

          <p className="hero-text">
            I help businesses, professionals, and organisations investigate
            complex problems, understand markets and evidence, and make
            clearer, better-informed decisions.
          </p>

          <p className="hero-text">
            My work combines rigorous research, analytical thinking,
            and practical recommendations across growth, evidence,
            and organisational decision-making.
          </p>

          <div className="hero-buttons">
            <a href="/services" className="button primary">
              Work with me
            </a>
          </div>
        </div>
      </section>




      {/* Journal */}
      <section className="page-shell">

        <div className="home-journal">

          <p className="eyebrow">
            Journal
          </p>

          <h2>
            Research, decisions, markets, technology, and human judgment.
          </h2>

          <p className="hero-text">
            The Journal is where I explore questions around research,
            decision-making, markets, artificial intelligence, technology,
            philosophy, and the ways people and organisations respond to
            change.
          </p>

          <a href="/journal" className="button secondary">
            Explore the Journal
          </a>

        </div>

      </section>


      {/* Newsletter */}
      <section className="page-shell">

        <div className="newsletter">

          <p className="eyebrow">
            Newsletter
          </p>

          <h2>
            Research and ideas for better decisions.
          </h2>

          <p>
            Occasional notes on research, markets, decision-making,
            technology, human judgment, and work in progress.
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


      {/* Contact */}
      <section className="page-shell">

        <div className="home-contact">

          <p className="eyebrow">
            Work With Me
          </p>

          <h2>
            Have a problem worth investigating?
          </h2>

          <p className="home-contact-text">
            I work with businesses, professionals, and organisations
            on questions involving markets, customers, evidence,
            research, and complex decisions.
          </p>

          <a href="/contact" className="button primary">
            Discuss Your Challenge
          </a>

        </div>

      </section>

    </main>
  );
}