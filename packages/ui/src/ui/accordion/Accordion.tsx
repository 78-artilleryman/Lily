import { clsx } from "clsx";
import { forwardRef, useState } from "react";
import AccordionContext from "./AccordionContext.js";
import { accordionStyle } from "./style.css.js";
import { AccordionProps } from "./types.js";

function Accordion(props: AccordionProps, ref: React.Ref<HTMLDivElement>) {
  const { defaultActiveItems = [], children, className, ...rest } = props;

  const [activeItems, setActiveItems] = useState<string[]>(defaultActiveItems);

  const handleSetActiveItem = (item: string) => {
    if (activeItems.includes(item)) {
      setActiveItems(activeItems.filter(activeItem => activeItem !== item));
    } else {
      setActiveItems([...activeItems, item]);
    }
  };

  return (
    <AccordionContext.Provider
      value={{
        activeItems,
        setActiveItem: handleSetActiveItem,
      }}>
      <div {...rest} ref={ref} className={clsx([accordionStyle, className])}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

const _Accordion = forwardRef(Accordion);
export { _Accordion as Accordion };
