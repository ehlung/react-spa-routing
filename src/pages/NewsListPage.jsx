import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useArticles } from "../features/news/hooks/useArticles";
import NewsFeed from "../features/news/components/NewsFeed";
import { useReadArticles } from "../features/read/hooks/useReadArticles";
import { useBookmarks } from "../features/bookmarks/hooks/useBookmarks";
import { useSearchQuery } from "../app/providers/useSearchQuery";

export default function NewsListPage() {
  const { category } = useParams();
  const { query } = useSearchQuery();

  const { articles, error } = useArticles({
    category: category || "general",
    q: "",
  });

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return articles;

    return articles.filter((a) => {
      const title = (a.title || "").toLowerCase();
      const desc = (a.description || "").toLowerCase();
      return title.includes(q) || desc.includes(q);
    });
  }, [articles, query]);

  const { isRead, markRead } = useReadArticles();
  const { isBookmarked, toggleBookmark } = useBookmarks();

  if (error) return <p>에러 발생</p>;

  return (
    <NewsFeed
      articles={filtered}
      isRead={isRead}
      onMarkRead={markRead}
      isBookmarked={isBookmarked}
      onToggleBookmark={toggleBookmark}
      highlightQuery={query}
    />
  );
}
