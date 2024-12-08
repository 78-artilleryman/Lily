import { PropsWithChildren } from "react";
import { vars } from "../../theme/index.js";

export type TagProps = PropsWithChildren<{
  color?: keyof typeof vars.colors.$scale;
  className?: string;
}>;
