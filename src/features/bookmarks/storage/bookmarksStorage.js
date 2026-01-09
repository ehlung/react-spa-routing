import { loadJSON, saveJSON } from "../../../shared/lib/storage";

const KEY = "bookmarked_articles_v1";

export function getBookmarksMap() {
  // { [id]: article }
  return loadJSON(KEY, {});
}

export function setBookmarksMap(map) {
  saveJSON(KEY, map);
}
