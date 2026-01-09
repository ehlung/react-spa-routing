import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useSearchQuery } from "../app/providers/useSearchQuery";

export default function TopBar() {
  const { query, setQuery } = useSearchQuery();

  return (
    <div className="flex items-center gap-3">
      <Link to="/" className="text-lg font-bold whitespace-nowrap">
        News Viewer
      </Link>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="검색어 입력"
        className="flex-1 rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm outline-none
                   focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950"
      />

      <Link
        to="/bookmarks"
        className="rounded-md border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-50
                   dark:border-zinc-800 dark:hover:bg-zinc-900/40"
      >
        북마크
      </Link>

      <ThemeToggle />
    </div>
  );
}
