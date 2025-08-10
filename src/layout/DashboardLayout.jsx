import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";
import styles from "./DashboardLayout.module.css";
import HamburgerMenu from "../components/HamburgerMenu/HamburgerMenu";
import Header from "../components/Header/Header";
import { useRef, useState } from "react";
import ScrollToTop from "../components/Utils/ScrollToTop/ScrollToTop";
import Spinner from "../components/Spinner/Spinner";
function DashboardLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const contentRef = useRef();
  return (
    <div className={styles.DashboardLayout}>
      <ScrollToTop scrollRef={contentRef} />

      <Sidebar />
      {isMenuOpen && (
        <HamburgerMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
      )}
      <div className={styles.mainArea}>
        <Header onHamburgerClick={() => setIsMenuOpen(true)} />
        <main className={styles.mainContent} ref={contentRef}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
