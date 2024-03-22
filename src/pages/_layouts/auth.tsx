import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <main className="container relative hidden min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20"></div>
      </div>
      <Outlet />
    </main>
  );
}
