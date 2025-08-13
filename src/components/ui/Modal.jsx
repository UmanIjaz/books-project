import { createPortal } from "react-dom";
import { cn } from "@/utils/cn";

/**
 * Modal Component
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Modal content
 * @param {Function} props.onClose - Function to call when modal should close
 * @param {boolean} props.showCloseButton - Whether to show the close button
 * @param {string} props.className - Additional CSS classes for modal content
 * @param {string} props.overlayClassName - Additional CSS classes for overlay
 */
function Modal({
  children,
  onClose,
  showCloseButton = false,
  className,
  overlayClassName,
  ...rest
}) {
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) {
    console.error(
      "Modal root element not found. Please add <div id='modal-root'></div> to index.html"
    );
    return null;
  }

  return createPortal(
    <div
      className={cn(
        // Modal overlay styles
        "fixed inset-0 w-full h-full bg-black/50 flex justify-center items-center z-[9999]",
        overlayClassName
      )}
      onClick={onClose}
      role="presentation"
    >
      <div
        className={cn(
          // Modal content styles
          "bg-surface text-foreground p-6 rounded-lg max-w-lg w-[90%] relative",
          "shadow-floating animate-fade-in-scale",
          className
        )}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        {...rest}
      >
        {/* Close Button */}
        {showCloseButton && (
          <button
            className={cn(
              "absolute top-0 right-2.5 p-0 text-foreground bg-transparent border-none",
              "text-3xl cursor-pointer leading-none transition-transform duration-100 ease-in",
              "hover:text-red-500 focus:text-red-500 focus:outline-none focus:scale-90"
            )}
            onClick={onClose}
            aria-label="Close modal"
            type="button"
          >
            ×
          </button>
        )}

        {/* Modal Content */}
        {children || <p>This is a sample modal content.</p>}
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
