import styles from "./WishlistShowcase.module.css";
import { useNavigate } from "react-router-dom";

// Dummy wishlist data
const wishlist = [
  {
    id: "P-1001",
    name: "Wireless Headphones",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=200&q=80",
    price: 89.99,
  },
  {
    id: "P-1002",
    name: "Smart Watch",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80",
    price: 129.99,
  },
  {
    id: "P-1003",
    name: "Bluetooth Speaker",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=200&q=80",
    price: 59.99,
  },
];

function WishlistShowcase() {
  const navigate = useNavigate();
  return (
    <div className={styles.wishlistShowcase}>
      <div className={styles.header}>
        <span className={styles.title}>Wishlist</span>
        <button
          className={styles.expandBtn}
          onClick={() => navigate("/wishlist")}
        >
          See all
        </button>
      </div>
      <ul className={styles.list}>
        {wishlist.map((item) => (
          <li key={item.id} className={styles.item}>
            <img src={item.image} alt={item.name} className={styles.img} />
            <div className={styles.info}>
              <span className={styles.name}>{item.name}</span>
              <span className={styles.price}>${item.price}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WishlistShowcase;
