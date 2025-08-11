import { FilterDropdown, SearchBar } from "../../";
import styles from "./ProductList.module.css";
import { FaTrashAlt } from "react-icons/fa";

function ProductList({ products = [], showDelete, showAdd }) {
  return (
    <section className={styles.listWrapper}>
      <div className={styles.listHeader}>
        <SearchBar placeholder="Search wishlist..." />
        <FilterDropdown
          options={["All", "Audio", "Wearables", "Electronics"]}
        />
      </div>
      <ul className={styles.list}>
        {products.map((product) => (
          <li key={product.id} className={styles.item}>
            <img
              src={product.image}
              alt={product.name}
              className={styles.img}
            />
            <div className={styles.info}>
              <div className={styles.name}>{product.name}</div>
              <div className={styles.category}>{product.category}</div>
              <div className={styles.price}>${product.price}</div>
            </div>
            <div className={styles.actions}>
              {showAdd && (
                <button className={styles.addBtn} disabled>
                  Add
                </button>
              )}
              {showDelete && (
                <button className={styles.deleteBtn} disabled>
                  <FaTrashAlt />
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductList;
