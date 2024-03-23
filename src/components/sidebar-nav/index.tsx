import { cn } from "@/lib/utils";
import { SidebarNavItem } from "@/types";
import { Link, useNavigate } from "react-router-dom";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { YourWallet } from "./your-wallet";
import { ModeToggle } from "../mode-toggle";
import { useTheme } from "../theme-provider";

interface SidebarNavProps {
  items: SidebarNavItem[];
  pathname: string | null;
}

export function SidebarNav({ items, pathname }: SidebarNavProps) {
  const { theme } = useTheme();
  const navigate = useNavigate();

  function handleDisconnectWallet() {
    navigate("/sign-in");
  }

  return (
    <aside className="flex flex-col items-center min-h-screen max-w-[260px] w-full bg-background border-r py-8 justify-around fixed overflow-auto rounded-xl">
      <div className="flex w-full flex-col items-center justify-center gap-8 px-4">
        {theme === "dark" && (
          <img className="w-32 h-28" src="/logo-escrow-dark.png" />
        )}
         {theme === "light" && (
          <img className="w-32 h-28" src="/logo-escrow-light.png" />
        )}
        <Button className="w-full" onClick={() => navigate("/escrow")}>
          New Escrow
        </Button>
      </div>
      <Separator />
      <div className="flex flex-col items-center gap-6 w-full px-4 ">
        {items.map((item, index) => {
          const Icon = Icons[item.icon];
          return (
            <Link
              key={index}
              to={item.href}
              className={cn(
                "flex w-full items-center rounded-md p-4 gap-6 transition-colors"
              )}
            >
              <Icon
                className={cn("h-6 w-6", {
                  "text-primary": pathname === item.href,
                })}
              />
              <span
                className={cn({
                  "text-primary": pathname === item.href,
                })}
              >
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>
      <Separator />

      <div className="flex items-center justify-center w-full px-4">
        <YourWallet handleDisconnectWallet={handleDisconnectWallet} />
      </div>
      <ModeToggle />
    </aside>
  );
}
