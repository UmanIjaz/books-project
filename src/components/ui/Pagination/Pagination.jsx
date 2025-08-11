import styles from "./Pagination.module.css";

function Pagination({ total, pageSize = 10, currentPage = 1, onPageChange }) {
  const pageCount = Math.ceil(total / pageSize);
  if (pageCount <= 1) return null;
  return (
    <nav className={styles.pagination}>
      {[...Array(pageCount)].map((_, i) => (
        <button
          key={i}
          className={i + 1 === currentPage ? styles.active : styles.pageBtn}
          disabled
        >
          {i + 1}
        </button>
      ))}
    </nav>
  );
}

export default Pagination;
