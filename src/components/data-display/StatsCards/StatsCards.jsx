import styles from "./StatsCards.module.css";
import { FiUsers, FiUserCheck, FiMonitor } from "react-icons/fi";

const avatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/45.jpg",
  "https://randomuser.me/api/portraits/women/46.jpg",
  "https://randomuser.me/api/portraits/women/47.jpg",
];

function StatsCards() {
  return (
    <section className={styles.statsCards}>
      <div className={styles.card}>
        <div className={styles.iconCircle}>
          <FiUsers className={styles.icon} />
        </div>
        <div className={styles.cardContent}>
          <span className={styles.label}>Total Sales</span>
          <span className={styles.value}>$5,423</span>
          <span className={styles.sub}>Avg. $28/order</span>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.iconCircle}>
          <FiUserCheck className={styles.icon} />
        </div>
        <div className={styles.cardContent}>
          <span className={styles.label}>Orders</span>
          <span className={styles.value}>1,893</span>
          <span className={styles.sub}>+231 today</span>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.iconCircle}>
          <FiMonitor className={styles.icon} />
        </div>
        <div className={styles.cardContent}>
          <span className={styles.label}>Top Products</span>
          <span className={styles.value}>189</span>
          <div className={styles.avatars}>
            {avatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`User avatar ${i + 1}`}
                className={styles.avatar}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsCards;
