import { expect, waitFor, within } from "storybook/test";

import { AppLayout } from "../layout";
import { LeaderboardPage } from "./page";
import { getAllMatchesHandlers } from "../../../api/mocks/all-matches.get.mock";
import { getApiVersionHandlers } from "../../../api/mocks/api-version.get.mock";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "pages/LeaderboardPage",
  component: LeaderboardPage,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    initialEntries: ["/leaderboard"],
    routes(Story) {
      return [
        {
          Component: AppLayout,
          children: [
            {
              path: "leaderboard",
              Component: Story,
            },
          ],
        },
      ];
    },
  },
};

export const Empty = {
  parameters: {
    msw: {
      handlers: [getApiVersionHandlers.data(), getAllMatchesHandlers.empty()],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Layout checks
    const header = canvas.getByRole("banner");
    await expect(header).toBeInTheDocument();

    const logo = canvas.getByAltText("Logo");
    await expect(logo).toBeInTheDocument();

    const navigation = canvas.getByRole("navigation");
    await expect(navigation).toBeInTheDocument();

    const scheduleLink = canvas.getByText("Schedule");
    await expect(scheduleLink).toBeInTheDocument();

    const leaderboardLink = canvas.getByText("Leaderboard");
    await expect(leaderboardLink).toBeInTheDocument();

    const footer = canvas.getByRole("contentinfo");
    await expect(footer).toBeInTheDocument();

    const apiVersionText = await waitFor(() => canvas.getByText(/API Version: 1\.0/i));
    await expect(apiVersionText).toBeInTheDocument();

    const headingText = canvas.getByText(/League Standings/i);
    await expect(headingText).toBeInTheDocument();

    // Empty state
    const emptyState = canvas.getByText("No standings available");
    await expect(emptyState).toBeInTheDocument();

    const table = canvas.queryByRole("table");
    await expect(table).not.toBeInTheDocument();
  },
};

export const Default = {
  parameters: {
    msw: {
      handlers: [getApiVersionHandlers.data(), getAllMatchesHandlers.data()],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const headingText = canvas.getByText(/League Standings/i);
    await expect(headingText).toBeInTheDocument();

    const table = await waitFor(() => canvas.getByRole("table"));
    await expect(table).toBeInTheDocument();

    const headers = canvas.getAllByRole("columnheader");
    await expect(headers).toHaveLength(5);
    await expect(headers[0]).toHaveTextContent("Team Name");
    await expect(headers[1]).toHaveTextContent("MP");
    await expect(headers[2]).toHaveTextContent("GF");
    await expect(headers[3]).toHaveTextContent("GA");
    await expect(headers[4]).toHaveTextContent("Points");

    const rows = canvas.getAllByRole("row");
    await expect(rows.length).toBeGreaterThan(1);

    const images = canvas.getAllByRole("img");
    await expect(images.length).toBeGreaterThan(1);
  },
};

export const WithError = {
  parameters: {
    msw: {
      handlers: [getApiVersionHandlers.data(), getAllMatchesHandlers.error()],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const errorStateTitle = await waitFor(() => canvas.getByText("Error fetching leaderboard"));
    await expect(errorStateTitle).toBeInTheDocument();

    const errorStateMessage = canvas.getByText(
      "The leaderboard listing failed. Please try again in a few minutes.",
    );
    await expect(errorStateMessage).toBeInTheDocument();

    const table = canvas.queryByRole("table");
    await expect(table).not.toBeInTheDocument();
  },
};
