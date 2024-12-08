import { forwardRef } from "react";
import { createPortal } from "react-dom";
import { useModalContext } from "./Modal.js";
import { modalBackdropStyle } from "./style.css.js";

const ModalBackdrop = () => {
  const modalContext = useModalContext();
  const backdropElement = document.querySelector("#backdrop")!;
  return createPortal(<div className={modalBackdropStyle} onClick={modalContext.onCloseModal} />, backdropElement);
};

const _ModalBackdrop = forwardRef(ModalBackdrop);
export { _ModalBackdrop as _ModalBackdrop };
