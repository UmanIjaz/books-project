import styles from "./Products.module.css";
import ProductCard from "./ProductCard";
import products from "../../data/products";

function Products() {
  return (
    <section className={styles.productsSection}>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Products;
