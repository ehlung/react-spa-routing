import { useContext } from "react";
import { SearchContext } from "./searchContext";

export function useSearchQuery() {
  const ctx = useContext(SearchContext);
  if (!ctx)
    throw new Error("useSearchQuery must be used within SearchProvider");
  return ctx;
}
