"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      category: formData.get("category"),
      message: formData.get("message"),
      website: formData.get("website"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status === 429) {
        setStatus("Too many attempts. Please wait a minute and try again.");
        return;
      }

      const result = await response.json();

      if (!response.ok) {
        setStatus(result.message || "Please check your information.");
        return;
      }

      setStatus("Thank you. Your message has been received.");
      form.reset();
    } catch {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="contact-field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
        />
      </div>

      <div className="contact-field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
        />
      </div>

      <div className="contact-field">
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
        />
      </div>
     <div className="form-field">
        <label htmlFor="category">Enquiry type</label>

        <select
          id="category"
          name="category"
          required
          defaultValue=""
        >
          <option value="" disabled>
            Select an enquiry type
          </option>

          <option value="Growth Intelligence">
            Growth Intelligence
          </option>

          <option value="Evidence Intelligence">
            Evidence Intelligence
          </option>

          <option value="Decision Intelligence">
            Decision Intelligence
          </option>

          <option value="Research Collaboration">
            Research Collaboration
          </option>

          <option value="Speaking / Training">
            Speaking / Training
          </option>

          <option value="General Enquiry">
            General Enquiry
          </option>
        </select>
      </div>
      <div className="contact-field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={7}
          required
        />
      </div>

      <button
        className="button primary"
        type="submit"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status && (
        <p className="contact-status">
          {status}
        </p>
      )}
  </form>
  );
}