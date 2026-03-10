import type { Toast as ToastType } from "./toastTypes";

type Props = {
  toast: ToastType;
};

export function Toast({ toast }: Props) {
  const base =
    "px-4 py-3 rounded shadow text-white text-sm font-medium flex items-center";

  const colors = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
    info: "bg-blue-500",
  };

  return <div className={`${base} ${colors[toast.type]}`}>{toast.message}</div>;
}
