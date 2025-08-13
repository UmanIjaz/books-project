import { cn } from "@/utils/cn";

/**
 * Simple Avatar Component
 *
 * @param {Object} props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Alt text for image
 * @param {'sm'|'md'|'lg'} props.size - Avatar size
 * @param {Function} props.onClick - Click handler
 * @param {string} props.className - Additional CSS classes
 */
function Avatar({
  src = "https://randomuser.me/api/portraits/men/32.jpg",
  alt = "User profile picture",
  size = "md",
  onClick,
  className,
  ...rest
}) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-11 h-11",
    lg: "w-16 h-16",
  };

  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "rounded-full object-cover cursor-pointer transition-all duration-200",
        "hover:scale-105 shadow-elevation",
        sizeClasses[size],
        className
      )}
      onClick={onClick}
      {...rest}
    />
  );
}

export default Avatar;
