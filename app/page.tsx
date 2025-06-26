import Image from "next/image";

export default function Home() {
  return (
   <div>
    <h1>Welcome to the Blog Post Viewer</h1>
    <p>This is a simple application that fetches and displays blog posts from a public API.</p>
    <Image
      src="/images/blog-image.jpg"
      alt="Blog Image"
      width={600}
      height={400}
      priority
    />
    <p>Explore the latest posts and enjoy reading!</p>
    <a href="/posts" className="button">View Posts</a>
   </div>
  );
}
