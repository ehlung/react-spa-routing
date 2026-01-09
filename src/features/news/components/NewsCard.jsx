export default function NewsCard({
  article,
  read,
  bookmarked,
  onMarkRead,
  onToggleBookmark,
}) {
  const { title, description, imageUrl, url, hasImage, hasDescription } =
    article;

  const handleOpen = () => {
    onMarkRead(article.id);
  };

  const handleBookmarkClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleBookmark(article);
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      onClick={handleOpen}
      className={[
        "relative flex gap-4 border-b py-4 transition",
        "hover:bg-gray-50",
        read ? "opacity-60" : "opacity-100",
      ].join(" ")}
    >
      {/* 북마크 버튼 */}
      <button
        type="button"
        onClick={handleBookmarkClick}
        className="absolute right-2 top-2 z-10"
        aria-label={bookmarked ? "북마크 해제" : "북마크 추가"}
      >
        <img
          src={bookmarked ? "/bookmark.svg" : "/bookmark-outline.svg"}
          alt="bookmark"
          className="w-5 h-5"
        />
      </button>

      {/* 썸네일 */}
      {hasImage ? (
        <div className="w-32 h-20 shrink-0 overflow-hidden bg-gray-100">
          <img src={imageUrl} alt="" className="w-full h-full object-cover" />
        </div>
      ) : (
        <div className="w-32 h-20 shrink-0 bg-gray-100" />
      )}

      {/* 텍스트 영역 */}
      <div className="min-w-0 pr-10">
        <h3 className="font-semibold leading-snug">{title}</h3>

        {hasDescription && (
          <p className="mt-1 text-sm text-gray-600">{description}</p>
        )}
      </div>
    </a>
  );
}
