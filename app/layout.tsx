import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Oswald } from "next/font/google";
import { Footer } from "./components/Footer";

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
      <body className="text-white font-oswald min-h-screen bg-gradient-to-b from-[#020213] to-[#091C38] bg-no-repeat bg-cover">
        {/* Header */}
        <Header />

        <main className="container max-w-[1440px] mx-auto p-4">{children}</main>
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
