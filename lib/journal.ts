
import { journalPosts } from "../content/journal/posts";

/* ========================================
   JOURNAL CATEGORIES
======================================== */

export type JournalCategory = {
  name: string;
  slug: string;
};

export const journalCategories: JournalCategory[] = [
  
  {
    name: "Philosophy of Data",
    slug: "philosophy-of-data",
  },
  {
    name: "Decision-Making",
    slug: "decision-making",
  },
  {
    name: "Data Engineering & Systems",
    slug: "data-engineering-and-systems",
  },
  {
    name: "Artificial Intelligence",
    slug: "artificial-intelligence",
  },
  {
    name: "Research & Strategy",
    slug: "research-and-strategy",
  },
  {
    name: "Technology & Society",
    slug: "technology-and-society",
  },
];

/* ========================================
   JOURNAL INFORMATION
======================================== */

export const journal = {
  title: "JOURNAL",

  tagline: "Ideas, Systems & Decisions.",

  description:
    "A collection of articles, essays, and technical explorations at the intersection of data engineering, artificial intelligence, philosophy of data, and decision-making. Through practical engineering and critical inquiry, I explore how we build systems, interpret information, and make decisions in a data-driven world.",
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

export function getArticlesByCategory(category: string) {
  return journalPosts.filter(
    (post) =>
      post.category.toLowerCase().trim() ===
      category.toLowerCase().trim()
  );
}

export { journalPosts };

