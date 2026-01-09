import NewsCard from "./NewsCard";

export default function NewsFeed({
  articles,
  isRead,
  onMarkRead,
  isBookmarked,
  onToggleBookmark,
}) {
  return (
    <div>
      {articles.map((article) => (
        <NewsCard
          key={article.id}
          article={article}
          read={isRead(article.id)}
          bookmarked={isBookmarked(article.id)}
          onMarkRead={onMarkRead}
          onToggleBookmark={onToggleBookmark}
        />
      ))}
    </div>
  );
}
