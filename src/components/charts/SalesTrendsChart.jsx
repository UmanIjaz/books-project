import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { cn } from "@/utils/cn";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

// Dummy sales data for the last 7 days
const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Sales ($)",
      data: [1200, 1900, 1700, 2100, 2500, 2300, 2000],
      fill: false,
      borderColor: "#7c3aed",
      backgroundColor: "#ede9fe",
      tension: 0.4,
      pointRadius: 5,
      pointBackgroundColor: "#7c3aed",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      mode: "index",
      intersect: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        color: "#f3f4f6",
      },
      ticks: {
        stepSize: 500,
      },
    },
  },
};

function SalesTrendsChart() {
  return (
    <div
      className={cn(
        "bg-surface rounded-2xl shadow-[0_2px_12px_rgba(80,80,180,0.06)]",
        "px-10 pt-8 pb-6 mb-8 mt-6"
      )}
    >
      <h3 className={cn("text-lg font-semibold mb-5 text-indigo-700")}>
        Sales Trends (Last 7 Days)
      </h3>
      <Line data={data} options={options} height={220} />
    </div>
  );
}

export default SalesTrendsChart;
