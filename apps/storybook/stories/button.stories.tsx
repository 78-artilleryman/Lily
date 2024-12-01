import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../../packages/ui/dist/ui/button/Button.js";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {},
};

export default meta;

export type Story = StoryObj<typeof Button>;

export const ButtonTestStory: Story = {
  render: () => {
    return <Button>Button</Button>;
  },
};
