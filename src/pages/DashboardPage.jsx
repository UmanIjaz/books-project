import {
  StatsCards,
  UserDashboardWidgets,
  WishlistShowcase,
} from "../components";
import { cn } from "@/utils/cn";

function Dashboard() {
  return (
    <div className={cn("flex flex-col gap-6")}>
      <StatsCards />
      <UserDashboardWidgets />
      <WishlistShowcase />
    </div>
  );
}

export default Dashboard;
