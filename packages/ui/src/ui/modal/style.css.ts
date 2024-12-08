import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../theme/index.js";

export const modalStyle = recipe({
  base: {
    position: "fixed",
    left: "50%",
    top: "50%",
    zIndex: 50,
    width: "400px",
    transform: "translateX(-50%) translateY(-50%)",
    backgroundColor: "#F9FAFB",
    padding: "2rem 2rem",
    borderRadius: "1rem",
  },
});

export const modalBackdropStyle = style({
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  position: "fixed",
  left: 0,
  top: 0,
  zIndex: 49,
  height: "100vh",
  width: "100%",
});

export const modalCloseButonStyle = style({
  position: "absolute",
  top: "1.8rem",
  right: "1.5rem",
  cursor: "pointer",
  width: "2rem",
  height: "2rem",
});

export const modalBoldTextStyle = style({
  fontSize: vars.typography.fontSize[20],
  fontWeight: vars.typography.fontWeight[600],
});

export const modalTextStyle = style({
  fontSize: vars.typography.fontSize[16],
  fontWeight: vars.typography.fontWeight[300],
});
