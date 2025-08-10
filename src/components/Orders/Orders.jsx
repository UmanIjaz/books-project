import styles from "./Orders.module.css";
import OrderRow from "./OrderRow";
import SearchBar from "../SearchBar/SearchBar";
import FilterDropdown from "../FilterDropdown/FilterDropdown";

// Example data
const orders = [
  {
    id: "ORD-1001",
    customer: {
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    date: "2025-07-08",
    status: "Pending",
    total: 129.99,
    items: 3,
    payment: "Credit Card",
  },
  {
    id: "ORD-1002",
    customer: {
      name: "Jane Smith",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    date: "2025-07-07",
    status: "Completed",
    total: 89.5,
    items: 1,
    payment: "PayPal",
  },
  {
    id: "ORD-1003",
    customer: {
      name: "Alice Brown",
      avatar: "https://randomuser.me/api/portraits/women/46.jpg",
    },
    date: "2025-07-06",
    status: "Cancelled",
    total: 0,
    items: 2,
    payment: "Credit Card",
  },
  {
    id: "ORD-1004",
    customer: {
      name: "Bob Lee",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    date: "2025-07-05",
    status: "Completed",
    total: 59.99,
    items: 1,
    payment: "Debit Card",
  },
];

function Orders() {
  return (
    <section className={styles.ordersSection}>
      <div className={styles.ordersTableWrapper}>
        <div className={styles.tableHeader}>
          <SearchBar placeholder="Search wishlist..." />
          <FilterDropdown
            options={["All", "Audio", "Wearables", "Electronics"]}
          />
        </div>
        <table className={styles.ordersTable}>
          <thead>
            <tr className={styles.tableHeadings}>
              <th>Order ID</th>
              {/* <th>Customer</th> */}
              <th>Date</th>
              {/* <th>Status</th> */}
              <th>Items</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderRow key={order.id} order={order} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Orders;
