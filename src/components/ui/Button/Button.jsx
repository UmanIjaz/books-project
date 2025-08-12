import styles from "./Button.module.css";

function Button({
  children,
  variant = "primary", // "primary" | "secondary" | "outline"
  size = "md", // "sm" | "md" | "lg"
  type = "button",
  disabled = false,
  onClick,
  className = "",
  ...rest
}) {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
