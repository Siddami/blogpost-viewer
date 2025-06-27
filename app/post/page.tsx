"use client";

import BlogCard from "../components/BlogCard";
import CommentForm from "../components/CommentForm";

const dummyArticle = {
  title: "Exploring Next.js Features",
  description: "A deep dive into the latest Next.js updates.",
  content:
    "Next.js continues to evolve with new features like the App Router, improved image optimization, and better TypeScript support. This article explores how to leverage these features for a modern web application.",
  url: "https://example.com/nextjs-features",
  urlToImage: "/articleimage.svg",
  publishedAt: "2025-06-26",
  source: { id: null, name: "Tech Blog" },
  author: "John Doe",
};

const similarArticles = [
  {
    title: "Tailwind CSS Tips",
    description: "Master Tailwind CSS with these tips.",
    content: "Tailwind CSS offers a utility-first approach to styling...",
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

export default function Post() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">{dummyArticle.title}</h1>
      {dummyArticle.urlToImage && (
        <div className="relative h-64">
          <img
            src={dummyArticle.urlToImage}
            alt={dummyArticle.title || "Article image"}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="prose prose-invert max-w-none">
        {dummyArticle.content}
      </div>
      <CommentForm />
      <div>
        <h2 className="text-2xl font-bold mb-4">SIMILAR POSTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {similarArticles.map((article) => (
            <BlogCard
              key={article.url}
              article={article}
              onClick={() => (window.location.href = `/post`)} // Static link for now
            />
          ))}
        </div>
      </div>
    </div>
  );
}
