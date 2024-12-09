import { slideDown, toastStyle } from "./style.css.js";
import { ToastPayload } from "./types.js";

export const Toast = (props: ToastPayload) => {
  const { message, type = "common", isExiting } = props;

  return <div className={isExiting ? slideDown : toastStyle({ type })}>{message}</div>;
};
