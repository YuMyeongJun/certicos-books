import ReactDOM from "react-dom/client";
import "./index.css";
import { Routers } from "./routers/index.ts";
import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/modules";
import { HttpProvider } from "@/hooks/providers";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <HttpProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={Routers} />
      </Suspense>
    </HttpProvider>
  </QueryClientProvider>
);
