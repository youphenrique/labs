import { QueryClient } from "@tanstack/react-query";

/** @type {import('@tanstack/react-query').QueryClientConfig} */
export const queryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
};

export const queryClient = new QueryClient(queryClientConfig);
