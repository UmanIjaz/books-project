import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";
import styles from "./DashboardLayout.module.css";
import { HamburgerMenu } from "../components";
import { Header } from "../components";
import { useRef, useState } from "react";
import { ScrollToTop } from "../components";
import { Spinner } from "../components";
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
