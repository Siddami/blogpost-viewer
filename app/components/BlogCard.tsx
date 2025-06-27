import Image from "next/image";
import { Article } from "../types";

interface BlogCardProps {
  article: Article;
  onClick: () => void;
}

export default function BlogCard({ article, onClick }: BlogCardProps) {
  const publishedDate = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString()
    : "No date";

  return (
    <article
      className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:bg-gray-700 transition-colors"
      onClick={onClick}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      role="button"
      aria-label={`View article: ${article.title || "Untitled"}`}
    >
      {article.urlToImage ? (
        <div className="relative h-48">
          <Image
            src={article.urlToImage}
            alt={article.title || "Article image"}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ) : (
        <div className="h-48 bg-gray-700 flex items-center justify-center">
          <span className="text-gray-400">No image</span>
        </div>
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-white line-clamp-2">
          {article.title || "Untitled"}
        </h2>
        <p className="text-gray-400 text-sm mt-2">{publishedDate}</p>
      </div>
    </article>
  );
}