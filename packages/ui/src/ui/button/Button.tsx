import { assignInlineVars } from "@vanilla-extract/dynamic";
import { clsx } from "clsx";
import { forwardRef, Ref } from "react";
import { useButton } from "../../hooks/button/useButton.js";
import { vars } from "../../theme/index.js";
import {
  buttonStyle,
  enableColorVariant,
  hoverColorVariant,
  activeColorVariant,
  spinnerStyle,
  spanStyle,
} from "./style.css.js";
import { ButtonProps } from "./types.js";

const Button = (props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
  const { variant = "solid", size = "md", color = "gray", children, style, leftIcon, isLoading, className } = props;

  const { buttonProps } = useButton(props);

  const enableColor = vars.colors.$scale[color][500];
  const hoverColor = variant === "solid" ? vars.colors.$scale[color][600] : vars.colors.$scale[color][50];
  const activeColor = variant === "solid" ? vars.colors.$scale[color][700] : vars.colors.$scale[color][100];

  return (
    <button
      {...buttonProps}
      role="button"
      ref={ref}
      className={clsx([
        buttonStyle({
          size,
          variant,
        }),
        className,
      ])}
      style={{
        ...assignInlineVars({
          [enableColorVariant]: enableColor,
          [hoverColorVariant]: hoverColor,
          [activeColorVariant]: activeColor,
        }),
        ...style,
      }}>
      {isLoading && <div className={spinnerStyle({ size })} />}
      {leftIcon && <span className={spanStyle({ size })}>{leftIcon}</span>}
      {children}
    </button>
  );
};

const _Button = forwardRef(Button);
export { _Button as Button };
