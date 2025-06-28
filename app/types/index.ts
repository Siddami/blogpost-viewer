export interface Article {
  title: string | null;
  description: string | null;
  content: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string | null;
  readTime: string | null;
  author: string | null;
  keywords: string[] | null; 
}
