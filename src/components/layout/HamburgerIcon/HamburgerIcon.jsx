import styles from "./HamburgerIcon.module.css";
function HamburgerIcon({ onClick }) {
  return (
    <button
      className={styles.hamburger}
      onClick={onClick}
      aria-label="Open sidebar"
    >
      <span className={styles.hamburgerIcon}>
        <span></span>
        <span></span>
        <span></span>
      </span>
    </button>
  );
}

export default HamburgerIcon;
