import { Meta, StoryObj } from "@storybook/react";
import { Select } from "@yunbh/design-system/ui/select";

//local
//import { Select } from "../../../../../packages/ui/src/ui/select/Select.js";

const meta: Meta<typeof Select> = {
  component: Select,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const testData = [
  { id: "test", value: "리디바탕" },
  { id: "test", value: "이롭게바탕" },
  { id: "test", value: "둥근바람" },
  { id: "test", value: "노토산스AR" },
];

export const InputStory: Story = {
  render: () => <Select size="md" initialState={false} listData={testData} />,
};
