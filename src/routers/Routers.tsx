import { createBrowserRouter, RouteObject } from "react-router";
import { BookSearchPage } from "../pages";
import { CerticosLayout } from "../components";
import { FavoriteBookPage } from "@/pages/FavoriteBookPage";

const routers: RouteObject[] = [
  {
    path: "/",
    element: <CerticosLayout />,
    children: [
      {
        index: true,
        element: <BookSearchPage />,
      },
      {
        path: "favorite",
        element: <FavoriteBookPage />,
      },
    ],
  },
];

export const Routers = createBrowserRouter(routers);
