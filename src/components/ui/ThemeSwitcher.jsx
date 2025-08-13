import { useTheme } from "../../contexts/ThemeContext";
import { FiMoon, FiSun } from "react-icons/fi";
import { cn } from "@/utils/cn";

/**
 * Theme Switcher Component
 *
 * @param {Object} props
 * @param {string} props.label - Optional label text
 * @param {string} props.className - Additional CSS classes
 */
function ThemeSwitcher({ label = "", className = "" }) {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <div className="mt-2">
      {label && <span className="text-sm text-muted block mb-1">{label}</span>}
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

export default ThemeSwitcher;
