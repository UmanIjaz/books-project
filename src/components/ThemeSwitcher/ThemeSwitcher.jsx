import styles from "./ThemeSwitcher.module.css";
import { useTheme } from "../../contexts/ThemeContext";
import { FiMoon, FiSun } from "react-icons/fi";

function ThemeSwitcher({ label = "", className = "" }) {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <div style={{ marginTop: "0.5rem" }}>
      {label && (
        <span style={{ fontSize: "0.98rem", color: "#888" }}>{label}</span>
      )}
      <button
        className={`${styles.themeToggleBtn} ${className}`}
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      >
        {isDark ? (
          <FiSun className={styles.icon} />
        ) : (
          <FiMoon className={styles.icon} />
        )}
      </button>
    </div>
  );
}

export default ThemeSwitcher;
