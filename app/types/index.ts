export interface Article {
  title: string | null;
  description: string | null;
  content: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string | null;
  source: {
    id: string | null;
    name: string | null;
  };
  author: string | null;
}
