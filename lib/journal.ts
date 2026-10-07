import { journalPosts } from "../content/journal/posts";

export type JournalCategory = {
  name: string;
  slug: string;
};

export const journalCategories: JournalCategory[] = [
  {
    name: "Research",
    slug: "research",
  },
  {
    name: "Markets & Business",
    slug: "markets-and-business",
  },
  {
    name: "Human Judgment",
    slug: "human-judgment",
  },
  {
    name: "Decision Systems",
    slug: "decision-systems",
  },
  {
    name: "Artificial Intelligence",
    slug: "artificial-intelligence",
  },
  {
    name: "Machine Learning",
    slug: "machine-learning",
  },
  {
    name: "Technology",
    slug: "technology",
  },
  {
    name: "Philosophy",
    slug: "philosophy",
  },
  {
    name: "Recommendation & Optimization Systems",
    slug: "recommendation-and-optimization-systems",
  },
  {
    name: "Data-Driven Organisations",
    slug: "data-driven-organisations",
  },
];

export const journal = {
  title: "JOURNAL",

  tagline:
    "Research, decision systems, markets, technology, and human judgment.",

  description:
    "The Journal is where I investigate how people and organisations make decisions, how evidence and markets shape those decisions, and how software, data, and machine learning are changing the systems through which decisions are made.",
};


/* ========================================
   ARTICLES
======================================== */

export function getAllArticles() {
  return journalPosts;
}


export function getArticleBySlug(slug: string) {
  return journalPosts.find(
    (post) => post.slug === slug
  );
}


export function getArticlesByCategory(
  category: string
) {
  return journalPosts.filter(
    (post) => post.category === category
  );
}


export { journalPosts };