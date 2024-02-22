export interface Article {
  title: string;
  urlToImage: string;
  url: string;
  description: string;
  publishedAt: string;
  source: {
    name: string;
  };
}

export interface Props {
  articles: Article[];
}
