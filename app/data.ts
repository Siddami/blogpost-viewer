import { Article } from "./types";

export const latestPosts: Article[] = [
  {
    title: "How I created a chess subscription application.",
    description: "A deep dive into the latest Next.js updates.",
    content:
      "Next.js continues to evolve with new features like the App Router, improved image optimization, and better TypeScript support. This article explores how to leverage these features for a modern web application with detailed examples and best practices.",
    url: "https://example.com/nextjs-features",
    urlToImage: "/articleimage2.svg",
    publishedAt: "12 July 2022",
    readTime: "5-7 minutes read",
    author: "John Doe",
    keywords: ["javascript", "nextjs", "stripe"],
  },
  {
    title: "Tailwind CSS Tips",
    description: "Master Tailwind CSS with these tips.",
    content:
      "Tailwind CSS offers a utility-first approach to styling, making it easy to build responsive designs. Learn how to optimize your workflow with custom configurations and best practices with step-by-step guidance.",
    url: "https://example.com/tailwind-tips",
    urlToImage: "/articleimage.svg",
    publishedAt: "12 July 2022",
    readTime: "5-7 minutes read",
    author: "Jane Smith",
    keywords: ["javascript", "nextjs", "stripe"],
  },
  {
    title: "React Hooks Best Practices",
    description: "Learn the best ways to use React Hooks.",
    content:
      "React Hooks have transformed state management and side effects in functional components. This guide covers useState, useEffect, and custom hooks with practical examples and common pitfalls to avoid.",
    url: "https://example.com/react-hooks",
    urlToImage: "/articleimage.svg",
    publishedAt: "12 July 2022",
    readTime: "5-7 minutes read",
    author: "Alice Johnson",
    keywords: ["javascript", "nextjs", "stripe"],
  },
  {
    title: "React Hooks Best Practices",
    description: "Learn the best ways to use React Hooks.",
    content:
      "React Hooks have transformed state management and side effects in functional components. This guide covers useState, useEffect, and custom hooks with practical examples and common pitfalls to avoid.",
    url: "https://example.com/react-hooks",
    urlToImage: "/articleimage.svg",
    publishedAt: "12 July 2022",
    readTime: "5-7 minutes read",
    author: "Alice Johnson",
    keywords: ["javascript", "nextjs", "stripe"],
  },
];

export const javascriptArticles: Article[] = [
  {
    title: "Typescript in 21 steps, best in-depth guide",
    description: "Explore the power of ES6 in modern JavaScript.",
    content: "ES6 introduces features like arrow functions and let/const...",
    url: "https://example.com/es6-features",
    urlToImage: "/jsarticle.svg",
    publishedAt: "12 July 2022",
    readTime: "5-7 minutes read",
    author: "Bob Wilson",
    keywords: ["javascript", "nextjs", "stripe"],
  },
  {
    title: "JavaScript ES6 Features",
    description: "Explore the power of ES6 in modern JavaScript.",
    content: "ES6 introduces features like arrow functions and let/const...",
    url: "https://example.com/es6-features",
    urlToImage: "/articleimage.svg",
    publishedAt: "12 July 2022",
    readTime: "5-7 minutes read",
    author: "Bob Wilson",
    keywords: ["javascript", "nextjs", "stripe"],
  },
  {
    title: "Asynchronous JavaScript",
    description: "Master async/await and Promises.",
    content: "Learn how to handle asynchronous operations effectively...",
    url: "https://example.com/async-js",
    urlToImage: "/articleimage.svg",
    publishedAt: "12 July 2022",
    readTime: "5-7 minutes read",
    author: "Carol Lee",
    keywords: ["javascript", "nextjs", "stripe"],
  },
  {
    title: "Asynchronous JavaScript",
    description: "Master async/await and Promises.",
    content: "Learn how to handle asynchronous operations effectively...",
    url: "https://example.com/async-js",
    urlToImage: "/articleimage.svg",
    publishedAt: "12 July 2022",
    readTime: "5-7 minutes read",
    author: "Carol Lee",
    keywords: ["javascript", "nextjs", "stripe"],
  },
];

export const dummyArticle: Article = {
    title: "Why TypeScript is the Better Choice over JavaScript",
    description: "A deep dive into why TypeScript outperforms JavaScript.",
    content: `As a developer, you want to write code that is not only functional, but also easy to maintain and extend. This is where TypeScript comes in. While JavaScript is the most popular programming language in the world, TypeScript offers several advantages that make it a better choice for many projects.

    First and foremost, TypeScript is a typed language, which means that variables have a specific type (such as string, number, or boolean) and the compiler will check for type errors at compile time. This makes it easier to catch errors early on and prevents runtime exceptions, saving you time and frustration.

    In addition, TypeScript has a rich type system that allows you to define interfaces, classes, and other advanced types that make your code more organized and self-documenting. This not only improves the readability of your code, but also makes it easier for other developers to understand and work with.

    Another advantage of TypeScript is that it is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code. This means that you can gradually introduce TypeScript into your existing JavaScript codebase, and take advantage of its features as needed. You can also use the TypeScript compiler to convert your TypeScript code into plain JavaScript that can run in any modern browser or runtime.

    In conclusion, while JavaScript will always have its place in the world of programming, TypeScript offers many compelling benefits that make it a better choice for large and complex projects. With its strong typing, advanced type system, and seamless integration with JavaScript, TypeScript can help you write more maintainable and scalable code. If you're not already using TypeScript, it's definitely worth considering for your next project.

    Here's an example of how TypeScript can provide benefits over JavaScript:`,
    url: "https://example.com/typescript-vs-js",
    urlToImage: "/articleimage2.svg",
    publishedAt: "2022-07-12",
    readTime: "5-7 minutes read",
    author: "John Doe",
    keywords: ["javascript", "nextjs", "stripe"],
  };
