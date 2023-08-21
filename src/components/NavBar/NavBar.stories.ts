import type { Meta, StoryObj } from "@storybook/react";

import { NavBar } from "./NavBar";

const meta = {
  title: "App Layout/Nav Bar",
  component: NavBar,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
