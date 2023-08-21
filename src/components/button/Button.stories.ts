import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "Buttons/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Default button" },
};

export const Border: Story = {
  args: { children: "Default button", kind: "border" },
};

export const Solid: Story = {
  args: { children: "Default button", kind: "solid" },
};
