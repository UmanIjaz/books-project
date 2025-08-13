import { cn } from "@/utils/cn";
import { FiSearch } from "react-icons/fi";

/**
 * SearchBar Component
 *
 * @param {Object} props
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.value - Input value
 * @param {Function} props.onChange - Change handler
 * @param {boolean} props.showIcon - Whether to show search icon
 * @param {string} props.className - Additional CSS classes
 */
function SearchBar({
  placeholder = "Search...",
  value,
  onChange,
  showIcon = true,
  className,
  ...rest
}) {
  return (
    <div className={cn("relative w-full", className)}>
      {showIcon && (
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-4 h-4" />
      )}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cn(
          // Base styles
          "w-full min-w-44 rounded border border-border bg-surface text-foreground",
          "text-sm placeholder:text-muted transition-colors duration-200",
          // Focus styles
          "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
          // Padding - adjust for icon
          showIcon ? "pl-10 pr-4 py-3" : "px-4 py-3"
          // Hover styles
          // "hover:border-primary/50"
        )}
        {...rest}
      />
    </div>
  );
}

export default SearchBar;
