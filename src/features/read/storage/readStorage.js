import { loadJSON, saveJSON } from "../../../shared/lib/storage";

const KEY = "read_article_ids_v1";

export function getReadIds() {
  return new Set(loadJSON(KEY, []));
}

export function setReadIds(set) {
  saveJSON(KEY, Array.from(set));
}
