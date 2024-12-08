import { assignInlineVars } from "@vanilla-extract/dynamic";
import clsx from "clsx";
import { forwardRef } from "react";
import { vars } from "../../theme/index.js";
import { tagColorVariant, tagStyle } from "./style.css.js";
import { TagProps } from "./types.js";

const Tag = (props: TagProps) => {
  const { children, className, color = "blue" } = props;

  const tagColor = vars.colors.$scale[color][400];

  return (
    <div
      className={clsx([className, tagStyle])}
      style={{
        ...assignInlineVars({
          [tagColorVariant]: tagColor,
        }),
      }}>
      {children}
    </div>
  );
};

const _Tag = forwardRef(Tag);
export { _Tag as Tag };
