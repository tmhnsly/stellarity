import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip } from "./Tooltip";
import { Button } from "../button/Button";

const meta = {
  title: "Tools/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    children: {
      mapping: {
        Button: (
          <Button theme="info" mode="border">
            Hover over
          </Button>
        ),
      },
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { content: "Test tooltip", children: "Button" },
};
