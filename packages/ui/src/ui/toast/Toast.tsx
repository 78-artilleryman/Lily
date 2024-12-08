import { slideDown, toastStyle } from "./style.css.js";
import { ToastPayload } from "./types.js";

export const Toast = (props: ToastPayload) => {
  const { message } = props;

  return <div className={props.isExiting ? slideDown : toastStyle}>{message}</div>;
};
