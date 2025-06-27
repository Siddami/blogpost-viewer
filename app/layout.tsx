import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Header } from "./components/Header";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "THEJSDUDE",
  description: "A blog platform using Next.js and News API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={oswald.variable}>
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' https: data:;"
        />
      </head>
      <body className="text-white font-oswald h-screen">
        <div className="container max-w-[1440px] mx-auto">
          {/* Header */}
          <Header />

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
        </div>
      </body>
    </html>
  );
}
