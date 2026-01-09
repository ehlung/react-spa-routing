import { NavLink } from "react-router-dom";

const CATEGORIES = [
  { key: "general", label: "All" },
  { key: "business", label: "Business" },
  { key: "entertainment", label: "Entertainment" },
  { key: "health", label: "Health" },
  { key: "science", label: "Science" },
  { key: "sports", label: "Sports" },
  { key: "technology", label: "Technology" },
];

export default function CategoryTabs() {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {CATEGORIES.map((c) => (
        <NavLink
          key={c.key}
          to={c.key === "general" ? "/" : `/category/${c.key}`}
          className={({ isActive }) =>
            [
              "rounded-full border px-3 py-1 text-sm transition",
              "border-zinc-200 hover:bg-zinc-50",
              "dark:border-zinc-800 dark:hover:bg-zinc-900/40",
              isActive
                ? "bg-zinc-900 text-white border-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 dark:border-zinc-100"
                : "",
            ].join(" ")
          }
          end={c.key === "general"} // "/" 활성 처리 정확히
        >
          {c.label}
        </NavLink>
      ))}
    </div>
  );
}
