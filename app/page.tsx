import Image from "next/image";
import Script from "next/script";

export default function HomePage() {
  return (
    <main>

      {/* Hero */}
      <section className="hero hero-split">
        <div className="hero-content">
          <p className="eyebrow">
            Research Consultant | Philosopher of Technology & Human Judgment
          </p>

          <h1>
            Researching complex problems across technology, society, and human
            decision-making.
          </h1>

          <p className="hero-text">
            I am a Research Consultant and Technical Writer with several years of experience conducting, advising on, and supporting research. 
            My professional work spans research consulting, research training, technical and research writing, and documentation, with a broader focus on technology and complex decision-making. 
            I am also developing my technical practice in Python and backend software engineering, with particular interest in how research can inform the design, documentation, and evaluation of technical systems.
          </p>

          <p className="hero-text">
            I am also a PhD Researcher in Philosophy studying the relationship
            between technology and human judgment. My doctoral research examines
            how computational and software systems shape decision-making,
            particularly in situations involving uncertainty, context, and
            competing values.
          </p>

          <div className="hero-buttons">
            <a href="/about/consulting" className="button primary">
              Professional Work
            </a>

            <a href="/about/research" className="button secondary">
              Research & PhD
            </a>
          </div>
        </div>

        <div className="hero-image">
          <Image
            src="/images/aderayo-profile.png"
            alt="Aderayo Olamide Adelanwa"
            width={600}
            height={750}
            priority
          />
        </div>
      </section>

      {/* Main Areas */}
      <section className="focus-section">
        <section className="page-shell">
          <div className="home-feature-image">
            <Image
            src="/images/aderayo-about-3.png"
            alt="Aderayo Olamide Adelanwa"
            width={1000}
            height={650}
            />
            </div>
        </section>
        <article className="focus-card">
          <span>01</span>

          <h2>Consulting & Writing</h2>

          <p>
            Research consulting, research training, technical documentation,
            research writing, and clear communication for complex ideas,
            products, and systems.
          </p>

          <a href="/about/consulting">
            Explore professional work →
          </a>
        </article>

        <article className="focus-card">
          <span>02</span>

          <h2>Research & PhD</h2>

          <p>
            Philosophical and interdisciplinary research on technology, human
            judgment, uncertainty, ethics, AI, software systems, and
            computational decision-making. My doctoral research investigates the tension between formal
          computational systems and the uncertainty, context, values, and
          judgment involved in real-world decision-making.
          </p>

          <a href="/about/research">
            Explore research →
          </a>
        </article>

        <article className="focus-card">
          <span>03</span>

          <h2>Ventures</h2>

          <p>
            My entrepreneurial interests span research, technology, lifestyle,
            hospitality, and commerce.
          </p>

          <a href="/about/ventures">
            Explore ventures →
          </a>
        </article>
      </section>

      {/* Journal */}
      <section className="page-shell">
        <div className="home-journal">
          <p className="eyebrow">Journal</p>

          <h2>
            Notes and essays on research, technology, philosophy, and human
            judgment.
          </h2>

          <p className="hero-text">
            The Journal is where I develop ideas, document questions, explore
            emerging research, and write about the relationship between
            technology and human life.
          </p>

          <a href="/journal" className="button secondary">
            Explore the Journal
          </a>
        </div>
      </section>

      {/* Newsletter */}
      <section className="page-shell">
        <div className="newsletter">
          <p className="eyebrow">Newsletter</p>
          <h2>Subscribe to my newsletter.</h2>
          <p>
            Ideas and notes on research, technology, philosophy, human judgment,
            and work in progress.
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
          <p className="eyebrow">Work With Me</p>
          
          <p className="home-contact-text">
            Research consulting, collaboration, training, technical writing,
            speaking, and selected professional enquiries.
          </p>
          
          <a href="/contact" className="button primary">
            Start a Conversation
          </a>
        </div>
      </section>
      
    </main>
  );
}
