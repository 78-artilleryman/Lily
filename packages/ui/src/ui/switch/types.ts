import { ButtonHTMLAttributes } from "react";

export type SwitchProps = {
  initialState: boolean;
  size?: "lg" | "md" | "sm";
  onclick: () => void;
} & ButtonHTMLAttributes<HTMLDivElement>;
