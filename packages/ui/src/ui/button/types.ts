import { vars } from "../../theme/index.js";

export type ButtonProps = {
  color?: keyof typeof vars.colors.$scale;
  isDisabled?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "ghost";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
