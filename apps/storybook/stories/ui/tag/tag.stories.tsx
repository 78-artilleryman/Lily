import { Meta, StoryObj } from "@storybook/react";

//local
import { Tag } from "../../../../../packages/ui/src/ui/tag/Tag.js";

const meta: Meta<typeof Tag> = {
  component: Tag,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const InputStory: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Tag>신랑측</Tag>
      <Tag color="red">신부측</Tag>
    </div>
  ),
};
