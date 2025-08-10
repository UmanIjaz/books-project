import Orders from "../../components/Orders/Orders";
import StatsCards from "../../components/StatsCards/StatsCards";
import UserDashboardWidgets from "../../components/UserDashboardWidgets/UserDashboardWidgets";
import WishlistShowcase from "../../components/WishlistShowcase/WishlistShowcase";

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
