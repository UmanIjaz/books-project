import { cn } from "@/utils/cn";
import { FiChevronDown } from "react-icons/fi";

/**
 * FilterDropdown Component
 *
 * @param {Object} props
 * @param {Array} props.options - Array of option strings or objects
 * @param {string} props.value - Selected value
 * @param {Function} props.onChange - Change handler
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.className - Additional CSS classes
 */
function FilterDropdown({
  options = [],
  value,
  onChange,
  placeholder = "Filter by...",
  className,
  ...rest
}) {
  return (
    <div className={cn("relative min-w-32", className)}>
      <select
        value={value}
        onChange={onChange}
        className={cn(
          // Base styles
          "w-full appearance-none cursor-pointer rounded border border-border",
          "bg-surface text-foreground text-sm px-4 py-3 pr-10",
          // Focus styles
          "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
          // Hover styles
          "hover:border-primary/50 transition-colors duration-200"
        )}
        {...rest}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option, index) => {
          // Handle both string arrays and object arrays
          const optionValue =
            typeof option === "string" ? option : option.value;
          const optionLabel =
            typeof option === "string" ? option : option.label;

          return (
            <option key={optionValue || index} value={optionValue}>
              {optionLabel}
            </option>
          );
        })}
      </select>

      {/* Custom dropdown arrow */}
      <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted w-4 h-4 pointer-events-none" />
    </div>
  );
}

export default FilterDropdown;
