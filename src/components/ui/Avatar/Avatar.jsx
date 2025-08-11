import styles from "./Avatar.module.css";
function Avatar() {
  return (
    <img
      src="https://randomuser.me/api/portraits/men/32.jpg"
      className={styles.avatar}
      alt="avtar"
    />
  );
}

export default Avatar;
