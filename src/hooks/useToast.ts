import { useContext } from "react";
import { ToastContext } from "../context/ToastContex";
import type { ToastContextType } from "../context/ToastContex";

export function useToast(): ToastContextType {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used inside ToastProvider");
  }
  return context;
}
