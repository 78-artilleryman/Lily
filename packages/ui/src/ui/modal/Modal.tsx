import { createContext, forwardRef, useContext } from "react";
import { createPortal } from "react-dom";
import { ModalContextStates, ModalContextValues } from "./types.js";

const initialModalContextState = {
  isLoading: false,
  onCloseModal: () => {},
};

const ModalContext = createContext<ModalContextStates>(initialModalContextState);

export function useModalContext() {
  const modalContext = useContext(ModalContext);
  if (!modalContext) throw new Error("Modal Context에서 사용해주세요");
  return modalContext;
}

const Modal = (props: ModalContextValues) => {
  const modalElement = document.querySelector("#modal")!;

  const { children, value, className } = props;
  return createPortal(
    <ModalContext.Provider value={value}>
      <div className={className}>{children}</div>
    </ModalContext.Provider>,
    modalElement
  );
};

const _Modal = forwardRef(Modal);
export { _Modal as Modal };
