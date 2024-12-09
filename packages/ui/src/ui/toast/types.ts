export type ToastPayload = {
  message: string;
  type?: "common" | "error" | "success";
  isExiting?: boolean;
};
