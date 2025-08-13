import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { cn } from "@/utils/cn";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Completed", "Pending", "Shipped"],
  datasets: [
    {
      label: "Orders",
      data: [12, 3, 5],
      backgroundColor: ["#7c3aed", "#fbbf24", "#38bdf8"],
      borderWidth: 1,
    },
  ],
};

const options = {
  cutout: "70%",
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
    },
  },
};

function OrderStatusPieChart() {
  return (
    <div className={cn("w-full max-w-[320px] mx-auto text-center")}>
      <h4 className={cn("mb-4 text-lg font-semibold text-foreground")}>
        Order Status
      </h4>
      <div className={cn("relative h-[220px] w-full")}>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}

export default OrderStatusPieChart;
