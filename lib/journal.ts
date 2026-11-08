
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
    "A collection of articles, essays and technical explorations at the intersection of data, technology, applied philosophy and organisational practice. Through critical inquiry and technical exploration, I examine the ethical, axiological, epistemological and organisational dimensions of data, exploring how data is produced, interpreted, valued, governed and used in decision-making and technological innovation.",
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

