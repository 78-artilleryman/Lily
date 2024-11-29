import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@yunbh/design-system/button";
import React from "react";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {},
};

export default meta;

export type Story = StoryObj<typeof Button>;

export const ButtonTestStory: Story = {
  render: () => {
    return <Button appName="test">Button</Button>;
  },
};
