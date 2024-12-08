import { createVar, style } from "@vanilla-extract/css";
import { vars } from "../../theme/index.js";

export const tagColorVariant = createVar();

export const tagStyle = style({
  padding: "5px 10px",
  fontSize: vars.typography.fontSize[12],
  backgroundColor: tagColorVariant,
  borderRadius: "4px",
  color: "white",
});
