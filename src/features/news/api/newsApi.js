const BASE_URL = "https://newsapi.org/v2";

export async function fetchTopHeadlines({ category = "general", q = "" } = {}) {
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  if (!apiKey) {
    throw new Error("VITE_NEWS_API_KEY가 없습니다 (.env 확인)");
  }

  const params = new URLSearchParams({
    country: "us",
    pageSize: "20",
    category,
  });

  if (q) {
    params.set("q", q);
  }

  const res = await fetch(`${BASE_URL}/top-headlines?${params.toString()}`, {
    headers: {
      "X-Api-Key": apiKey,
    },
  });

  if (!res.ok) {
    throw new Error("News API 요청 실패");
  }

  return res.json();
}
