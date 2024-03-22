import { Icons } from "@/components/icons";

export type SidebarNavItem = {
  title: string
  href: string;
  icon: keyof typeof Icons
}

