import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./tailwind.generated.css";
import { GlobalStyles } from "twin.macro";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Router from "./page/Routes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      staleTime: 1000 * 60,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <Router />
    </QueryClientProvider>
  </React.StrictMode>
);
