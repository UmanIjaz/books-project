import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

function Modal({ children, onClose }) {
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) {
    console.error(
      "Modal root element not found. Please add <div id='modal-root'></div> to index.html"
    );
    return null;
  }

  return createPortal(
    <div className={styles.modalOverlay} onClick={onClose} role="presentation">
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={styles.closeBtn}
          aria-label="Close modal"
          onClick={onClose}
        >
          &times;
        </button>
        {children || <p>This is a sample modal content.</p>}
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
