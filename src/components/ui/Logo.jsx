import { useNavigate } from "react-router-dom";
import { cn } from "@/utils/cn";
import logo from "/src/assets/logo.svg";

/**
 * Logo Component
 *
 * @param {Object} props
 * @param {string} props.title - Logo title text
 * @param {boolean} props.showTitle - Whether to show title text
 * @param {string} props.size - Logo size: 'sm', 'md', 'lg'
 * @param {string} props.className - Additional CSS classes
 * @param {Function} props.onClick - Custom click handler
 */
function Logo({
  title = "Dashboard",
  showTitle = true,
  size = "md",
  className,
  onClick,
  ...rest
}) {
  const navigate = useNavigate();

  const sizeClasses = {
    sm: { img: "w-6 h-6", text: "text-lg" },
    md: { img: "w-9 h-9", text: "text-xl" },
    lg: { img: "w-12 h-12", text: "text-2xl" },
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate("/");
    }
  };

  return (
    <div
      className={cn(
        "flex items-center gap-3 cursor-pointer transition-all duration-200",
        "hover:opacity-80 select-none",
        className
      )}
      onClick={handleClick}
      {...rest}
    >
      <img
        src={logo}
        alt="Logo"
        className={cn(
          "transition-transform duration-200 hover:scale-105",
          sizeClasses[size].img
        )}
      />
      {showTitle && (
        <h2
          className={cn(
            "font-bold text-primary m-0 font-primary tracking-tight",
            sizeClasses[size].text
          )}
        >
          {title}
        </h2>
      )}
    </div>
  );
}

export default Logo;
