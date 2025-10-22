import { expect, waitFor, within } from "storybook/test";

import { AppLayout } from "../layout";
import { SchedulePage } from "./page";
import { getAllMatchesHandlers } from "../../../api/mocks/all-matches.get.mock";
import { getApiVersionHandlers } from "../../../api/mocks/api-version.get.mock";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "pages/SchedulePage",
  component: SchedulePage,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    initialEntries: ["/schedule"],
    routes(Story) {
      return [
        {
          Component: AppLayout,
          children: [
            {
              path: "schedule",
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

    // Test that AppLayout components are correctly displayed
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

    const headingText = canvas.getByText(/League Schedule/i);
    await expect(headingText).toBeInTheDocument();

    // Test that the empty state is displayed
    const emptyState = canvas.getByText("No matches available");
    await expect(emptyState).toBeInTheDocument();

    // Verify that the table is not displayed when there's no data
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

    // Test that AppLayout components are correctly displayed
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

    const headingText = canvas.getByText(/League Schedule/i);
    await expect(headingText).toBeInTheDocument();

    // Test that the match table is displayed
    const table = canvas.getByRole("table");
    await expect(table).toBeInTheDocument();

    // Test table headers
    const headers = canvas.getAllByRole("columnheader");
    await expect(headers).toHaveLength(5);
    await expect(headers[0]).toHaveTextContent("Date/Time");
    await expect(headers[1]).toHaveTextContent("Stadium");
    await expect(headers[2]).toHaveTextContent("Home Team");
    await expect(headers[4]).toHaveTextContent("Away Team");

    // Test that match data is displayed
    const rows = canvas.getAllByRole("row");
    await expect(rows.length).toBeGreaterThan(1); // Header row + at least one data row

    // Test team flags are displayed
    const teamFlags = canvas.getAllByRole("img");
    await expect(teamFlags.length).toBeGreaterThan(1); // Logo + team flags
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

    const errorStateTitle = await waitFor(() => canvas.getByText("Error fetching matches"));
    // Test that the error state is displayed
    await expect(errorStateTitle).toBeInTheDocument();

    const errorStateMessage = canvas.getByText(
      "The matches listing failed. Please try again in a few minutes.",
    );
    await expect(errorStateMessage).toBeInTheDocument();

    // Verify that the table is not displayed when there's an error
    const table = canvas.queryByRole("table");
    await expect(table).not.toBeInTheDocument();
  },
};
