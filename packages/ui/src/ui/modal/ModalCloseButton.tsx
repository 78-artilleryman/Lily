import { forwardRef } from "react";
import { IoIosClose } from "react-icons/io";
import { useModalContext } from "./Modal.js";
import { modalCloseButonStyle } from "./style.css.js";

const ModalCloseButton = () => {
  const modalContext = useModalContext();

  return (
    <button onClick={modalContext.onCloseModal} className={modalCloseButonStyle}>
      <IoIosClose width={24} height={24} />
    </button>
  );
};

const _ModalCloseButton = forwardRef(ModalCloseButton);
export { _ModalCloseButton as ModalCloseButton };
