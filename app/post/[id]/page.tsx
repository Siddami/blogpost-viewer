"use client";

import BlogCard from "../../components/BlogCard";
import CommentForm from "../../components/CommentForm";
import { Article } from "../../types";
import Image from "next/image";

const dummyArticles: Article[] = [
  {
    title: "Exploring Next.js Features",
    description: "A deep dive into the latest Next.js updates.",
    content:
      "Next.js continues to evolve with new features like the App Router, improved image optimization, and better TypeScript support. This article explores how to leverage these features for a modern web application.",
    url: "https://example.com/nextjs-features",
    urlToImage: "/articleimage.svg",
    publishedAt: "2025-06-26",
    source: { id: null, name: "Tech Blog" },
    author: "John Doe",
  },
  {
    title: "Tailwind CSS Tips",
    description: "Master Tailwind CSS with these tips.",
    content:
      "Tailwind CSS offers a utility-first approach to styling, making it easy to build responsive designs. Learn how to optimize your workflow with custom configurations and best practices.",
    url: "https://example.com/tailwind-tips",
    urlToImage: "/articleimage.svg",
    publishedAt: "2025-06-25",
    source: { id: null, name: "Design Blog" },
    author: "Jane Smith",
  },
  {
    title: "React Hooks Best Practices",
    description: "Learn the best ways to use React Hooks.",
    content:
      "React Hooks have transformed state management and side effects in functional components. This guide covers useState, useEffect, and custom hooks with practical examples.",
    url: "https://example.com/react-hooks",
    urlToImage: "/articleimage.svg",
    publishedAt: "2025-06-24",
    source: { id: null, name: "Tech Blog" },
    author: "Alice Johnson",
  },
];

export default function Post({ params }: { params: { id: string } }) {
  const article =
    dummyArticles.find((a) => encodeURIComponent(a.url) === params.id) || null;
  const similarArticles = dummyArticles
    .filter(
      (a) => a.source.name === article?.source.name && a.url !== article?.url
    )
    .slice(0, 2);

  if (!article)
    return <p className="text-center text-red-400">Article not found.</p>;

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">{article.title}</h1>
      {article.urlToImage && (
          <Image
            src={article.urlToImage}
            alt={article.title || "Article image"}
            fill
            className="w-full h-full object-cover"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 700px"
            priority
          />
      )}
      <div className="prose prose-invert max-w-none">{article.content}</div>
      <CommentForm />
      <div>
        <h2 className="text-2xl font-bold mb-4">SIMILAR POSTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {similarArticles.map((a) => (
            <BlogCard
              key={a.url}
              article={a}
              onClick={() =>
                (window.location.href = `/post/${encodeURIComponent(a.url)}`)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
