import { useState } from "react";

type ToastType = "success" | "error";

export function useToast(duration: number = 4000) {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error">("success");

  const showToastMessage = (message: string, type: ToastType = "success") => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);

    setTimeout(() => setShowToast(false), duration);
  };

  const showSuccess = (message: string) => showToastMessage(message, "success");
  const showError = (message: string) => showToastMessage(message, "error");

  return {
    showToast,
    toastMessage,
    toastType,
    showSuccess,
    showError,
    hideToast: () => setShowToast(false),
  };
}
