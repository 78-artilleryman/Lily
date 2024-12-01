import { useToggle } from "../toggle/useToggle.js";
import { OverloadedToggleButtonFunction } from "./types.js";
import { useButton } from "./useButton.js";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useToggleButton: OverloadedToggleButtonFunction = (props: any, isSelected?: boolean): any => {
  const { isSelected: _isSelected, toggle } = useToggle({
    isSelected,
  });

  const handleClick = (event: React.MouseEvent) => {
    toggle();
    props?.onClick?.(event);
  };

  const { buttonProps } = useButton({
    ...props,
    onClick: handleClick,
  });

  return {
    buttonProps,
    isSelected: _isSelected,
  };
};
