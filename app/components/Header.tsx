"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = (
    <>
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
    </>
  );

  return (
    <header className="w-full border-b border-white text-white px-4 py-6 max-w-[1440px] mx-auto">
      {/* Top bar (Mobile only) */}
      <div className="flex justify-between items-center md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="text-white text-2xl"
        >
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <h1 className="text-xl font-bold tracking-widest">THEJSDUDE</h1>

        <Link href="/">
          <Image src="/seacrh.svg" alt="search icon" width={20} height={20} />
        </Link>
      </div>

      {/* Mobile Dropdown Menu */}
      <nav
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-[500px] mt-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 py-4 text-lg">
          {navLinks}
          <Link href="/" className="hover:text-purple-400">
            Get In Touch
          </Link>
        </div>
      </nav>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-col justify-between items-center mt-4 space-y-10">
        <h1 className="text-3xl font-bold tracking-widest">THEJSDUDE</h1>
        <div className="flex justify-between items-center w-full px-4">
          <nav className="flex gap-8 text-lg items-center">{navLinks}</nav>
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-purple-400"
          >
            <Image src="/seacrh.svg" alt="search icon" width={16} height={16} />
            <span>Get In Touch</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
