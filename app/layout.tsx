import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog Post Viewer",
  authors: [
    {
      name: "Sid",
      url: "https://yourwebsite.com",
    },
  ],
  keywords: ["blog", "viewer", "posts", "API"],
  openGraph: {
    title: "Blog Post Viewer",
    description: "A simple blog post viewer that fetches and displays posts from a public API.",
    url: "https://yourwebsite.com",
    siteName: "Blog Post Viewer",
    images: [
      {
        url: "https://yourwebsite.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blog Post Viewer OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
