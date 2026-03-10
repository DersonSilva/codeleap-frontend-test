export type ToastType = "success" | "error" | "warning" | "info";

export type Toast = {
  id: number;
  message: string;
  type: ToastType;
};
