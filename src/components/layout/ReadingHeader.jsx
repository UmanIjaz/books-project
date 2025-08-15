import {
  FiSkipBack,
  FiBookmark,
  FiSettings,
  FiSun,
  FiMoon,
  FiType,
} from "react-icons/fi";
import { cn } from "@/utils/cn";
import ThemeSwitcher from "../ui/ThemeSwitcher";

function ReadingHeader() {
  return (
    <header
      className={cn(
        "bg-surface border-b border-border shadow-sm sticky top-0 z-50"
      )}
    >
      <div
        className={cn(
          "container mx-auto px-4 py-3",
          "flex items-center justify-between"
        )}
      >
        {/* Left - Back Button */}
        <button
          className={cn(
            "flex items-center gap-2 text-muted hover:text-foreground",
            "transition-colors duration-200 px-2 py-1 rounded",
            "hover:bg-hover"
          )}
        >
          <FiSkipBack className="w-4 h-4" />
          <span className="text-sm font-medium">Back</span>
        </button>

        {/* Center - Book Info */}
        <div className={cn("flex-1 text-center px-4")}>
          <h1 className={cn("text-sm font-semibold text-foreground truncate")}>
            The Pleasure of Philosophy
          </h1>
          <p className={cn("text-xs text-muted")}>Chapter 5</p>
        </div>

        {/* Right - Reading Options */}
        <div className={cn("flex items-center gap-1")}>
          {/* Bookmark Button */}
          <button
            className={cn(
              "p-2 text-muted hover:text-primary transition-colors duration-200",
              "rounded hover:bg-hover",
              "tooltip-container"
            )}
            title="Bookmark this page"
          >
            <FiBookmark className="w-4 h-4" />
          </button>

          {/* Font Settings */}
          <button
            className={cn(
              "p-2 text-muted hover:text-foreground transition-colors duration-200",
              "rounded hover:bg-hover"
            )}
            title="Text settings"
          >
            <FiType className="w-4 h-4" />
          </button>

          {/* Theme Toggle */}
          <button
            className={cn(
              "p-2 text-muted hover:text-foreground transition-colors duration-200",
              "rounded hover:bg-hover"
            )}
            title="Toggle theme"
          >
            <FiSun className="w-4 h-4" />
          </button>
          {/* <ThemeSwitcher /> */}

          {/* Settings */}
          <button
            className={cn(
              "p-2 text-muted hover:text-foreground transition-colors duration-200",
              "rounded hover:bg-hover"
            )}
            title="Reading settings"
          >
            <FiSettings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default ReadingHeader;
