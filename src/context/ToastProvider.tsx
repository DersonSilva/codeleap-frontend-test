import { useState } from "react";
import type { ReactNode } from "react";
import type { Toast } from "../components/ui/Toast/toastTypes";
import { ToastContext } from "./ToastContex";

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  function showToast(message: string, type: Toast["type"] = "info") {
    const id = Date.now();
    const newToast: Toast = { id, message, type };
    setToasts((prev) => [...prev, newToast]);
    setTimeout(
      () => setToasts((prev) => prev.filter((t) => t.id !== id)),
      3000,
    );
  }

  return (
    <ToastContext.Provider value={{ toasts, showToast }}>
      {children}
    </ToastContext.Provider>
  );
}
