"use client";

import { useState, useEffect } from "react";
import BlogCard from "./components/BlogCard";
import { latestPosts, javascriptArticles } from "./data";
import { useRouter } from "next/navigation";

export default function Home() {
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Newsletter form state
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  // Apply theme to document and save to localStorage
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000); // 1-second delay
    return () => clearTimeout(timer);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setMessage("Please enter a valid email address.");
      return;
    }
    setMessage("Subscribed! Check your email for confirmation.");
    setEmail("");
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600" />
      </div>
    );
  }

  return (
    <div className="mx-auto min-h-screen bg-gray-100 dark:bg-gradient-to-br dark:from-[#020213] dark:to-[#091C38] text-gray-900 dark:text-white font-oswald">
      {/* Theme Toggle */}
      <div className="p-4 text-right">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium focus:outline-none"
          aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Latest Posts Section */}
      <section className="mb-12 py-10">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-center text-gray-900 dark:text-white p-6">
          LATEST
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 gap-y-16 py-8 p-6">
          <div className="lg:col-span-2">
            <BlogCard
              key={latestPosts[0].url}
              article={latestPosts[0]}
              onClick={() => router.push(`/article`)}
              layout="horizontal"
              dateTop="inline-block"
              dateBottom="hidden"
            />
          </div>
          {/* Remaining three posts side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:col-span-3">
            {latestPosts.slice(1).map((article) => (
              <BlogCard
                key={article.url}
                article={article}
                onClick={() => router.push(`/article`)}
                dateTop="inline-block md:hidden"
                dateBottom="hidden md:inline-block"
              />
            ))}
          </div>
        </div>
      </section>

      {/* JavaScript Section */}
      <section className="rounded-lg mb-12 py-20">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-center text-gray-900 dark:text-white p-6">
          JAVASCRIPT
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 gap-y-16 py-8 p-6">
          <div className="lg:col-span-2">
            <BlogCard
              key={javascriptArticles[0].url}
              article={javascriptArticles[0]}
              onClick={() => router.push(`/article`)}
              layout="horizontal-reverse"
              dateTop="inline-block"
              dateBottom="hidden"
            />
          </div>
          {/* Remaining three posts side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:col-span-3">
            {javascriptArticles.slice(1).map((article) => (
              <BlogCard
                key={article.url}
                article={article}
                onClick={() => router.push(`/article`)}
                dateTop="md:hidden inline-block"
                dateBottom="hidden md:inline-block"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Option */}
      <section className="py-12 px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          NEWSLETTER
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-gray-900 dark:text-white text-base md:text-lg">
          {/* Left Text */}
          <div className="space-y-6 text-left">
            <p className="text-base leading-relaxed">
              Are you passionate about programming and always looking for ways
              to learn more and stay up-to-date with the latest developments in
              the field?
            </p>
            <p className="text-base leading-relaxed">
              If so, our programming blog newsletter is the perfect fit for you!
            </p>
            <p className="text-base leading-relaxed">
              With our newsletter, you&#39;ll receive regular updates on the
              hottest topics in the world of programming, as well as exclusive
              access to content that you won’t find anywhere else.
            </p>
          </div>

          {/* Right Text and Form */}
          <div className="flex flex-col justify-between space-y-6 text-left">
            <p className="text-base leading-relaxed">
              Plus, our team of expert writers and industry professionals curate
              each edition to ensure that you&#39;re only getting the most
              valuable and relevant information.
            </p>
            <p className="text-base leading-relaxed">
              Don’t miss out – sign up for our newsletter today and take your
              programming knowledge to the next level!
            </p>

            {/* Form */}
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex border border-purple-500 dark:border-purple-400 w-full max-w-md"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Register newsletter"
                className="w-full p-3 bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-purple-600 dark:bg-purple-700 hover:bg-purple-700 dark:hover:bg-purple-800 text-white font-bold px-6"
                aria-label="Submit newsletter subscription"
              >
                submit
              </button>
            </form>

            {message && <p className="text-sm text-gray-600 dark:text-gray-400">{message}</p>}
          </div>
        </div>
      </section>
    </div>
  );
}