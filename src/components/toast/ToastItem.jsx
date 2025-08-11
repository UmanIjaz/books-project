import styles from "./ToastItem.module.css";

function ToastItem({ message, type }) {
  return <div className={`${styles.toast} ${styles[type]}`}>{message}</div>;
}

export default ToastItem;
