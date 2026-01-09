import { Outlet } from "react-router-dom";
import TopBar from "../../components/TopBar";
import CategoryTabs from "../../features/news/components/CategoryTabs";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="max-w-3xl mx-auto p-6">
        <TopBar />
        <CategoryTabs />
        <div className="mt-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
