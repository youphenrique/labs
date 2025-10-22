import type { Meta, StoryObj } from "@storybook/vue3";
import IconButton from "./icon-button.vue";
import MenuIcon from "~/ui/icons/menu-icon.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: "Components/IconButton",
  component: IconButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { IconButton, MenuIcon },
    setup() {
      return { args };
    },
    template: `
      <IconButton v-bind='args'>
        <MenuIcon color='white' />
      </IconButton>
    `,
  }),
};

export const Small: Story = {
  ...Default,
  args: {
    size: "sm",
  },
};

export const Large: Story = {
  ...Default,
  args: {
    size: "lg",
  },
};

export const Ghost: Story = {
  render: (args) => ({
    components: { IconButton, MenuIcon },
    setup() {
      return { args };
    },
    template: `
      <IconButton v-bind='args'>
        <MenuIcon color="black" />
      </IconButton>
    `,
  }),
  args: {
    variant: "ghost",
  },
};
