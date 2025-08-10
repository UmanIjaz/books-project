import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import styles from "./OrderStatusPieChart.module.css";

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
  maintainAspectRatio: false, // ✅ So height works from parent
  plugins: {
    legend: {
      display: true,
      position: "bottom",
    },
  },
};

function OrderStatusPieChart() {
  return (
    <div className={styles.pieChartBox}>
      <h4>Order Status</h4>
      <div className={styles.chartWrapper}>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}

export default OrderStatusPieChart;
