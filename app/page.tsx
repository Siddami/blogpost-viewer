"use client";

import { useState } from "react";
import BlogCard from "./components/BlogCard";
import { latestPosts, javascriptArticles } from "./data";
import { useRouter } from "next/navigation";

export default function Home() {

  // Newsletter form state
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setMessage("Please enter a valid email address.");
      return;
    }
    setMessage("Subscribed! Check your email for confirmation.");
    setEmail("");
  };

  return (
    <div className="mx-auto">
      {/* Latest Posts Section */}
      <section className="mb-12 font-oswald py-10">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-white p-6">
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
      <section className="rounded-lg mb-12 font-oswald py-20">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-white p-6">
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
      <section className="py-12 px-6 font-oswald">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">NEWSLETTER</h2>
        <div className="grid md:grid-cols-2 gap-8 text-white text-base md:text-lg">
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
              className="flex border border-purple-500 w-full max-w-md"
            >
              <input
                type="email"
                value={email}
                onClick={() => router.push(`/article`)}
                placeholder="Register newsletter"
                className="w-full p-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6"
              >
                submit
              </button>
            </form>

            {message && <p className="text-sm text-gray-300">{message}</p>}
          </div>
        </div>
      </section>
    </div>
  );
}
