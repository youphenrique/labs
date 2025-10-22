import { createBrowserRouter, redirect } from "react-router-dom";

import App from "../App";
import { AppLayout } from "./app/layout";
import { NotFoundPage } from "./app/not-found";
import { getAuthToken } from "../utils/helpers";
import { AUTH_TOKEN } from "../utils/constants";
import { setStorageItem } from "../utils/storage";
import { SchedulePage } from "./app/schedule/page";
import { LeaderboardPage } from "./app/leaderboard/page";
import { getAccessToken } from "../api/requests/access-token.get";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    ErrorBoundary: NotFoundPage,
    loader({ request }) {
      const url = new URL(request.url);

      if (url.pathname === "/") {
        throw redirect("/schedule");
      }

      return null;
    },
    children: [
      {
        Component: AppLayout,
        async loader() {
          const token = getAuthToken();

          if (token === null) {
            const data = await getAccessToken();
            setStorageItem(AUTH_TOKEN, data.access_token);
          }

          return null;
        },
        children: [
          {
            path: "schedule",
            Component: SchedulePage,
          },
          {
            path: "leaderboard",
            Component: LeaderboardPage,
          },
        ],
      },
    ],
  },
]);
