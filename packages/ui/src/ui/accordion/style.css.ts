import { createVar, style } from "@vanilla-extract/css";
import { vars } from "../../theme/index.js";

const resetStyle = style({
  margin: 0,
  padding: 0,
  border: 0,
  background: "none",
});

export const accordionStyle = style([resetStyle]);

export const accordionItemStyle = style([
  resetStyle,
  {
    width: "100%",
    borderBottom: `1px solid ${vars.colors.$scale.gray[300]}`,
  },
]);

export const accordionButtonStyle = style([
  resetStyle,
  {
    width: "100%",
    padding: "0.3rem 0.625rem",
    gap: "0.625rem",
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
]);

export const accordionArrowButtonStyle = style([
  resetStyle,
  {
    width: "16px",
    height: "16px",
    position: "absolute",
    top: "1.2rem",
    right: "0.625rem",
  },
]);

export const rotatedStyle = style({
  transform: "rotate(180deg)",
});

export const panelHeight = createVar();
export const accordionPanelStyle = style([
  resetStyle,
  {
    width: "100%",
    height: panelHeight,
    overflow: "hidden",
    transition: "height 0.3s ease",

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    "& > div[data-name='panel-inner']": {
      padding: "0.5rem 0.625rem 0.5rem",
    },
  },
]);
