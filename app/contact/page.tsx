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
        <p className="eyebrow">Get In Touch</p>

        <h2>
          Have a project, or conversation worth exploring?
        </h2>

        <ContactForm />
        
      </section>
    </main>
  );
}