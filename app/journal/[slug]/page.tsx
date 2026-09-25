import Image from "next/image";
import fs from "node:fs/promises";
import path from "node:path";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { journalPosts } from "../../../content/journal/posts";

export function generateStaticParams() {
  return journalPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = journalPosts.find((post) => post.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = journalPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const filePath = path.join(
    process.cwd(),
    "content",
    "journal",
    `${slug}.mdx`
  );

  const source = await fs
    .readFile(filePath, "utf8")
    .catch(() => null);

  if (!source) {
    notFound();
  }

  return (
    <main className="page-shell journal-post-page">
      <header className="journal-post-header">
        <p className="eyebrow">{post.category}</p>

        <h1>{post.title}</h1>

        <p className="journal-post-description">
          {post.description}
        </p>

        <p className="journal-meta">{post.date}</p>
      </header>
      <div className="journal-cover">
        <Image
        src="/images/journal/human-centered-ai-cover.png"
        alt={post.title}
        width={1200}
        height={700}
        loading="eager"
        />
      </div>

      <article className="journal-post">
        <MDXRemote source={source} />
      </article>
    </main>
  );
}