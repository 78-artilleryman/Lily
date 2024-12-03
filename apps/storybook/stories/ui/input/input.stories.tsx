import { Meta, StoryObj } from "@storybook/react";
import { Input } from "@yunbh/design-system/ui/input";

//local
//import { Input } from "../../../../../packages/ui/src/ui/input/index.js";

const meta: Meta<typeof Input> = {
  component: Input,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const InputStory: Story = {
  render: () => <Input size="md" placeholder="placeholder" variant="outline" />,
};

export const InputVariantFilledStory = {
  render: () => <Input size="md" variant="filled" placeholder="placeholder" />,
};

export const InputFocusVisibleState = {
  render: () => <Input size="md" />,
  parameters: {
    pseudo: { focusVisible: true },
  },
};

export const InputErrorState = {
  render: () => <Input size="md" isInvalid={true} />,
};
