import { useCallback, useEffect, useState } from "react";
import { getReadIds, setReadIds } from "../storage/readStorage";

export function useReadArticles() {
  const [readIds, setReadIdsState] = useState(() => new Set());

  useEffect(() => {
    setReadIdsState(getReadIds());
  }, []);

  const isRead = useCallback((id) => readIds.has(id), [readIds]);

  const markRead = useCallback((id) => {
    setReadIdsState((prev) => {
      const next = new Set(prev);
      next.add(id);
      setReadIds(next);
      return next;
    });
  }, []);

  return { isRead, markRead };
}
