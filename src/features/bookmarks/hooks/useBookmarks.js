import { useCallback, useEffect, useState } from "react";
import {
  getBookmarkedArticlesById,
  setBookmarkedArticlesById,
} from "../storage/bookmarksStorage";

export function useBookmarks() {
  const [bookmarkedById, setbookmarkedById] = useState({});

  useEffect(() => {
    setbookmarkedById(getBookmarkedArticlesById());
  }, []);

  const isBookmarked = useCallback(
    (id) => Boolean(bookmarkedById[id]),
    [bookmarkedById]
  );

  const toggleBookmark = useCallback((article) => {
    setbookmarkedById((prev) => {
      const next = { ...prev };
      if (next[article.id]) delete next[article.id];
      else next[article.id] = article;

      setBookmarkedArticlesById(next);
      return next;
    });
  }, []);

  const bookmarks = Object.values(bookmarkedById);

  return { bookmarks, isBookmarked, toggleBookmark };
}
