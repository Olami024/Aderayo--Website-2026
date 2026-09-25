export type JournalPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
};

export const journalPosts: JournalPost[] = [
  {
    slug: "human-centered-ai-human-flourishing",
    title: "Human-Centered AI: How to Evaluate AI for Human Flourishing",
    description:
      "A human-centered approach to evaluating AI through capability, judgment, agency, fairness, transparency, and human flourishing.",
    date: "Published April 9, 2026 · Republished here September 25 2026",
    category: "AI & Human Judgment",
  },
];