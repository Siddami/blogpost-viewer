import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="p-4 mt-16 border-b border-white flex flex-col justify-between gap-20 items-center">
      <h1 className="text-3xl font-bold">THEJSDUDE</h1>
      <nav className="flex flex-col md:flex-row gap-4 items-center justify-between w-full">
        <div className="flex flex-col text-lg md:flex-row gap-6 items-center justify-center">
          <Link href="/" className="hover:text-purple-400">
            ABOUT
          </Link>
          <Link href="/design" className="hover:text-purple-400">
            DESIGN
          </Link>
          <Link href="/programming" className="hover:text-purple-400">
            PROGRAMMING
          </Link>
          <Link href="/blog" className="hover:text-purple-400">
            BLOCKCHAIN
          </Link>
          <Link href="/courses" className="hover:text-purple-400">
            COURSES
          </Link>
        </div>
        <Link href="/" className="uppercase hover:text-purple-400">
          🔍 Get In Touch
        </Link>
      </nav>
    </header>
  );
};
