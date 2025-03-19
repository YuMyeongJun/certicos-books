import { createBrowserRouter, RouteObject } from "react-router";
import { BookSearchPage } from "../pages";
import { CerticosLayout } from "../components";

const routers: RouteObject[] = [
  {
    path: "/",
    element: <CerticosLayout />,
    children: [
      {
        index: true,
        element: <BookSearchPage />,
      },
    ],
  },
];

export const Routers = createBrowserRouter(routers);
