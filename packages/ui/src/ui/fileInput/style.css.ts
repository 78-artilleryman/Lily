import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../theme/index.js";

export const fileInputHoverIconStyle = style({
  display: "none",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  pointerEvents: "none",
});

export const fileInputStyle = recipe({
  base: {
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: `2px solid ${vars.colors.$scale.slate[400]}`,
    [`&:hover .${fileInputHoverIconStyle}`]: {
      display: "block",
    },
  },
  variants: {
    size: {
      lg: {
        width: "120px",
        height: "120px",
        borderRadius: vars.box.radii.lg,
        "& svg": {
          width: "25px",
          height: "25px",
        },
      },
      md: {
        width: "80px",
        height: "80px",
        borderRadius: vars.box.radii.md,
        "& svg": {
          width: "20px",
          height: "20px",
        },
      },
      sm: {
        width: "60px",
        height: "60px",
        borderRadius: vars.box.radii.md,
        "& svg": {
          width: "15px",
          height: "15px",
        },
      },
    },
  },
});

export const selctFileInputStyle = style({
  border: "none",
});

export const imageStyle = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
});
