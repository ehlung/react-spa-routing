import { loadJSON, saveJSON } from "../../../shared/lib/storage";

const KEY = "bookmarked_articles_v1";

export function getBookmarkedArticlesById() {
  // { [id]: article }
  return loadJSON(KEY, {});
}

export function setBookmarkedArticlesById(map) {
  saveJSON(KEY, map);
}
