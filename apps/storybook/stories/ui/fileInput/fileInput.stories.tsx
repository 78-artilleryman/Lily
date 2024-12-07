import { Meta, StoryObj } from "@storybook/react";
import { FileInput } from "@yunbh/design-system/ui/fileInput";

//local
//import { FileInput } from "../../../../../packages/ui/src/ui/fileInput/FileInput.js";

const meta: Meta<typeof FileInput> = {
  component: FileInput,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof FileInput>;

export const InputStory: Story = {
  render: () => <FileInput size="md" upload={() => console.log("저장소에 업로드")} />,
};
