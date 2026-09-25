export default function contactRateLimit() {
  // Continue to the existing Next.js contact API.
}

export const config = {
  path: "/api/contact",
  method: "POST",

  rateLimit: {
    windowLimit: 5,
    windowSize: 60,
    aggregateBy: ["ip", "domain"],
  },
};