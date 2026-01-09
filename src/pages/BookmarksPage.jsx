import NewsFeed from "../features/news/components/NewsFeed";
import { useBookmarks } from "../features/bookmarks/hooks/useBookmarks";
import { useReadArticles } from "../features/read/hooks/useReadArticles";

export default function BookmarksPage() {
  const { bookmarks, isBookmarked, toggleBookmark } = useBookmarks();
  const { isRead, markRead } = useReadArticles();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">북마크</h1>

      {bookmarks.length === 0 ? (
        <div className="rounded-lg border border-zinc-200 p-6 text-zinc-600 dark:border-zinc-800 dark:text-zinc-300">
          아직 북마크한 뉴스가 없습니다.
        </div>
      ) : (
        <NewsFeed
          articles={bookmarks}
          isRead={isRead}
          onMarkRead={markRead}
          isBookmarked={isBookmarked}
          onToggleBookmark={toggleBookmark}
        />
      )}
    </div>
  );
}
