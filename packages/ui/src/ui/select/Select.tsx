import clsx from "clsx";
import { forwardRef, Ref, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { useToggle } from "../../hooks/toggle/useToggle.js";
import {
  animationBase,
  ArrowButtonStyle,
  iconContainerStyle,
  rotatedStyle,
  selectBackground,
  selectItemStyles,
  selectListStyles,
  selectStyles,
} from "./style.css.js";
import { ListData, SelectProps } from "./types.js";

const Select = (props: SelectProps, ref: Ref<HTMLDivElement>) => {
  const { size = "md", initialState, listData } = props;

  const [selectedItem, setSelectiedItem] = useState<ListData>();
  const { isSelected, toggle } = useToggle(initialState);

  const handleSelectItem = (item: ListData) => {
    setSelectiedItem(item);
  };

  return (
    <div role="listbox" ref={ref} className={clsx([selectStyles({ size })])} onClick={toggle}>
      <p>{selectedItem?.value}</p>
      <IoIosArrowDown className={clsx([ArrowButtonStyle({ size }), { [rotatedStyle]: isSelected }])} />
      {isSelected && (
        <ul className={clsx([selectListStyles({ size }), animationBase])}>
          {listData.map(selectItem => (
            <li
              className={clsx([
                selectItemStyles({ size }),

                { [selectBackground({ size })]: selectedItem?.value === selectItem.value },
              ])}
              key={selectItem.id}
              onClick={() => handleSelectItem(selectItem)}>
              <span className={clsx([iconContainerStyle])}>
                {selectedItem?.value === selectItem.value && <FaCheck />}
              </span>
              {selectItem.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const _Select = forwardRef(Select);
export { _Select as Select };
