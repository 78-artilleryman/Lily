import { style } from "@vanilla-extract/css";

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
  top: "40px",
  right: "40px",
});
