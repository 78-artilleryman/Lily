import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@yunbh/design-system/ui/button";
import { ToastProvider, useToast } from "@yunbh/design-system/ui/toast";

const meta: Meta<typeof ToastProvider> = {
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof ToastProvider>;

const Example = () => {
  const { toast } = useToast();

  return (
    <Button
      onClick={() =>
        toast({
          payload: {
            message: "Toast 메시지",
          },
        })
      }>
      Toast Button
    </Button>
  );
};

export const ToastStory: Story = {
  render: () => (
    <ToastProvider>
      <Example />
    </ToastProvider>
  ),
};
