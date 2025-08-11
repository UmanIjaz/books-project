import { ProductList } from "../../components";
import styles from "./WishlistPage.module.css";

// Dummy wishlist products
const wishlistProducts = [
  {
    id: "P-1001",
    name: "Wireless Headphones",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=100&q=80",
    price: 89.99,
    category: "Audio",
  },
  {
    id: "P-1002",
    name: "Smart Watch",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=100&q=80",
    price: 129.99,
    category: "Wearables",
  },
  {
    id: "P-1003",
    name: "Bluetooth Speaker",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=100&q=80",
    price: 59.99,
    category: "Audio",
  },
  {
    id: "P-1004",
    name: "VR Headset",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=100&q=80",
    price: 199.99,
    category: "Electronics",
  },
];

function WishlistPage() {
  return (
    <div className={styles.wishlistPage}>
      <h2 className="dashboardPageHeadings">My Wishlist</h2>
      {/* <div className={styles.controls}></div> */}
      <ProductList products={wishlistProducts} showDelete showAdd />
    </div>
  );
}

export default WishlistPage;
