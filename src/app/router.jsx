import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import NewsListPage from "../pages/NewsListPage";
import BookmarksPage from "../pages/BookmarksPage";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <NewsListPage /> },
      { path: "/category/:category", element: <NewsListPage /> },
      { path: "/bookmarks", element: <BookmarksPage /> },
    ],
  },
]);
