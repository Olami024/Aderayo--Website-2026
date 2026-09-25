import Image from "next/image";
export default function MediaPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="eyebrow">Media</p>
        <div className="media-image">
          <Image
          src="/images/aderayo-about-3.png"
          alt="Aderayo Olamide Adelanwa"
          width={700}
          height={850}
          loading="eager"
          />
        </div>

        <h1>
          Research, ideas, and public conversations.
        </h1>

        <p>
          I share research, commentary, essays, and conversations on
          technology, philosophy, human judgment, and the practice of research.
        </p>
      </section>

      <section className="research-direction">
        <p className="eyebrow">Find Me</p>

        <div className="hero-buttons">
          <a href="https://www.linkedin.com/in/aderayo-olamide-jdm-phil/">LinkedIn</a>
          <a href="https://github.com/Olami024">GitHub</a>
          <a href="https://www.instagram.com/addy_lanwa">Instagram</a>
          <a href="https://www.youtube.com/@addy_lanwa">YouTube</a>
          <a href="/journal" className="button secondary">Journal</a>
        </div>
      </section>
    </main>
  );
}