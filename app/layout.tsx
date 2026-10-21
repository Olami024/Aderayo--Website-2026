import AnalyticsConsent from "./AnalyticsConsent";
import "./globals.css";
import Image from "next/image";
import type { Metadata } from "next";
import { Alice } from "next/font/google";

const alice = Alice({
  subsets: ["latin"],
  weight: "400",
});

import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

export const metadata: Metadata = {
  title: {
    default: "Aderayo Olamide Adelanwa",
    template: "%s | Aderayo Olamide Adelanwa",
  },

  description:
    "An applied philosopher exploring data engineering, artificial intelligence, and data-driven decision-making through technology and strategic thinking.",

  openGraph: {
    title: "Aderayo Olamide Adelanwa",
    description:
      "PHILOSOPHY · DATA · AI · DECISION-MAKING",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aderayo Olamide Adelanwa",
    description:
      "An applied philosopher exploring data engineering, artificial intelligence, and data-driven decision-making through technology and strategic thinking.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={alice.className}>
        <header className="site-header">
          <a href="/" className="brand">
            <Image
              src="/images/aderayo-logo.svg"
              alt="Aderayo Olamide Adelanwa"
              width={150}
              height={50}
              className="brand-logo"
              priority
            />
          </a>

          <nav className="nav">
            <a href="/">Home</a>
            <a href="/career">Career</a>
            <a href="/projects">Projects</a>
            <a href="/business">Business</a>
            <a href="/journal">Journal</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>

        {children}

        <footer className="footer">
          <p>© 2026 Aderayo Olamide Adelanwa</p>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/aderayo-olamide-jdm-phil/" aria-label="LinkedIn">
                <FaLinkedinIn size={18} />
                </a>
            <a href="https://github.com/Olami024" aria-label="GitHub">
                <FaGithub size={18} />
                </a>
            <a href="https://www.instagram.com/addy_lanwa" aria-label="Instagram">
                <FaInstagram size={18} />
                </a>
            <a href="https://www.youtube.com/@addy_lanwa" aria-label="YouTube">
                <FaYoutube size={18} />
                </a>
          </div>
        </footer>
        <AnalyticsConsent />
      </body>
    </html>
  );
}