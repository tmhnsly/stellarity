import type { Meta, StoryObj } from "@storybook/react";

import { LinkButton } from "./LinkButton";

const meta = {
  title: "Buttons/LinkButton",
  component: LinkButton,
  tags: ["autodocs"],
  argTypes: {
    children: {
      mapping: {
        Button: <span>Hover over</span>,
      },
    },
  },
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { to: "www.google.com" },
};

export const Border: Story = {
  args: { to: "www.google.com", kind: "border" },
};

export const Solid: Story = {
  args: { to: "www.google.com", kind: "solid" },
};
