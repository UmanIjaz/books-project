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
import { ThemeSwitcher } from "../../";
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
                <button onClick={handleLogout} className={styles.sidebarLink}>
                  {isLogingOut ? (
                    <>
                      <SpinnerMini />
                      <span>{label}</span>
                    </>
                  ) : (
                    <>
                      {icon}
                      <span>{label}</span>
                    </>
                  )}
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
    </>
  );
};

export default Sidebar;
