"use client";

import CommentForm from "../components/CommentForm";
import BlogCard from "../components/BlogCard";
import { javascriptArticles, dummyArticle } from "../data";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Post() {
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
    <div className="min-h-screen text-white">
      <header className="p-6 text-center">
        {dummyArticle.urlToImage && (
          <div className="relative h-48 md:h-84 rounded-lg overflow-hidden">
            <Image
              src={dummyArticle.urlToImage}
              alt={dummyArticle.title ?? ""}
              className="w-full h-full object-cover"
              width={800}
              height={400}
            />
          </div>
        )}
      </header>
      <main className="mx-auto p-4 text-lg leading-relaxed space-y-10">
        <article className="space-y-6">
          <h1 className="text-4xl font-oswald font-medium text-center">
            {dummyArticle.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {dummyArticle.keywords?.map((tag) => (
              <span
                key={tag}
                className={`text-xs font-oswald font-bold ${
                  tag === "javascript"
                    ? "text-[#9BB848]"
                    : tag === "nextjs"
                    ? "text-[#48B8AA]"
                    : tag === "stripe"
                    ? "text-[#B89F48]"
                    : "text-gray-400"
                }`}
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs font-oswald font-bold">
            <span>{dummyArticle.publishedAt}</span>
            <span className="flex items-center gap-1">
              <span className="text-lg font-awesome"></span>
              {dummyArticle.readTime}
            </span>
          </div>
          <p className="prose prose-invert max-w-none text-base font-oswald font-light leading-relaxed">
            {dummyArticle.content}
          </p>
          <Image
            src="/code1.svg"
            alt="Code Example"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg mb-6"
          />
          <p>
            In the above JavaScript code, the sum function accepts two arguments
            and returns their sum. However, the function is not type-safe, which
            means that it will allow you to pass arguments of any type. In this
            case, we&apos;re passing a number and a string, which results in the
            concatenation of the two values. This can be a common source of
            errors, especially in larger codebases. Here&apos;s the same code
            written in TypeScript:
          </p>
          <Image
            src="/code2.svg"
            alt="TypeScript Example"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg mb-6"
          />
          <p className="prose prose-invert max-w-none text-base font-oswald font-light leading-relaxed">
            In the TypeScript version of the code, we&apos;ve defined the types
            of the a and b arguments...
          </p>
        </article>

        {/* Comment Form */}
        <CommentForm />

        {/* Similar Posts */}
        <section className="rounded-lg mb-12 font-oswald py-20">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-white p-6">
            SIMILAR POSTS
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 gap-y-16 py-8 p-4">
            <div className="lg:col-span-2">
              <BlogCard
                key={javascriptArticles[0].url}
                article={javascriptArticles[0]}
                onClick={() => (window.location.href = `/post`)}
                layout="horizontal-reverse"
                dateTop="inline-block"
                dateBottom="hidden"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:col-span-3">
              {javascriptArticles.slice(1).map((article) => (
                <BlogCard
                  key={article.url}
                  article={article}
                  onClick={() => (window.location.href = `/post`)}
                  dateTop="md:hidden inline-block"
                  dateBottom="hidden md:inline-block"
                />
              ))}
            </div>
          </div>
        </section>
      </main>
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

      <footer className="bg-[#383FEF] py-4 text-center">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
          <div className="text-sm font-oswald font-medium mb-2 sm:mb-0">
            AXENTIOI ALEXANDRU - JAVASCRIPT DEVELOPER
          </div>
          <div className="text-sm font-oswald font-medium">
            2022 - ALL RIGHTS RESERVED
          </div>
        </div>
      </footer>
    </div>
  );
}
