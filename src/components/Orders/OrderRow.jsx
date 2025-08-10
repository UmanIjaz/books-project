import styles from "./Orders.module.css";
import { FiCheckCircle, FiXCircle, FiClock } from "react-icons/fi";

function getStatusIcon(status) {
  if (status === "Completed")
    return (
      <FiCheckCircle className={styles.statusCompleted} title="Completed" />
    );
  if (status === "Pending")
    return <FiClock className={styles.statusPending} title="Pending" />;
  if (status === "Cancelled")
    return <FiXCircle className={styles.statusCancelled} title="Cancelled" />;
  return null;
}

function OrderRow({ order }) {
  return (
    <tr className={styles.orderRow}>
      <td>{order.id}</td>
      {/* <td>
        <div className={styles.customerCell}>
          <img
            src={order.customer.avatar}
            alt={order.customer.name}
            className={styles.avatar}
          />
          <span>{order.customer.name}</span>
        </div>
      </td> */}
      <td>{order.date}</td>
      {/* <td>
        <span className={styles.status}>
          {getStatusIcon(order.status)}
          {order.status}
        </span>
      </td> */}
      <td>{order.items}</td>
      <td>${order.total.toFixed(2)}</td>
      <td>{order.payment}</td>
      <td>
        <button className={styles.actionBtn}>View</button>
      </td>
    </tr>
  );
}

export default OrderRow;
