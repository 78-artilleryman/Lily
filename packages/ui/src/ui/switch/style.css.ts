import { createVar } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const switchBgColor = createVar();

export const switchStyles = recipe({
  base: {
    margin: 0,
    padding: 0,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    gap: "0.25rem",
  },
  variants: {
    size: {
      lg: {
        width: "6.25rem",
        height: "2.5rem",
      },
      md: {
        width: "4.5rem",
        height: "2rem",
      },
      sm: {
        width: "4rem",
        height: "1.5rem",
      },
    },
    state: {
      off: {
        vars: {
          [switchBgColor]: "#e2e8f0",
        },
      },
      on: {
        vars: {
          [switchBgColor]: "#1e293b",
        },
      },
    },
  },
});

export const trackStyle = recipe({
  base: {
    width: "100%",
    height: "100%",
    borderRadius: "9999px",
    backgroundColor: switchBgColor,
    display: "flex",
    alignItems: "center",
    padding: "0.25rem 0.2rem",
    transition: "background-color 0.2s ease",
  },
});

export const thumbStyle = recipe({
  base: {
    borderRadius: "50%",
    backgroundColor: "#ffffff",
    transition: "transform 0.2s ease",
  },
  variants: {
    size: {
      lg: {
        width: "2.5rem",
        height: "2.5rem",
      },
      md: {
        width: "2rem",
        height: "2rem",
      },
      sm: {
        width: "1.5rem",
        height: "1.5rem",
        translateX: "10%",
      },
    },
  },
});
