import Image from "next/image";
export default function ConsultingPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="eyebrow">Professional Work</p>

        <h1>
          Research, technical writing, training, and technology.
        </h1>
          <div className="about-image-single">
            <Image
              src="/images/aderayo-about-1.png"
              alt="Aderayo professional work"
              width={700}
              height={850}
              />
          </div>
        <p>
          My professional work draws on several years of research experience,
          with expertise in research consulting, research training, technical
          and research writing, and documentation. I am also growing my
          technical practice in Python and backend software engineering.
        </p>
      </section>

      <section className="research-direction">
        <p>
          Much of this work is developed through Ethentra, my research-driven
          firm working across research, advisory, training, and technology.
        </p>

        <div className="hero-buttons">
          <a href="/contact" className="button primary">
            Contact Me
          </a>

          <a href="/about/ventures" className="button secondary">
            Learn About Ethentra
          </a>
        </div>
      </section>
    </main>
  );
}