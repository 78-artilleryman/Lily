import { KeyboardEvent } from "react";
import { BaseButtonProps, OverloadedButtonFunction } from "./types.js";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useButton: OverloadedButtonFunction = (props: any): any => {
  const { elementType = "button", type = "button", isDisabled, isLoading, tabIndex, onKeyDown } = props;

  const disabled = isDisabled || isLoading;

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    onKeyDown?.(event);

    if (event.key === "Spacebar" || event.key === "32" || event.key === " ") {
      if (disabled) return;
      if (event.defaultPrevented) return;
      if (elementType === "button") return;

      event.preventDefault();
      event.currentTarget.click();

      return;
    }
    if (event.key === "Enter" || event.key === "13") {
      if (disabled) return;
      if (event.defaultPrevented) return;
      if (elementType === "input" && type !== "button") return;

      event.preventDefault();
      event.currentTarget.click();

      return;
    }
  };

  const baseProps = {
    ...props,
    "data-loading": isLoading,
    tabIndex: disabled ? undefined : (tabIndex ?? 0),
    onKeyDown: handleKeyDown,
  };

  let additionalProps = {};

  switch (elementType) {
    case "button": {
      additionalProps = {
        type: type ?? "button",
        disabled,
      };
      break;
    }
    case "a": {
      const { href, target, rel } = props as BaseButtonProps<"a">;

      additionalProps = {
        role: "button",
        href: disabled ? undefined : href,
        target: disabled ? undefined : target,
        rel: disabled ? undefined : rel,
        "area-disabled": isDisabled,
      };
      break;
    }
    case "input": {
      additionalProps = {
        role: "button",
        type: props.type,
        disabled,
        "area-disabled": undefined,
      };
      break;
    }
    default: {
      additionalProps = {
        role: "button",
        type: type ?? "button",
        "area-disabled": isDisabled,
      };
      break;
    }
  }

  const buttonProps = {
    ...baseProps,
    ...additionalProps,
  };

  return {
    buttonProps,
  };
};
