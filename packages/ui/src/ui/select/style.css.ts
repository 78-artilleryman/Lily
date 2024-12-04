import { keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../theme/index.js";

export const selectStyles = recipe({
  base: {
    margin: 0,
    padding: 0,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    border: `1.5px solid ${vars.colors.$scale.slate[400]}`,
    position: "relative",
  },
  variants: {
    size: {
      lg: {
        width: "150px",
        height: "40px",
        borderRadius: "8px",
        padding: "3px 12px",
        fontSize: "14px",
      },
      md: {
        width: "125px",
        height: "30px",
        borderRadius: "6px",
        padding: "3px 12px",
        fontSize: "12px",
      },
      sm: {
        width: "100px",
        height: "30px",
        padding: "2px 8px",
        borderRadius: "4px",
        fontSize: "10px",
      },
    },
  },
});

const slideDown = keyframes({
  from: {
    transform: "scale(0.95) translateY(-10px)",
    opacity: 0,
  },
  to: {
    transform: "scale(1) translateY(0)",
    opacity: 1,
  },
});

export const animationBase = style({
  animation: `${slideDown} 0.1s ease-out`,
});

export const selectListStyles = recipe({
  base: {
    listStyleType: "none",
    border: `2px solid ${vars.colors.$scale.slate[100]}`,
    color: vars.colors.$scale.slate[700],
    background: "#fff",
    position: "absolute",
    height: "auto",
    left: "-2px",
    selectors: {
      [`&.${animationBase}`]: {},
    },
  },
  variants: {
    size: {
      lg: {
        width: "150px",
        padding: "8px 12px",
        borderRadius: "8px",
        top: "calc(100% - 10px )",
      },
      md: {
        width: "125px",
        padding: "5px 12px",
        top: "calc(100% - 5px )",
        borderRadius: "6px",
      },
      sm: {
        width: "100px",
        padding: "5px 8px",
        borderRadius: "4px",
        top: "calc(100% - 5px )",
      },
    },
  },
});

export const selectItemStyles = recipe({
  base: {
    margin: 0,
    padding: 0,
    display: "flex",
    alignItems: "center",
    borderRadius: "6px",
    selectors: {
      "&:hover": {
        backgroundColor: vars.colors.$scale.slate[100],
      },
    },
  },

  variants: {
    size: {
      lg: {
        lineHeight: "14px",
        padding: "10px 8px 10px 12px",
        fontSize: "14px",
        gap: "0.625rem",
        selectors: {
          "&:hover": {
            borderRadius: "6px",
          },
        },
      },
      md: {
        padding: "8px 8px 8px 12px",
        fontSize: "12px",
        lineHeight: "12px",
        gap: "0.625rem",
        selectors: {
          "&:hover": {
            borderRadius: "6px",
          },
        },
      },
      sm: {
        padding: "6px 8px 6px 8px",
        fontSize: "10px",
        lineHeight: "10px",
        gap: "0.4rem",
        selectors: {
          "&:hover": {
            borderRadius: "4px",
          },
        },
      },
    },
  },
});

export const ArrowButtonStyle = recipe({
  base: {
    margin: 0,
    padding: 0,
    border: 0,
    background: "none",
    position: "absolute",
  },
  variants: {
    size: {
      lg: {
        width: "18px",
        height: "18px",
        borderRadius: "8px",
        top: "0.8rem",
        right: "0.5rem",
      },
      md: {
        width: "16px",
        height: "16px",
        top: "0.625rem",
        right: "0.5rem",
      },
      sm: {
        width: "14px",
        height: "14px",
        borderRadius: "4px",
        top: "0.625rem",
        right: "0.5rem",
      },
    },
  },
});

export const rotatedStyle = style({
  transform: "rotate(180deg)",
});

export const selectBackground = recipe({
  base: {
    backgroundColor: vars.colors.$scale.slate[100],
  },
  variants: {
    size: {
      lg: {
        borderRadius: "8px",
      },
      md: {
        borderRadius: "6px",
      },
      sm: {
        borderRadius: "4px",
      },
    },
  },
});

export const iconContainerStyle = style({
  display: "inline-block",
  width: "16px",
  height: "16px",
  textAlign: "center",
  lineHeight: "16px",
});
