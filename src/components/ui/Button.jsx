import { cn } from "@/utils/cn";
import { SpinnerMini } from "../";

/**
 * Button Component
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button content
 * @param {'primary'|'secondary'|'outline'|'ghost'|'destructive'} props.variant - Button style variant
 * @param {'sm'|'md'|'lg'|'xl'} props.size - Button size
 * @param {'button'|'submit'|'reset'} props.type - Button type
 * @param {boolean} props.disabled - Whether button is disabled
 * @param {boolean} props.loading - Whether button is in loading state
 * @param {Function} props.onClick - Click handler
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.rest - Additional props passed to button element
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  loading = false,
  onClick,
  className,
  ...rest
}) {
  return (
    <button
      type={type}
      className={cn(
        "btn",
        `btn-${variant}`,
        `btn-${size}`,
        {
          "opacity-50 cursor-not-allowed": loading,
        },
        className
      )}
      disabled={disabled || loading}
      onClick={onClick}
      {...rest}
    >
      {loading ? (
        <>
          <SpinnerMini />
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
