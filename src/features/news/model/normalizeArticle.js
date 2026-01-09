export function normalizeArticle(raw) {
  const title = (raw?.title || "").trim();
  const description = (raw?.description || "").trim();
  const imageUrl = (raw?.urlToImage || "").trim();

  // URL 정리 + 깨진 패턴 감지
  const originalUrl = (raw?.url || "").trim();
  const url = originalUrl.replaceAll("\\u003d", "=").replaceAll("\\u0026", "&");

  const isValidUrl = url.startsWith("http://") || url.startsWith("https://");
  const isSuspiciousUrl = originalUrl.includes("\\u00");

  return {
    id: url || `${title}-${raw?.publishedAt ?? ""}`,

    title: title || "제목 없음",
    description: description || "",

    imageUrl: imageUrl || "",
    url,
    isValidUrl,
    isSuspiciousUrl,

    hasImage: Boolean(imageUrl),
    hasDescription: Boolean(description),
  };
}
