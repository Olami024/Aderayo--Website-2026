import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "Privacy information for Aderayo Olamide Adelanwa's website.",
};

export default function PrivacyPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="eyebrow">Privacy</p>
        <h1>Privacy Notice</h1>

        <p>
          This website uses information you choose to provide through its
          contact and newsletter forms.
        </p>
      </section>

      <section className="research-direction">
        <h2>Contact enquiries</h2>
        <p>
          When you submit the contact form, your name, email address,
          subject, and message are processed through Resend for delivery
          to the website inbox.
        </p>

        <h2>Newsletter</h2>
        <p>
          Newsletter subscriptions are managed through Kit. Subscribers
          receive an email to confirm their subscription.
        </p>

        <h2>Analytics</h2>
        <p>
          Google Analytics is used to understand website visits and usage.
          Optional analytics tracking loads only after you accept it.
          Your choice is saved in your browser, and you can reopen Cookie
          settings to change it.
        </p>

        <h2>Contact</h2>
        <p>
          For privacy-related enquiries, email
          {" "}
          <a href="mailto:hello@aderayoadelanwa.com">
            hello@aderayoadelanwa.com
          </a>.
        </p>
      </section>
    </main>
  );
}