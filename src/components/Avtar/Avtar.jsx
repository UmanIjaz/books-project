import styles from "./Avtar.module.css";
function Avtar() {
  return (
    <img
      src="https://randomuser.me/api/portraits/men/32.jpg"
      className={styles.avtar}
      alt="avtar"
    />
  );
}

export default Avtar;
