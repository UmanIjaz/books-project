import {
  StatsCards,
  UserDashboardWidgets,
  WishlistShowcase,
} from "../../components";
// import styles from "./Dashboard.module.css";
function Dashboard() {
  const styles = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };
  return (
    <div className={styles.dashboardPage} style={styles}>
      <StatsCards />
      <UserDashboardWidgets />
      <WishlistShowcase />
    </div>
  );
}

export default Dashboard;
