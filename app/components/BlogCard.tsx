// components/BlogCard.tsx
import Image from "next/image";
import { Article } from "../types";

interface BlogCardProps {
  article: Article;
  onClick: () => void;
  className?: string;
  layout?: "vertical" | "horizontal" | "horizontal-reverse";
  dateTop?: string;
  dateBottom?: string;
}

export default function BlogCard({
  article,
  onClick,
  className = "",
  layout = "vertical",
  dateTop,
  dateBottom,
}: BlogCardProps) {
  const publishedDate = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString()
    : "No date";

  const getLayoutClasses = () => {
    switch (layout) {
      case "horizontal":
        return "flex-col lg:flex-row";
      case "horizontal-reverse":
        return "flex-col lg:flex-row-reverse";
      default:
        return "flex-col";
    }
  };

  const glowBg =
    layout !== "vertical"
      ? ""
      : "before:content-[''] before:absolute before:top-20 before:left-12 before:w-48 before:h-48 before:bg-purple-700 before:opacity-30 before:blur-3xl before:rounded-full";

  return (
    <article
      className={`group relative flex ${getLayoutClasses()} gap-14 cursor-pointer ${className} ${glowBg}`}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      role="button"
      tabIndex={0}
      aria-label={`View article: ${article.title || "Untitled"}`}
    >
      {/* Image Block */}
      {article.urlToImage ? (
        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.4)]">
          <Image
            src={article.urlToImage}
            alt={article.title || "Article image"}
            fill
            className="object-cover rounded-xl"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      ) : (
        <div className="w-full h-[300px] bg-gray-700 flex items-center justify-center text-gray-400 rounded-xl">
          No image
        </div>
      )}

      {/* Text Block */}
      <div className="w-full flex flex-col justify-between gap-3">
        <h2 className="text-white text-2xl lg:text-3xl font-bold leading-snug group-hover:text-purple-400 transition-colors">
          {article.title || "Untitled"}
        </h2>
        <span className={`mr-auto font-bold ${dateTop}`}>
          {publishedDate}
        </span>

        <div className="flex gap-2 flex-wrap font-bold">
          {article.keywords?.map((tag) => (
            <span
              key={tag}
              className={
                tag === "javascript"
                  ? "text-[#9BB848]"
                  : tag === "nextjs"
                  ? "text-[#48B8AA]"
                  : tag === "stripe"
                  ? "text-[#B89F48]"
                  : "text-gray-400"
              }
            >
              #{tag}
            </span>
          ))}
        </div>

        <p className="text-gray-300 text-sm font-light line-clamp-3">
          {article.content || "No content available."}
        </p>

        <div className="flex items-center gap-2 text-xs text-white mt-2">
          <span className="text-[14px] font-black">🕒</span>
          <span className="font-bold">
            {article.readTime || "5-7 minutes read"}
          </span>
          <span className={`ml-auto font-bold ${dateBottom}`}>
            {publishedDate}
          </span>
        </div>
      </div>
    </article>
  );
}
