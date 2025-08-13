import { FiBox, FiHeart, FiHome, FiShoppingBag, FiUser } from "react-icons/fi";
import { Avatar, Button, Modal } from "..";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ThemeSwitcher } from "..";
import { useEffect, useRef, useState } from "react";
import { toast } from "../toast/toast";
import { useAuth } from "../../contexts/AuthContext";
import { cn } from "@/utils/cn";

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
      toast("Failed to Sign-out. Try again.", "error");
      return;
    }

    toast("Logged out successfully", "success");
    setIsLogingOut(false);
    navigate("/login", { replace: true });
  }

  return (
    <nav
      className={cn(
        // Base menu styles
        "bg-surface w-screen h-screen px-6 py-4 flex flex-col relative",
        // Animation and state
        "animate-hamburger-slide-in",
        // Only show on mobile (below sm)
        "sm:hidden"
      )}
    >
      {/* Menu Header */}
      <div className="flex items-center justify-between mb-6">
        {/* Profile Section */}
        <div className="flex items-center gap-4">
          <Avatar />
          <div className="flex flex-col gap-0.5">
            <span className="text-lg font-semibold text-foreground">
              Hello,
            </span>
            <span className="text-base text-muted">John Doe</span>
          </div>
        </div>

        {/* Close Button */}
        <button
          className={cn(
            "bg-transparent border-none text-3xl text-muted cursor-pointer",
            "transition-colors duration-200 outline-none p-0",
            "hover:text-primary focus:outline-none"
          )}
          aria-label="Close menu"
          onClick={onClose}
        >
          &times;
        </button>
      </div>

      {/* Navigation Menu */}
      <ul className="list-none p-0 mt-8 flex flex-col gap-2">
        <li>
          <NavLink
            className={({ isActive }) =>
              cn(
                "flex items-center gap-4 text-lg text-foreground font-medium",
                "cursor-pointer border-none bg-transparent px-2 py-2 rounded-lg",
                "transition-all duration-200",
                "hover:bg-hover hover:text-primary",
                isActive && "bg-hover text-primary"
              )
            }
            to="/"
          >
            <FiHome className="w-5 h-5" />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              cn(
                "flex items-center gap-4 text-lg text-foreground font-medium",
                "cursor-pointer border-none bg-transparent px-2 py-2 rounded-lg",
                "transition-all duration-200",
                "hover:bg-hover hover:text-primary",
                isActive && "bg-hover text-primary"
              )
            }
            to="/orders"
          >
            <FiShoppingBag className="w-5 h-5" />
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              cn(
                "flex items-center gap-4 text-lg text-foreground font-medium",
                "cursor-pointer border-none bg-transparent px-2 py-2 rounded-lg",
                "transition-all duration-200",
                "hover:bg-hover hover:text-primary",
                isActive && "bg-hover text-primary"
              )
            }
            to="/products"
          >
            <FiBox className="w-5 h-5" />
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              cn(
                "flex items-center gap-4 text-lg text-foreground font-medium",
                "cursor-pointer border-none bg-transparent px-2 py-2 rounded-lg",
                "transition-all duration-200",
                "hover:bg-hover hover:text-primary",
                isActive && "bg-hover text-primary"
              )
            }
            to="/wishlist"
          >
            <FiHeart className="w-5 h-5" />
            Wishlist
          </NavLink>
        </li>
        <li>
          <button
            className={cn(
              "flex items-center gap-4 text-lg text-foreground font-medium w-full text-left",
              "cursor-pointer border-none bg-transparent px-2 py-2 rounded-lg",
              "transition-all duration-200",
              "hover:bg-hover hover:text-primary"
            )}
            onClick={() => setIsModalOpen(true)}
          >
            <FiUser className="w-5 h-5" />
            Sign Out
          </button>
        </li>
      </ul>

      {/* Theme Switcher */}
      <div className="absolute bottom-1 right-1">
        <ThemeSwitcher />
      </div>

      {/* Logout Modal */}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className="flex flex-col gap-4 p-6 justify-center text-center">
            <h2 className="text-xl font-semibold">Confirm Logout</h2>
            <p className="text-muted">
              Are you sure you want to log out? You&apos;ll need to sign in
              again to access your account.
            </p>

            <div className="flex justify-center gap-2">
              <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>

              <Button
                loading={isLogingOut}
                onClick={handleLogout}
                variant="destructive"
              >
                Yes, Log out
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </nav>
  );
}

export default HamburgerMenu;
