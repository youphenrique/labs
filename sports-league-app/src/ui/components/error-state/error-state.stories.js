import { ErrorState } from "./error-state";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "components/ErrorState",
  component: ErrorState,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Primary = {
  args: {},
};
