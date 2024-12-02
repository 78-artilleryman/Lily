import type { Meta, StoryObj } from "@storybook/react";

// development
import { Button } from "@yunbh/design-system/ui/button";

// build test
//import { Button } from "../../../../../packages/ui/dist/ui/button/index.js";

// dev
// import { Button } from "../../../packages/ui/dist/ui/button/index.js";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export default meta;

export type Story = StoryObj<typeof Button>;

export const ButtonTestStory: Story = {
  render: () => {
    return (
      <Button size="md" color="gray" variant="solid">
        Button
      </Button>
    );
  },
};
