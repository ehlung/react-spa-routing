import { useTheme } from "../app/providers/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-md border px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-zinc-800"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
