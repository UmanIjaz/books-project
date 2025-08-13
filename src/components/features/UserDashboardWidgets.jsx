import { RecentOrdersChart, OrderStatusPieChart } from "..";
import { cn } from "@/utils/cn";

function UserDashboardWidgets() {
  return (
    <div className={cn("flex gap-4", "max-[810px]:flex-col")}>
      <div
        className={cn(
          "flex-1 bg-surface rounded shadow-[0_2px_12px_rgba(80,80,180,0.06)]",
          "px-8 py-6 flex flex-col gap-6 min-w-0"
        )}
      >
        <RecentOrdersChart />
      </div>

      <div
        className={cn(
          "flex-1 bg-surface rounded shadow-[0_2px_12px_rgba(80,80,180,0.06)]",
          "px-8 py-6 flex flex-col gap-6 min-w-0"
        )}
      >
        <OrderStatusPieChart />
      </div>
    </div>
  );
}

export default UserDashboardWidgets;
