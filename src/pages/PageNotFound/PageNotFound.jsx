import { useNavigate } from "react-router-dom";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.subtitle}>Page Not Found</p>
      <button className={styles.homeBtn} onClick={() => navigate("/")}>
        Go to Home
      </button>
    </div>
  );
}

export default PageNotFound;
