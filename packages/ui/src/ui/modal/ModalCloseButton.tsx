import { forwardRef } from "react";
import { IoIosClose } from "react-icons/io";
import { useModalContext } from "./Modal.js";
import { modalCloseButonStyle } from "./style.css.js";

const ModalCloseButton = () => {
  const modalContext = useModalContext();

  return <IoIosClose className={modalCloseButonStyle} onClick={modalContext.onCloseModal} />;
};

const _ModalCloseButton = forwardRef(ModalCloseButton);
export { _ModalCloseButton as ModalCloseButton };
