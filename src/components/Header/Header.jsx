import { useAuth } from "../../contexts/AuthContext";
import Avtar from "../Avtar/Avtar";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";
import Logo from "../Logo/Logo";
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
      <h2 className={styles.greeting}>Hello {displayName}👋</h2>
      <div className={styles.logoWrapper}>
        <Logo />
      </div>
      <div className={styles.hamburgerWrapper}>
        <HamburgerIcon onClick={onHamburgerClick} />
      </div>
      <div className={styles.avtarWrapper}>
        <Avtar />
      </div>
    </header>
  );
}

export default Header;
