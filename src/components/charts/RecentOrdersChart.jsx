import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { cn } from "@/utils/cn";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Orders",
      data: [2, 1, 3, 0, 2, 1, 2],
      backgroundColor: "#7c3aed",
      borderRadius: 8,
      maxBarThickness: 24,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: { mode: "index", intersect: false },
  },
  scales: {
    x: { grid: { display: false } },
    y: {
      beginAtZero: true,
      grid: { color: "#f3f4f6" },
      ticks: { stepSize: 1 },
    },
  },
};

function RecentOrdersChart() {
  return (
    <div className={cn("w-full max-w-[320px] mx-auto text-center")}>
      <h4 className={cn("mb-3 text-lg font-semibold text-purple-700")}>
        Recent Orders (7d)
      </h4>
      <div className={cn("relative h-[220px] w-full")}>
        <Bar data={data} options={options} height={220} />
      </div>
    </div>
  );
}

export default RecentOrdersChart;
