import type { Meta, StoryObj } from "@storybook/react";
import FormControl from "./FormControl";

const meta: Meta<typeof FormControl> = {
  title: "UI/FormControl",
  component: FormControl,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof FormControl>;

export const Primary: Story = {
  args: {},
};
