import { RecentOrdersChart, OrderStatusPieChart } from "../../";
import styles from "./UserDashboardWidgets.module.css";

function UserDashboardWidgets() {
  return (
    <div className={styles.widgetsRow}>
      <div className={styles.widgetBox}>
        <RecentOrdersChart />
      </div>
      <div className={styles.widgetBox}>
        <OrderStatusPieChart />
      </div>
    </div>
  );
}

export default UserDashboardWidgets;
