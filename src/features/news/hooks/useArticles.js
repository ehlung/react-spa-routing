import { useEffect, useState } from "react";
import { fetchTopHeadlines } from "../api/newsApi";
import { normalizeArticle } from "../model/normalizeArticle";

export function useArticles({ category, q }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function load() {
      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchTopHeadlines({ category, q });
        const normalized = data.articles.map(normalizeArticle);

        if (!ignore) {
          setArticles(normalized);
        }
      } catch (err) {
        if (!ignore) {
          setError(err);
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    }

    load();
    return () => {
      ignore = true;
    };
  }, [category, q]);

  return { articles, isLoading, error };
}
