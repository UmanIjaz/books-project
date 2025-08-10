import styles from "./Products.module.css";
import { FiShoppingCart, FiStar } from "react-icons/fi";

function ProductCard({ product }) {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageWrapper}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.productImage}
        />
        {!product.inStock && (
          <span className={styles.outOfStock}>Out of Stock</span>
        )}
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{product.name}</h3>
        <div className={styles.productMeta}>
          <span className={styles.price}>${product.price.toFixed(2)}</span>
          <span className={styles.rating}>
            <FiStar className={styles.starIcon} />
            {product.rating}{" "}
            <span className={styles.reviews}>({product.reviews})</span>
          </span>
        </div>
        <button
          className={styles.addToCartBtn}
          disabled={!product.inStock}
          title={product.inStock ? "Add to cart" : "Out of stock"}
        >
          <FiShoppingCart /> Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
