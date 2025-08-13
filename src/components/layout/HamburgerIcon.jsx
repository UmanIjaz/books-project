import { cn } from "@/utils/cn";

function HamburgerIcon({ onClick }) {
  return (
    <button
      className={cn(
        "flex items-center justify-center w-[38px] h-[38px]",
        "bg-surface border-none rounded-lg cursor-pointer ml-auto",
        "shadow-[0_1px_4px_rgba(108,99,255,0.08)] transition-colors duration-200",
        "hover:bg-hover focus:outline-none"
      )}
      onClick={onClick}
      aria-label="Open sidebar"
    >
      <span
        className={cn("w-[22px] h-[22px] flex flex-col justify-center gap-1")}
      >
        <span className={cn("block h-[3px] w-6 bg-primary rounded-sm")}></span>
        <span className={cn("block h-[3px] w-6 bg-primary rounded-sm")}></span>
        <span className={cn("block h-[3px] w-6 bg-primary rounded-sm")}></span>
      </span>
    </button>
  );
}

export default HamburgerIcon;
