import ReactDOM from "react-dom/client";
import "./index.css";
import { Routers } from "./routers/index.ts";
import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router={Routers} />
  </Suspense>
);
