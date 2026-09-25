"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

const GA_ID = "G-X1MLX5QSRQ";
const STORAGE_KEY = "aderayo-analytics-consent";

type Consent = "accepted" | "declined" | null;

export default function AnalyticsConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved === "accepted" || saved === "declined") {
      setConsent(saved);
    }

    setReady(true);
  }, []);

  function chooseConsent(choice: "accepted" | "declined") {
    localStorage.setItem(STORAGE_KEY, choice);

    // Reload when withdrawing consent so the existing
    // Analytics script stops running on the next page load.
    if (consent === "accepted" && choice === "declined") {
      window.location.reload();
      return;
    }

    setConsent(choice);
    setShowSettings(false);
  }

  if (!ready) return null;

  return (
    <>
      {consent === "accepted" && <GoogleAnalytics gaId={GA_ID} />}

      {(consent === null || showSettings) && (
        <div
          className="analytics-banner"
          role="region"
          aria-label="Analytics preferences"
        >
          <p>
            This website uses optional Google Analytics cookies to understand
            visits and improve the site. You can accept or decline analytics.
            Read the <a href="/privacy">Privacy Notice</a>.
          </p>

          <div className="analytics-actions">
            <button
              type="button"
              className="button secondary"
              onClick={() => chooseConsent("declined")}
            >
              Decline
            </button>

            <button
              type="button"
              className="button primary"
              onClick={() => chooseConsent("accepted")}
            >
              Accept Analytics
            </button>
          </div>
        </div>
      )}

      {consent !== null && !showSettings && (
        <button
          type="button"
          className="analytics-settings"
          onClick={() => setShowSettings(true)}
        >
          Cookie settings
        </button>
      )}
    </>
  );
}