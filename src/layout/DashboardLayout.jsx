import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";
import { HamburgerMenu } from "../components";
import { Header } from "../components";
import { useRef, useState } from "react";
import { ScrollToTop } from "../components";
import { cn } from "@/utils/cn";

function DashboardLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const contentRef = useRef();

  return (
    <div className={cn("h-screen w-screen overflow-hidden flex box-border")}>
      <ScrollToTop scrollRef={contentRef} />

      <Sidebar />

      {isMenuOpen && (
        <HamburgerMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
      )}

      <div
        className={cn(
          "flex-1 flex flex-col overflow-hidden max-w-[1200px] mx-auto"
        )}
      >
        <Header onHamburgerClick={() => setIsMenuOpen(true)} />

        <main className={cn("flex-1 p-4 overflow-y-auto")} ref={contentRef}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
