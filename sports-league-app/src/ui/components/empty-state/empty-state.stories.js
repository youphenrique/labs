import { EmptyState } from "./empty-state";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "components/EmptyState",
  component: EmptyState,
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
