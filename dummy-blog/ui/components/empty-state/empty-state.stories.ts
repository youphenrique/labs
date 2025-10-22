import type { Meta, StoryObj } from "@storybook/vue3";
import EmptyState from "~/ui/components/empty-state/empty-state.vue";

const meta = {
  title: "Components/EmptyState",
  component: EmptyState,
} satisfies Meta<typeof EmptyState>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
