import NewsCard from "./NewsCard";

export default function NewsFeed({
  articles,
  isRead,
  onMarkRead,
  isBookmarked,
  onToggleBookmark,
  highlightQuery = "",
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
          highlightQuery={highlightQuery}
        />
      ))}
    </div>
  );
}
