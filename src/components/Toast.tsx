import { useEffect } from "react";

interface ToastProps {
  message: string;
  onClose: () => void;
  duration?: number; // ms
  type?: "success" | "error";
}

const Toast = ({
  message,
  onClose,
  duration = 4000,
  type = "success",
}: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const backgroundColor = type === "error" ? "#a11313ff" : "#333";

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor,
        color: "#fff",
        padding: "12px 20px",
        borderRadius: "8px",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
        fontFamily: "orbitron",
        fontSize: "1rem",
        zIndex: 1000,
      }}
    >
      {message}
    </div>
  );
};

export default Toast;
