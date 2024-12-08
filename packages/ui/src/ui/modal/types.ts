import { FormEvent, PropsWithChildren, ReactNode } from "react";

export type ModalContextStates = {
  outlineButtonTitle?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  onCloseModal: () => void;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
};

export type ModalContextValues = PropsWithChildren<{
  value: ModalContextStates;
  className?: string;
}>;

export type ModalTextProps = {
  children: ReactNode;
  className?: string;
};
