export function highlightText(text, query) {
  if (!text) return text;
  const q = (query || "").trim();
  if (!q) return text;

  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "ig");

  const parts = String(text).split(regex);

  return parts.map((part, idx) => {
    const isMatch = part.toLowerCase() === q.toLowerCase();
    return isMatch ? (
      <mark
        key={idx}
        className="rounded-sm bg-yellow-100 px-0.5 text-inherit dark:bg-yellow-300/30"
      >
        {part}
      </mark>
    ) : (
      <span key={idx}>{part}</span>
    );
  });
}
