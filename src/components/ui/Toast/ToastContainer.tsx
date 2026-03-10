import { Toast } from "./Toast";
import type { Toast as ToastType } from "./toastTypes";

type Props = {
  toasts: ToastType[];
};

export function ToastContainer({ toasts }: Props) {
  return (
    <div className="fixed top-4 right-4 flex flex-col gap-3 z-50">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </div>
  );
}
