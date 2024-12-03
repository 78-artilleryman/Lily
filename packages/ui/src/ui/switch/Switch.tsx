import clsx from "clsx";
import { forwardRef, Ref } from "react";
import { useToggle } from "../../hooks/toggle/useToggle.js";
import { switchStyles, trackStyle, thumbStyle } from "./style.css.js";
import { SwitchProps } from "./types.js";

const Switch = (props: SwitchProps, ref: Ref<HTMLDivElement>) => {
  const { size = "md", initialState, onclick } = props;

  const { isSelected, toggle } = useToggle(initialState);

  const toggleSwitch = () => {
    toggle();
    onclick();
  };

  const thumbTransform = isSelected
    ? size === "lg"
      ? "translateX(120%)"
      : size === "md"
        ? "translateX(95%)"
        : "translateX(130%)"
    : "translateX(10%)";

  return (
    <div
      role="button"
      className={clsx([
        switchStyles({
          size,
        }),
      ])}
      onClick={toggleSwitch}
      ref={ref}>
      <div
        className={clsx([trackStyle()])}
        style={{
          backgroundColor: isSelected ? "#1e293b" : "#e2e8f0",
        }}>
        <div
          className={clsx([thumbStyle({ size })])}
          style={{
            transform: thumbTransform,
          }}
        />
      </div>
    </div>
  );
};

const _Switch = forwardRef(Switch);
export { _Switch as Switch };
