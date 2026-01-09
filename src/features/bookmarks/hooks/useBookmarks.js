import { useCallback, useEffect, useState } from "react";
import { getBookmarksMap, setBookmarksMap } from "../storage/bookmarksStorage";

export function useBookmarks() {
  const [map, setMap] = useState({});

  useEffect(() => {
    setMap(getBookmarksMap());
  }, []);

  const isBookmarked = useCallback((id) => Boolean(map[id]), [map]);

  const toggleBookmark = useCallback((article) => {
    setMap((prev) => {
      const next = { ...prev };
      if (next[article.id]) delete next[article.id];
      else next[article.id] = article;

      setBookmarksMap(next);
      return next;
    });
  }, []);

  const bookmarks = Object.values(map);

  return { bookmarks, isBookmarked, toggleBookmark };
}
