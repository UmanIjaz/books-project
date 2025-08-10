import { FiBox, FiHeart, FiHome, FiShoppingBag, FiUser } from "react-icons/fi";
import Avtar from "../Avtar/Avtar";

import styles from "./HamburgerMenu.module.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { useEffect, useRef, useState } from "react";
import { toast } from "../Toast/toast";
import { useAuth } from "../../contexts/AuthContext";
import SpinnerMini from "../SpinnerMini/SpinnerMini";

function HamburgerMenu({ onClose, isOpen }) {
  const [isLogingOut, setIsLogingOut] = useState(false);
  const location = useLocation();
  const prevPath = useRef(location.pathname);
  const firstRender = useRef(true);
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      prevPath.current = location.pathname;
      return;
    }

    // Only close the menu if it was open and route actually changed
    if (isOpen && prevPath.current !== location.pathname) {
      onClose();
    }

    prevPath.current = location.pathname;
  }, [location.pathname, isOpen]);

  async function handleLogout() {
    setIsLogingOut(true);
    const { success, error } = await logout();

    if (!success) {
      console.error("Sign-out failed.", error.message);
      toast("Failed to Sign-out. Try again.", "successerror");
      return;
    }

    toast("Logged out successfully", "success");
    setIsLogingOut(false);
    navigate("/login", { replace: true });
  }

  return (
    <aside
      className={`${styles.hamburgerMenu} ${
        isOpen ? styles.open : styles.closed
      }`}
    >
      <div className={styles.menuHeader}>
        <div className={styles.menuProfile}>
          <Avtar />
          <div className={styles.menuProfileText}>
            <span className={styles.menuProfileName}>Hello,</span>
            <span className={styles.menuProfileSub}>John Doe</span>
          </div>
        </div>
        <button
          className={styles.menuClose}
          aria-label="Close menu"
          onClick={onClose}
        >
          &times;
        </button>
      </div>

      <ul className={styles.menuList}>
        <li>
          <NavLink className={styles.menuItem} to="/">
            <FiHome />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.menuItem} to="/orders">
            <FiShoppingBag />
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.menuItem} to="/products">
            <FiBox />
            Products
          </NavLink>
        </li>{" "}
        <li>
          <NavLink className={styles.menuItem} to="/wishlist">
            <FiHeart />
            Wishlist
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.menuItem} onClick={handleLogout}>
            {isLogingOut ? <SpinnerMini /> : <FiUser />}
            Sign Out
          </NavLink>
        </li>
      </ul>

      {/* Theme Switcher */}
      <ThemeSwitcher className={styles.ThemeBtnAbsolute} />
    </aside>
  );
}

export default HamburgerMenu;
