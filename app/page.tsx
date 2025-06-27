"use client";

import BlogCard from "./components/BlogCard";
import { Article } from "./types";

const dummyArticles: Article[] = [
  {
    title: "Exploring Next.js Features",
    description: "A deep dive into the latest Next.js updates.",
    content: "Next.js continues to evolve with new features...",
    url: "https://example.com/nextjs-features",
    urlToImage: "/articleimage.svg",
    publishedAt: "2025-06-26",
    source: { id: null, name: "Tech Blog" },
    author: "John Doe",
  },
  {
    title: "Tailwind CSS Tips",
    description: "Master Tailwind CSS with these tips.",
    content: "Tailwind CSS offers a utility-first approach...",
    url: "https://example.com/tailwind-tips",
    urlToImage: "/articleimage.svg",
    publishedAt: "2025-06-25",
    source: { id: null, name: "Design Blog" },
    author: "Jane Smith",
  },
  {
    title: "React Hooks Best Practices",
    description: "Learn the best ways to use React Hooks.",
    content: "React Hooks have transformed state management...",
    url: "https://example.com/react-hooks",
    urlToImage: "/articleimage.svg",
    publishedAt: "2025-06-24",
    source: { id: null, name: "Tech Blog" },
    author: "Alice Johnson",
  },
];

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">LATEST</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyArticles.map((article) => (
          <BlogCard
            key={article.url}
            article={article}
            onClick={() =>
              (window.location.href = `/post/${encodeURIComponent(
                article.url
              )}`)
            }
          />
        ))}
      </div>
    </div>
  );
}
