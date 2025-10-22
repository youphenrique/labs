import { initialize, mswLoader } from "msw-storybook-addon";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Initialize MSW
initialize();

import "../src/index.css";
import { queryClientConfig } from "../src/config/react-query";
import { Spinner } from "../src/ui/components/spinner/spinner";

/**
 * @typedef {Object} BaseDecoratorsArgs
 * @property {import('react-router-dom').InitialEntry[]} [initialEntries] - Optional array of initial entries for the router
 * @property {function(import('@storybook/react').StoryFn): import('react-router-dom').RouteObject[]} [routes] - Optional function that takes a StoryFn and returns an array of RouteObject
 */

/** @type { import('@storybook/react-webpack5').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // Provide the MSW addon loader globally
  loaders: [mswLoader],
  decorators: [
    (Story, context) => {
      /** @type {BaseDecoratorsArgs} */
      const contextArgs = context.args;
      const routes = contextArgs.routes?.(Story) ?? [
        {
          path: "/",
          element: <Story />,
        },
      ];
      const queryClient = new QueryClient(queryClientConfig);

      const router = createMemoryRouter(routes, {
        initialEntries: contextArgs.initialEntries ?? ["/"],
        initialIndex: 1,
      });

      return (
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} fallbackElement={<Spinner />} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      );
    },
  ],
};

export default preview;
