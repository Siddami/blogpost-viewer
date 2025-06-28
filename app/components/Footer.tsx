import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-[#383FEF] mt-8 text-center p-4">
      <div className="max-w-[1440px] mx-auto">
        <div className="border-b border-white hidden md:flex flex-col md:flex-row justify-between items-center py-4 gap-6">
          <div className="space-x-4 flex flex-col md:flex-row gap-6 items-center justify-center">
            <Link href="/about" className="hover:text-white">
              ABOUT
            </Link>
            <Link href="/contact" className="hover:text-white">
              CONTACT
            </Link>
            <Link href="/blog" className="hover:text-white">
              DESIGN
            </Link>
            <Link href="/programming" className="hover:text-white">
              PROGRAMMING
            </Link>
            <Link href="/submit" className="hover:text-white">
              DEVELOPEMENT
            </Link>
          </div>
          <Image
            src="/seacrh.svg"
            alt="search icon"
            className="inline-block"
            width={16}
            height={16}
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 py-4">
          <span>AXENTIOI ALEXANDRU - JAVASCRIPT DEVELOPER</span>
          <span>2022 - ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </footer>
  );
};
