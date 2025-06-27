import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "THEISODE Blog",
  description: "A blog platform using Next.js and News API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' https: data:;"
        />
      </head>
      <body className="bg-gray-900 text-white font-sans">
        {/* Header */}
        <header className="bg-gray-800 p-4 flex justify-between items-center">
          <div className="text-xl font-bold">THEISODE</div>
          <nav className="space-x-4">
            <Link href="/" className="hover:text-purple-400">
              ABOUT
            </Link>
            <Link href="/programming" className="hover:text-purple-400">
              PROGRAMMING
            </Link>
            <Link href="/blog" className="hover:text-purple-400">
              BLOG
            </Link>
            <Link href="/courses" className="hover:text-purple-400">
              COURSES
            </Link>
            <span className="text-gray-400">🔍</span>
          </nav>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        {/* Footer */}
        <footer className="bg-purple-900 p-4 mt-8 text-center">
          <div className="space-x-4">
            <Link href="/about" className="hover:text-white">
              ABOUT
            </Link>
            <Link href="/contact" className="hover:text-white">
              CONTACT
            </Link>
            <Link href="/blog" className="hover:text-white">
              BLOG
            </Link>
            <Link href="/programming" className="hover:text-white">
              PROGRAMMING
            </Link>
            <Link href="/submit" className="hover:text-white">
              SUBMIT
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
