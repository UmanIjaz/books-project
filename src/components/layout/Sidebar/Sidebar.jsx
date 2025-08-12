import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";
import Logo from "../../ui/Logo/Logo";
import logo from "/src/assets/logo.svg";
import {
  FiBox,
  FiHeart,
  FiHome,
  FiLogOut,
  FiShoppingBag,
} from "react-icons/fi";
import { Button, Modal, ThemeSwitcher } from "../../";
import { useAuth } from "../../../contexts/AuthContext";
import { toast } from "../../";
import { useState } from "react";
import { SpinnerMini } from "../../";

const navItems = [
  {
    to: "/",
    label: "Dashboard",
    icon: <FiHome />,
    end: true,
  },
  {
    to: "/orders",
    label: "Order",
    icon: <FiShoppingBag />,
  },
  {
    to: "/products",
    label: "Products",
    icon: <FiBox />,
  },
  {
    to: "/wishlist",
    label: "Wishlist",
    icon: <FiHeart />,
  },
  {
    to: "/login",
    label: "Sign Out",
    icon: <FiLogOut />,
  },
];

const Sidebar = () => {
  const [isLogingOut, setIsLogingOut] = useState(false);
  const { logout } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

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
    <>
      <nav className={styles.sidebar} aria-label="Sidebar Navigation">
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
        <img src={logo} alt="logo" className={styles.logoMobile} />
        <ul className={styles.sidebarNav}>
          {navItems.map(({ to, label, icon }) => (
            <li key={label}>
              {label === "Sign Out" ? (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className={styles.sidebarLink}
                >
                  {icon}
                  <span>{label}</span>
                </button>
              ) : (
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.sidebarLink} ${styles.active}`
                      : styles.sidebarLink
                  }
                >
                  {icon}
                  <span>{label}</span>
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <ThemeSwitcher className={styles.ThemeBtnAbsolute} />
      </nav>
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
    </>
  );
};

export default Sidebar;
