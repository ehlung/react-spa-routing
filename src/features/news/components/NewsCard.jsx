export default function NewsCard({
  article,
  read,
  bookmarked,
  onMarkRead,
  onToggleBookmark,
}) {
  const { title, description, imageUrl, url, hasImage, hasDescription } =
    article;

  const handleOpen = (e) => {
    onMarkRead(article.id);

    const shouldWarn =
      !article.url || !article.isValidUrl || article.isSuspiciousUrl;

    if (shouldWarn) {
      e.preventDefault();

      const ok = window.confirm(
        "해당 뉴스는 원문 링크가 제한되거나 정상적으로 열리지 않을 수 있습니다.\n그래도 이동하시겠습니까?"
      );

      if (!ok) return;

      if (article.url && article.isValidUrl) {
        window.open(article.url, "_blank", "noreferrer");
      }
    }
  };

  const handleBookmarkClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleBookmark(article);
  };

  return (
    <a
      href={article.isValidUrl ? url : "#"}
      target="_blank"
      rel="noreferrer"
      onClick={handleOpen}
      className={[
        "relative flex gap-4 border-b py-4 transition",
        "border-zinc-200 hover:bg-gray-50",
        "dark:border-zinc-800 dark:hover:bg-zinc-900/40",
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
