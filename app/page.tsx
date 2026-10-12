import Image from "next/image";

import Script from "next/script";

export default function HomePage() {
  return (
    <main>

      {/* Hero */}
      <section className="hero hero-split">
        <div className="hero-content">

          <p className="eyebrow">
            RESEARCH & SOLUTIONS STRATEGIST 
          </p>

          <h2>
            Research, strategy and technology for complex problems.
          </h2>

          <p className="hero-text">
            I work across research, strategy and technology, helping businesses,
            professionals and organisations understand difficult problems,
            evaluate evidence and opportunities, and develop better-informed
            solutions.
          </p>

          <p className="hero-text">
            My work is shaped by a background in philosophy; professional
            research practice, a deep interest in strategy and decision making,
            and an increasing technical focus on solution architecture.
          </p>

          <div className="hero-buttons">
            <a href="/career" className="button primary">
              Explore Career
            </a>

            <a
            href="https://ethentra.co"
            target="_blank"
            rel="noopener noreferrer"
            className="button secondary"
            >
              Visit Ethentra
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


      {/* About Me */}
      <section className="page-shell">
        <div className="home-journal">

          <p className="eyebrow">
            About Me
          </p>

          <h2>
            Understanding problems before designing solutions.
          </h2>

          <p >
            My work has developed around a persistent interest in how people
            and organisations understand difficult problems, make decisions,
            and translate ideas into action.
          </p>

          <p>
            Philosophy gave me a foundation in reasoning, evidence, ethics and
            human judgement.Research became the practical extension of that
            foundation: a way of investigating markets, organisations,
            technologies and complex questions systematically.
          </p>
          <p>
              Strategy is where philosophy and research moves toward decision and action.
              I am interested in how organisations define problems, assess opportunities, 
              evaluate alternatives, allocate resources and turn evidence into practical 
              direction
          </p>

          <p>
            Technology is becoming the next layer of that work. I am developing
            deeper technical capability in Python backend engineering, cloud
            systems, MLOps and solution architecture, with a long-term interest
            in designing systems that bring together research, data, human
            judgement and technology.
          </p>

        </div>
      </section>

      {/* Newsletter */}
      <section className="page-shell">
        <div className="newsletter">

          <p className="eyebrow">
            Ethentra Insights
          </p>

          <h2>
            Research and ideas worth following.
          </h2>

          <p>
            Subscribe for new research, essays and practical thinking on
            markets, decision systems, technology, organisational problems
            and emerging ideas.
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
            Contact
          </p>

          <h2>
            Let&apos;s work on something worth understanding.
          </h2>

          <p className="hero-text">
            I am open to conversations around research, strategy, technology,
            collaborations, professional opportunities and complex problems
            that require careful investigation.
          </p>

          <a href="/contact" className="button secondary">
            Start a Conversation
          </a>
        
          <a
            href="https://ethentra.co/insights"
            target="_blank"
            rel="noopener noreferrer"
            className="button primary"
          >
            Read Ethentra Insights
          </a>

        </div>
      </section>

    </main>
  );
}