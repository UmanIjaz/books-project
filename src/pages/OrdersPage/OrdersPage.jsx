import { Orders } from "../../components/";
// Unused imports removed; add back as needed

function OrdersPage() {
  const styles = {
    display: "flex",
    flexDirection: "column",
  };
  return (
    <div className="orderPage" style={styles}>
      <h2 className="dashboardPageHeadings">Orders</h2>

      <Orders />
    </div>
  );
}

export default OrdersPage;
