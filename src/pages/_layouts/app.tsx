import { SidebarNav } from "@/components/sidebar-nav";
import { sidebarNavConfig } from "@/config/sidebar-nav";
import { Outlet, useLocation } from "react-router-dom";

export function AppLayout() {
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen">
      <SidebarNav items={sidebarNavConfig} pathname={pathname} />

      <main className="ml-[260px] p-4">
        <div className="bg-secondary min-h-[calc(100vh-32px)] rounded-xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
