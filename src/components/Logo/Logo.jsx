import { useNavigate } from "react-router-dom";
import styles from "./Logo.module.css";
import logo from "/src/assets/logo.svg";
function Logo() {
  const navigate = useNavigate();
  return (
    <div className={styles.logo} onClick={() => navigate("/")}>
      <img src={logo} alt="Logo" width={36} height={36} />
      <h2>Dashboard</h2>
    </div>
  );
}

export default Logo;
