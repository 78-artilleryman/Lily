import { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel } from "@yunbh/design-system/ui/accordion";

// build test
// import {
//   Accordion,
//   AccordionItem,
//   AccordionButton,
//   AccordionPanel,
// } from "../../../../../packages/ui/dist/ui/accordion/index.js";

// import {
//   Accordion,
//   AccordionItem,
//   AccordionButton,
//   AccordionPanel,
// } from "../../../../../packages/ui/src/ui/accordion/index.js";

interface AccordionTestStoryArgs {
  items: Array<{
    name: string;
    content: string;
  }>;
  defaultActiveItems: string[];
}

const meta: Meta<typeof Accordion> = {
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<typeof Accordion>;

export const AccordionStory: Story = {
  render: () => (
    <Accordion defaultActiveItems={["목록1"]} style={{ width: "500px" }}>
      <AccordionItem itemName="목록1">
        <AccordionButton>
          <h1 style={{ fontSize: "16px" }}>목록 1</h1>
        </AccordionButton>
        <AccordionPanel>
          <p style={{ fontSize: "14px" }}>내용입니다.</p>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem itemName="목록2">
        <AccordionButton>
          <h1 style={{ fontSize: "16px" }}>목록 2</h1>
        </AccordionButton>
        <AccordionPanel>
          <p style={{ fontSize: "14px" }}>
            내용입니다.
            <br />
            내용입니다.
          </p>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
};

export const AccordionTestStory: StoryObj<AccordionTestStoryArgs> = {
  args: {
    items: [
      {
        name: "목록1",
        content: "내용입니다.",
      },
      {
        name: "목록2",
        content: "내용입니다.\n내용입니다.",
      },
    ],
    defaultActiveItems: [],
  },
  render: ({ defaultActiveItems, items }) => (
    <Accordion defaultActiveItems={defaultActiveItems} style={{ width: "500px" }}>
      {items.map((item, index) => (
        <AccordionItem key={item.name} itemName={item.name}>
          <AccordionButton data-testid={`button-${index}`}>
            <h1 style={{ fontSize: "16px" }}> {item.name}</h1>
          </AccordionButton>
          <AccordionPanel data-testid={`panel-${index}`}>
            <p style={{ fontSize: "14px" }}>{item.content}</p>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  ),
};
