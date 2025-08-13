import { useAuth } from "../../contexts/AuthContext";
import { Avatar, HamburgerIcon, Logo } from "../";
import { cn } from "@/utils/cn";

function Header({ onHamburgerClick }) {
  const { user } = useAuth();

  function formatName(user) {
    if (!user?.name) return "";

    const nameArr = user.name.trim().split(/\s+/);
    if (nameArr.length > 2) {
      return `${nameArr[0]} ${nameArr[1]}`;
    }

    return nameArr[0];
  }

  const displayName = formatName(user);

  return (
    <header
      className={cn(
        "flex items-center justify-between z-[100] overflow-x-hidden",
        "px-5 pb-3 pt-6",
        "max-lg:px-3"
      )}
    >
      {/* Greeting - hidden on very small screens */}
      <h1
        className={cn(
          "text-foreground font-semibold",
          "text-2xl max-lg:text-xl",
          "max-sm:hidden"
        )}
      >
        Hello {displayName}👋
      </h1>

      {/* Logo - only visible on very small screens */}
      <div className={cn("hidden max-sm:block")}>
        <Logo />
      </div>

      {/* Hamburger - only visible on small screens */}
      <div className={cn("hidden max-sm:block")}>
        <HamburgerIcon onClick={onHamburgerClick} />
      </div>

      {/* Avatar - hidden on very small screens */}
      <div className={cn("max-sm:hidden")}>
        <Avatar />
      </div>
    </header>
  );
}

export default Header;
