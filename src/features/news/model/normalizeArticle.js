export function normalizeArticle(raw) {
  const title = (raw?.title || "").trim();
  const description = (raw?.description || "").trim();
  const imageUrl = (raw?.urlToImage || "").trim();
  const url = (raw?.url || "").trim();

  return {
    id: url || `${title}-${raw?.publishedAt ?? ""}`,

    title: title || "제목 없음",
    description: description || "",

    imageUrl: imageUrl || "",
    url,

    // UI 분기용 플래그
    hasImage: Boolean(imageUrl),
    hasDescription: Boolean(description),
  };
}
