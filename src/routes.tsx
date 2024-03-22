import { createBrowserRouter } from "react-router-dom";

import { SignIn } from "./pages/auth/sign-in";
import { Escrow } from "./pages/app/escrow";
import { NotFound } from "./pages/404";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { Dashboard } from "./pages/app/dashboard";
import { Assets } from "./pages/app/assets";
import { History } from "./pages/app/history";
import { AddressBook } from "./pages/app/address-book";
import { Backup } from "./pages/app/backup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/escrow",
        element: <Escrow />,
      },
      {
        path: "/assets",
        element: <Assets />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/address-book",
        element: <AddressBook />,
      },
      {
        path: "/backup",
        element: <Backup />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
]);
