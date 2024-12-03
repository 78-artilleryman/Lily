import { assignInlineVars } from "@vanilla-extract/dynamic";
import { clsx } from "clsx";
import { forwardRef, Ref } from "react";
import { useInput } from "../../hooks/input/index.js";
import { vars } from "../../theme/index.js";
import { colorVariant, errorBorderColorVariant, focusBorderColorVariant, inputStyle } from "./style.css.js";
import { InputProps } from "./types.js";

function Input(props: InputProps, ref: Ref<HTMLInputElement>) {
  const {
    color = "slate",
    size = "lg",
    variant = "outline",
    errorBorderColor = "#ef4444",
    focusBorderColor = "#3b82f6",
    className,
    style,
    ...rest
  } = props;

  const { inputProps } = useInput(rest);

  return (
    <input
      {...inputProps}
      ref={ref}
      className={clsx([
        inputStyle({
          size,
          variant,
        }),
        className,
      ])}
      style={{
        ...assignInlineVars({
          [colorVariant]: vars.colors.$scale[color][900],
          [errorBorderColorVariant]: errorBorderColor,
          [focusBorderColorVariant]: focusBorderColor,
        }),
        ...style,
      }}
    />
  );
}

const _Input = forwardRef(Input);

_Input.displayName = "Input";

export { _Input as Input };
