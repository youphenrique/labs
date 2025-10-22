import type { Meta, StoryObj } from "@storybook/vue3";
import Navigation from "~/ui/components/navigation/navigation.vue";

const meta = {
  title: "Components/Navigation",
  component: Navigation,
} satisfies Meta<typeof Navigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
