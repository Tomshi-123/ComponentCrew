import { useEffect } from "react";

interface TaostProps {
  message: string;
  onClose: () => void;
  duration?: number; // ms
}

const Toast = ({ message, onClose, duration = 4000 }: TaostProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#333",
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
