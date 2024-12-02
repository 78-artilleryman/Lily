import { clsx } from "clsx";
import { Children, cloneElement, forwardRef, isValidElement, Ref } from "react";
import { accordionItemStyle } from "./style.css.js";
import { AccordionItemProps } from "./types.js";

function AccordionItem(props: AccordionItemProps, ref: Ref<HTMLDivElement>) {
  const { itemName, children, className, ...rest } = props;

  const childrenWithProps = Children.toArray(children);

  const accordionItemChildren = childrenWithProps.map(child => {
    if (isValidElement(child)) {
      return cloneElement(child, { ...child.props, itemName });
    }

    return null;
  });

  return (
    <div {...rest} ref={ref} className={clsx([accordionItemStyle, className])}>
      {accordionItemChildren}
    </div>
  );
}

const _AccordionItem = forwardRef(AccordionItem);
export { _AccordionItem as AccordionItem };
