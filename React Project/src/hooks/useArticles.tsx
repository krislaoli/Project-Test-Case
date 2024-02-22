import { useState, useEffect } from "react";
import axios from "axios";
import { Article } from "../types/ArticlesTypes";

const useArticles = () => {
  const [articlesData, setArticlesData] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=tesla&from=2024-01-22&sortBy=publishedAt&apiKey=103343cc38454d41a53fbfa63ada3e06"
        );``
        setArticlesData(response.data.articles);
      console.log(response.data.article);
      
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return {
    articlesData,
  };
};

export default useArticles;
