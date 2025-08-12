import { useAuth } from "../../../contexts/AuthContext";
import { Avatar, HamburgerIcon, Logo } from "../../";
import styles from "./Header.module.css";

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
    <header className={styles.header}>
      <h1 className={styles.greeting}>Hello {displayName}👋</h1>
      <div className={styles.logoWrapper}>
        <Logo />
      </div>
      <div className={styles.hamburgerWrapper}>
        <HamburgerIcon onClick={onHamburgerClick} />
      </div>
      <div className={styles.avtarWrapper}>
        <Avatar />
      </div>
    </header>
  );
}

export default Header;
