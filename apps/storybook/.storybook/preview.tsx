import "@yunbh/design-system/themes.css";
import "@yunbh/design-system/style.css";
import "./style.css";
import type { Preview } from "@storybook/react";
import React, { ComponentType } from "react";

// 전역 decorator 추가
const WithModalRoot = (Story: ComponentType) => {
  if (!document.getElementById("modal") || !document.getElementById("backdrop")) {
    const modalRoot = document.createElement("div");
    const modalBackdrop = document.createElement("div");
    modalRoot.setAttribute("id", "modal");
    modalBackdrop.setAttribute("id", "backdrop");
    document.body.appendChild(modalRoot);
    document.body.appendChild(modalBackdrop);
  }

  return <Story />;
};

/** @type { import('@storybook/react').Preview } */
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    rootAttributesTooltip: true,
    rootAttributes: [
      {
        root: "body",
        attribute: "class",
        defaultState: {
          name: "light",
          value: "theme-light",
        },
        states: [
          {
            name: "dark",
            value: "theme-dark",
          },
        ],
      },
    ],
  },
  decorators: [WithModalRoot],
};

const initTheme = () => {
  const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (isDarkTheme) {
    document.body.classList.add("theme-dark");
  }

  const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

  mediaQueryList.addEventListener("change", e => {
    if (e.matches) {
      document.body.classList.add("theme-dark");
    } else {
      document.body.classList.remove("theme-dark");
    }
  });
};

initTheme();

export default preview;
