import { FiBox, FiHeart, FiHome, FiShoppingBag, FiUser } from "react-icons/fi";
import { Avatar, Button, Modal } from "../../";

import styles from "./HamburgerMenu.module.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ThemeSwitcher } from "../../";
import { useEffect, useRef, useState } from "react";
import { toast } from "../../toast/toast";
import { useAuth } from "../../../contexts/AuthContext";
import { SpinnerMini } from "../../";

function HamburgerMenu({ onClose, isOpen }) {
  const [isLogingOut, setIsLogingOut] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
          <Avatar />
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
          <NavLink
            className={styles.menuItem}
            onClick={() => setIsModalOpen(true)}
          >
            <FiUser />
            Sign Out
          </NavLink>
        </li>
      </ul>

      {/* Theme Switcher */}
      <ThemeSwitcher className={styles.ThemeBtnAbsolute} />
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              padding: "1.5rem",
            }}
          >
            <h2 style={{ margin: 0 }}>Confirm Logout</h2>
            <p>
              Are you sure you want to log out? You’ll need to sign in again to
              access your account.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "0.5rem",
              }}
            >
              <Button
                style={{ backgroundColor: "#ccc", color: "#000" }}
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </Button>
              <Button
                style={{
                  backgroundColor: "red",
                  color: "#fff",
                  display: "flex",
                  gap: "0.5rem",
                }}
                onClick={handleLogout}
              >
                {isLogingOut ? (
                  <>
                    <SpinnerMini />
                    Yes, Log out
                  </>
                ) : (
                  <>Yes, Log out</>
                )}
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </aside>
  );
}

export default HamburgerMenu;
