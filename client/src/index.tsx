import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./tailwind.generated.css";
import { GlobalStyles } from "twin.macro";
import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Router from "./routes/Routes";
import { AxiosError } from "axios";
import { Storage } from "./api/storage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      staleTime: 1000 * 60,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      if (error !== undefined && error instanceof AxiosError) {
        console.log(Object.values(error?.response?.data)[0]);
      }
    },
  }),
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
