
export type JournalPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  dateLabel?: string;
  category: string;
  coverImage?: string;
};

export const journalPosts: JournalPost[] = [
  {
    slug: "human-centered-ai-human-flourishing",

    title:
      "Human-Centered AI: How to Evaluate AI for Human Flourishing",

    description:
      "A human-centered approach to evaluating AI through capability, judgment, agency, fairness, transparency, and human flourishing.",

    date: "2026-09-25",

    dateLabel:
      "Originally published April 9, 2026 · Republished September 25, 2026",

    category: "artificial-intelligence",

    coverImage:
      "/images/journal/human-centered-ai-cover.png",
  },
];