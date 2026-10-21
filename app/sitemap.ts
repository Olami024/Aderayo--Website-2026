import type { MetadataRoute } from "next";
import { journalPosts } from "../content/journal/posts";

const baseUrl = "https://aderayoadelanwa.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/career",
    "/business",
    "/journal",
    "/projects",
    "/contact",
    "/privacy",
  ];

  const staticPages = pages.map((page) => ({
    url: `${baseUrl}${page}`,
  }));

  const journalPages = journalPosts.map((post) => ({
    url: `${baseUrl}/journal/${post.slug}`,
  }));

  return [...staticPages, ...journalPages];
}