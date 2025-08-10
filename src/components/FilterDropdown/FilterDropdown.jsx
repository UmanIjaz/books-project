import styles from "./FilterDropdown.module.css";

function FilterDropdown({ options }) {
  return (
    <select className={styles.dropdown}>
      {options.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  );
}

export default FilterDropdown;
