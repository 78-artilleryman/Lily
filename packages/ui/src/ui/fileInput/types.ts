import { InputHTMLAttributes } from "react";

export type FileInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  size?: "lg" | "md" | "sm";
  upload: () => void;
};
