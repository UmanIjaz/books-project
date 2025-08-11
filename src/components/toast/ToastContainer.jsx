import { createPortal } from "react-dom";
import ToastItem from "./ToastItem";

function ToastContainer({ toasts }) {
  return createPortal(
    <div
      style={{
        position: "fixed",
        bottom: "1rem",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
      }}
    >
      {toasts.map((t) => (
        <ToastItem key={t.id} {...t} />
      ))}
    </div>,
    document.body
  );
}

export default ToastContainer;
