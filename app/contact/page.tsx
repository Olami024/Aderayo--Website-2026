import ContactForm from "./ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Aderayo Olamide Adelanwa for research consulting, collaboration, technical writing, training, speaking, and professional enquiries.",
};

export default function ContactPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="eyebrow">Contact</p>

        <h1>Let's connect.</h1>

        <p>
          For research consulting, research collaboration, training, technical
          writing, documentation, speaking, media, or other professional
          enquiries.
        </p>
      </section>

      <section className="contact-section">
        <p className="eyebrow">Get In Touch</p>

        <h2>
          Have a research question, project, or conversation worth exploring?
        </h2>

        <ContactForm />
        
      </section>
    </main>
  );
}