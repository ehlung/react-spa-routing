import NewsCard from "./NewsCard";

export default function NewsFeed({
  articles,
  isRead,
  onMarkRead,
  checkIsBookmarked,
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
          bookmarked={checkIsBookmarked(article.id)}
          onMarkRead={onMarkRead}
          onToggleBookmark={onToggleBookmark}
          highlightQuery={highlightQuery}
        />
      ))}
    </div>
  );
}
