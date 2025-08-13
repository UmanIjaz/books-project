import { NavLink, useNavigate } from "react-router-dom";
import logo from "/src/assets/logo.svg";
import {
  FiBox,
  FiHeart,
  FiHome,
  FiLogOut,
  FiShoppingBag,
} from "react-icons/fi";
import { Button, Modal, ThemeSwitcher, Logo } from "..";
import { useAuth } from "../../contexts/AuthContext";
import { toast } from "..";
import { useState } from "react";
import { cn } from "@/utils/cn";

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
      toast("Failed to Sign-out. Try again.", "error");
      return;
    }

    toast("Logged out successfully", "success");
    setIsLogingOut(false);
    navigate("/login", { replace: true });
  }

  return (
    <>
      <nav
        className={cn(
          // Base sidebar styles
          "bg-surface text-primary shadow-lg z-10 h-screen relative flex flex-col",
          // Mobile hidden (below sm)
          "max-sm:hidden",
          // Tablet compact (sm - lg)
          "sm:max-lg:w-[75px] sm:max-lg:min-w-[75px] sm:max-lg:max-w-[75px] sm:max-lg:items-center sm:max-lg:px-0 sm:max-lg:py-2",
          // Desktop (lg+)
          "lg:w-[250px] lg:min-h-screen lg:items-start lg:p-4 lg:shadow-[4px_0_32px_0_rgba(108,99,255,0.07)]",
          // Default mobile/tablet styles
          "max-lg:w-full max-lg:p-2 max-lg:items-center max-lg:min-h-[60px] max-lg:shadow-[0_2px_16px_0_rgba(108,99,255,0.08)]"
        )}
        aria-label="Sidebar Navigation"
      >
        {/* Logo for desktop */}
        <div className="lg:ml-8 sm:max-lg:hidden max-sm:hidden">
          <Logo />
        </div>

        {/* Mobile logo (tablet compact mode) */}
        <img
          src={logo}
          alt="logo"
          className="w-[38px] lg:hidden sm:max-lg:block hidden"
        />

        {/* Navigation Items */}
        <ul
          className={cn(
            "w-full flex flex-col list-none m-0 p-0",
            // Tablet compact - center items
            "sm:max-lg:items-center sm:max-lg:gap-1 sm:max-lg:mt-16",
            // Desktop - normal spacing
            "lg:gap-2 lg:mt-16",
            // Mobile - center items
            "max-sm:items-center max-sm:gap-1 max-sm:mt-16"
          )}
        >
          {navItems.map(({ to, label, icon }) => (
            <li key={label}>
              {label === "Sign Out" ? (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className={cn(
                    // Base link styles
                    "flex items-center h-[45px] gap-4 rounded transition-all duration-200",
                    "text-muted font-medium bg-transparent border-none cursor-pointer",
                    "hover:bg-hover hover:text-primary",
                    // Icon styles
                    "[&_svg]:w-[22px] [&_svg]:h-[22px] [&_svg]:stroke-muted [&_svg]:fill-none [&_svg]:transition-colors [&_svg]:duration-200",
                    // Tablet compact - hide text, center icon
                    "sm:max-lg:[&_span]:hidden sm:max-lg:px-3 sm:max-lg:py-3 sm:max-lg:justify-center",
                    // Desktop - full display
                    "lg:text-sm lg:px-6 lg:py-3 lg:min-w-[180px] lg:text-left",
                    // Mobile default
                    "max-lg:px-5 max-lg:py-3 max-lg:text-base"
                  )}
                >
                  {icon}
                  <span>{label}</span>
                </button>
              ) : (
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    cn(
                      // Base link styles
                      "flex items-center h-[45px] gap-4 rounded transition-all duration-200",
                      "text-muted font-medium",
                      "hover:bg-hover hover:text-primary",
                      // Icon styles
                      "[&_svg]:w-[22px] [&_svg]:h-[22px] [&_svg]:stroke-muted [&_svg]:fill-none [&_svg]:transition-colors [&_svg]:duration-200",
                      // Active state
                      isActive &&
                        "bg-primary text-white shadow-[0_6px_24px_0_rgba(108,99,255,0.13)] [&_svg]:stroke-white",
                      isActive && "hover:bg-primary hover:text-white",
                      // Tablet compact - hide text, center icon
                      "sm:max-lg:[&_span]:hidden sm:max-lg:px-3 sm:max-lg:py-3 sm:max-lg:justify-center",
                      // Desktop - full display
                      "lg:text-sm lg:px-6 lg:py-3 lg:min-w-[180px] lg:text-left",
                      // Mobile default
                      "max-lg:px-5 max-lg:py-3 max-lg:text-base"
                    )
                  }
                >
                  {icon}
                  <span>{label}</span>
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        {/* Theme Switcher */}
        <div className="absolute bottom-3 right-3">
          <ThemeSwitcher className="text-muted" />
        </div>
      </nav>

      {/* Logout Modal */}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className="flex flex-col gap-4 p-6 justify-start text-left">
            <h2 className="text-xl font-semibold">Confirm Logout</h2>
            <p className="text-muted">
              Are you sure you want to log out? You&apos;ll need to sign in
              again to access your account.
            </p>

            <div className="flex gap-2 justify-end">
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
    </>
  );
};

export default Sidebar;
