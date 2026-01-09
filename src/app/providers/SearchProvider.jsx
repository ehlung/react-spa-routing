import { useMemo, useState } from "react";
import { SearchContext } from "./searchContext";

export function SearchProvider({ children }) {
  const [query, setQuery] = useState("");

  const value = useMemo(() => ({ query, setQuery }), [query]);

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}
