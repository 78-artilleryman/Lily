import { clsx } from "clsx";
import { forwardRef, MouseEvent, Ref, useCallback, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useButton } from "../../hooks/button/useButton.js";
import { useAccordionContext } from "./AccordionContext.js";
import { accordionButtonStyle, accordionArrowButtonStyle, rotatedStyle } from "./style.css.js";
import { AccordionButtonProps } from "./types.js";

function AccordionButton(props: AccordionButtonProps, ref: Ref<HTMLButtonElement>) {
  const { className, itemName = "", onClick, children, ...rest } = props;
  const { setActiveItem } = useAccordionContext();

  const [isActive, setIsActive] = useState(false);

  const handleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      setActiveItem(itemName);
      onClick?.(event);
      setIsActive(prev => !prev);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [itemName, setActiveItem]
  );

  const { buttonProps } = useButton({
    ...rest,
    onClick: handleClick,
    elementType: "button",
  });

  return (
    <button {...buttonProps} ref={ref} className={clsx([accordionButtonStyle, className])}>
      {children}
      <IoIosArrowDown className={clsx(accordionArrowButtonStyle, { [rotatedStyle]: isActive })} />
    </button>
  );
}

const _AccordionButton = forwardRef(AccordionButton);
export { _AccordionButton as AccordionButton };
