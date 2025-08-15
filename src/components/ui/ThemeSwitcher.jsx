import { useTheme } from "../../contexts/ThemeContext";
import { FiMoon, FiSun } from "react-icons/fi";
import { cn } from "@/utils/cn";

/**
 * Theme Switcher Component
 *
 * @param {Object} props
 * @param {string} props.label - Optional label text
 * @param {string} props.className - Additional CSS classes
 * @param {"default" | "lg"} props.variant - Component variant (default or lg)
 */
function ThemeSwitcher({ label = "", className = "", variant = "default" }) {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  // Large variant
  if (variant === "lg") {
    return (
      <div className="">
        {label && (
          <span className="text-sm text-muted block mb-1">{label}</span>
        )}
        <button
          className={cn(
            // Base button styles
            "rounded flex items-center cursor-pointer transition-all duration-300 ease-in-out",
            "text-foreground px-5 py-3 text-lg border-none bg-transparent",
            // Hover and focus styles
            "hover:bg-hover hover:text-primary focus:outline-none",
            className
          )}
          onClick={toggleTheme}
          aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
        >
          {isDark ? (
            <FiSun className="w-5 h-5" />
          ) : (
            <FiMoon className="w-5 h-5" />
          )}
        </button>
      </div>
    );
  }

  // Fallback to default variant
  return (
    <div className="">
      {label && <span className="text-sm text-muted block mb-1">{label}</span>}
      <button
        className={cn(
          "p-2 text-muted hover:text-foreground transition-colors duration-200",
          "rounded hover:bg-hover",
          className
        )}
        title="Toggle theme"
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      >
        {isDark ? <FiSun /> : <FiMoon />}
      </button>
    </div>
  );
}

export default ThemeSwitcher;
