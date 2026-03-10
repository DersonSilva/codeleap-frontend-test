import { createContext } from "react";
import type { Toast } from "../components/ui/Toast/toastTypes";

export type ToastContextType = {
  toasts: Toast[];
  showToast: (message: string, type?: Toast["type"]) => void;
};

export const ToastContext = createContext<ToastContextType | null>(null);
