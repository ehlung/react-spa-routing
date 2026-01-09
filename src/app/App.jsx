import { useArticles } from "../features/news/hooks/useArticles";
import NewsFeed from "../features/news/components/NewsFeed";
import { useReadArticles } from "../features/read/hooks/useReadArticles";
import { useBookmarks } from "../features/bookmarks/hooks/useBookmarks";
import ThemeToggle from "../components/ThemeToggle";

export default function App() {
  const { articles, isLoading, error } = useArticles({ category: "general" });
  const { isRead, markRead } = useReadArticles();
  const { isBookmarked, toggleBookmark } = useBookmarks();

  if (isLoading) return <p className="p-6">로딩 중...</p>;
  if (error) return <p className="p-6">에러 발생</p>;

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="max-w-3xl mx-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">NewsViewer</h1>
          <ThemeToggle />
        </div>

        <NewsFeed
          articles={articles}
          isRead={isRead}
          onMarkRead={markRead}
          isBookmarked={isBookmarked}
          onToggleBookmark={toggleBookmark}
        />
      </div>
    </div>
  );
}
