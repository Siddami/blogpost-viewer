"use client";

import { useState } from "react";

export default function CommentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, comment });
    setName("");
    setEmail("");
    setComment("");
  };

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-oswald font-medium mb-4">Leave a comment</h2>
      <div className="bg-[#050C20] p-4 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="w-full sm:w-1/2">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="w-full p-2 bg-transparent border-b border-[#383FEF] text-white text-base font-oswald font-light"
                required
                aria-label="Name"
              />
            </div>
            <div className="hidden sm:block w-[1px] h-12 bg-[#383FEF]" />
            <div className="w-full sm:w-1/2">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full p-2 bg-transparent border-b border-[#383FEF] text-white text-base font-oswald font-light"
                required
                aria-label="Email"
              />
            </div>
          </div>
          <div>
            <label htmlFor="comment" className="sr-only">
              Comment
            </label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Comment..."
              className="w-full p-2 bg-transparent border-b border-[#383FEF] text-white text-base font-oswald font-light h-24"
              required
              aria-label="Comment"
            />
          </div>
          <button
            type="submit"
            className="bg-[#383FEF] text-white px-4 py-2 rounded w-full sm:w-auto text-center font-oswald font-medium"
            aria-label="Submit comment"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
}
