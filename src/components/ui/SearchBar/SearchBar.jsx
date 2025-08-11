import styles from "./SearchBar.module.css";

function SearchBar({ placeholder }) {
  return (
    <input className={styles.search} type="text" placeholder={placeholder} />
  );
}

export default SearchBar;
