import { cn } from "../../utils/cn";

/**
 * @param {Object} props
 * @param {'xs'|'sm'|'md'|'lg'|'xl'} props.size - Spinner size
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.centered - Whether to center the spinner in a container
 * @param {string} props.color - Text color for the spinner (uses currentColor)
 */
function Spinner({
  size = "md",
  className,
  centered = false,
  color = "text-white",
  ...rest
}) {
  const sizeClasses = {
    xs: "h-3 w-3",
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-8 w-8",
    xl: "h-12 w-12",
  };

  const spinnerSvg = (
    <svg
      className={cn("animate-spin", sizeClasses[size], color, className)}
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...rest}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
        className="opacity-25"
      />
      <path
        fill="currentColor"
        className="opacity-75"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  // If centered, wrap in container
  if (centered) {
    return (
      <div className="flex items-center justify-center min-h-[80px]">
        {spinnerSvg}
      </div>
    );
  }

  // Return just the spinner
  return spinnerSvg;
}

export default Spinner;
