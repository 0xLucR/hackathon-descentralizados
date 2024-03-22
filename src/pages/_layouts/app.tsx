import { SidebarNav } from "@/components/sidebar-nav";
import { sidebarNavConfig } from "@/config/sidebar-nav";
import { Outlet, useLocation } from "react-router-dom";

export function AppLayout() {
  const { pathname } = useLocation();
  return (
    <main className="min-h-screen">
      <SidebarNav items={sidebarNavConfig} pathname={pathname} />
      <Outlet />
    </main>
  );
}
