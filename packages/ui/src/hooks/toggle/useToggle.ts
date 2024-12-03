import { useCallback, useState } from "react";
import { UseToggleReturn } from "./types.js";

export const useToggle = (isSelected = false): UseToggleReturn => {
  const [toggle, setToggle] = useState<boolean>(isSelected);

  const handleToggle = useCallback(() => {
    setToggle(prevState => !prevState);
  }, []);

  return {
    isSelected: toggle,
    setSelected: setToggle,
    toggle: handleToggle,
  };
};
