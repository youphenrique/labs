import { expect, waitFor, within } from "storybook/test";

import { NotFoundPage } from "./not-found";
import { getApiVersionHandlers } from "../../api/mocks/api-version.get.mock";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "pages/NotFoundPage",
  component: NotFoundPage,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
};

// More on component testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Default = {
  parameters: {
    msw: {
      handlers: [getApiVersionHandlers.data()],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Test that the 404-error image is present
    const errorImage = canvas.getByAltText(/404 error/i);
    await expect(errorImage).toBeInTheDocument();

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
  },
};

export const WithApiVersionError = {
  parameters: {
    msw: {
      handlers: [getApiVersionHandlers.error()],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const errorImage = canvas.getByAltText(/404 error/i);
    await expect(errorImage).toBeInTheDocument();

    const apiVersionText = await waitFor(() => canvas.getByText(/API Version: Unknown/i));
    await expect(apiVersionText).toBeInTheDocument();
  },
};
