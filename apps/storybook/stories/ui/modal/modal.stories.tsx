import { Meta, StoryObj } from "@storybook/react";
import { useToggle } from "@yunbh/design-system/hooks/toggle";
import { Button } from "@yunbh/design-system/ui/button";
import { Modal, ModalBackdrop, ModalCloseButton, ModalBoldText, ModalText } from "@yunbh/design-system/ui/modal";
import { Tag } from "@yunbh/design-system/ui/tag";

const meta: Meta<typeof Modal> = {
  component: Modal,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalComponents = () => {
  const { isSelected, setSelected, toggle } = useToggle();

  const modalValues = {
    onCloseModal: () => setSelected(false),
  };

  return (
    <>
      <Button onClick={toggle}>모달 오픈</Button>
      {isSelected && (
        <Modal value={modalValues}>
          <ModalBackdrop />
          <ModalCloseButton />
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <Tag color="red">참석 불가능</Tag>
            <Tag>신랑측</Tag>
            <Tag>식사가능</Tag>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <ModalBoldText>
              윤병현
              <span style={{ fontWeight: "400", fontSize: "14px" }}>님 외 4명</span>
            </ModalBoldText>
            <ModalText>010-1234-5678</ModalText>
          </div>
          <hr />
          <div>
            <ModalBoldText>전달사항</ModalBoldText>
            <ModalText>
              식사하고갈거니 맛있는거 준비많이해놔라식사하고갈거니 맛있는거 준비많이해놔라식사하고갈거니 맛있는거
              준비많이해놔라식사하고갈거니 맛있는거 준비많이해놔라
            </ModalText>
          </div>
        </Modal>
      )}
    </>
  );
};

export const ModalStory: Story = {
  render: () => <ModalComponents />,
};
