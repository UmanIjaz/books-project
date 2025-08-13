import { createPortal } from "react-dom";
import ToastItem from "./ToastItem";

function ToastContainer({ toasts }) {
  return createPortal(
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-[1000]">
      {toasts.map((t) => (
        <ToastItem key={t.id} {...t} />
      ))}
    </div>,
    document.body
  );
}

export default ToastContainer;
