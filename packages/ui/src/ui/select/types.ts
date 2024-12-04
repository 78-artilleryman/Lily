import { HtmlHTMLAttributes } from "react";

export type ListData = {
  id: string;
  value: string;
};

export type SelectProps = {
  initialState: boolean;
  size?: "lg" | "md" | "sm";
  listData: ListData[];
} & HtmlHTMLAttributes<HTMLDivElement>;
