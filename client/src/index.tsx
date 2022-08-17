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
import { Navigate, useNavigate } from "react-router-dom";

const useParams = new URLSearchParams();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      staleTime: Infinity,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      if (error !== undefined && error instanceof AxiosError) {
        console.log(Object.values(error?.response?.data)[0]);
        useParams.delete("id");
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
