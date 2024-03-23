import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./components/ui/toaster";
import { TailwindIndicator } from "./components/tailwind-indicator";

export function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="wallet-theme">
      <RouterProvider router={router} />
      <Toaster />
      <TailwindIndicator />
    </ThemeProvider>
  );
}