import { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@yunbh/design-system/ui/switch";

//local
//import { Switch } from "../../../../../packages/ui/src/ui/switch/index.js";

const meta: Meta<typeof Switch> = {
  component: Switch,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const SwitchStory: Story = {
  render: () => <Switch size="md" initialState={false} onclick={() => 1} />,
};
