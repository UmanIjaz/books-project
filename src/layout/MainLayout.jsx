import { Outlet } from "react-router-dom";

// MainLayout is a minimal wrapper for public/storefront pages (e.g., Products, Home, Auth)
// Add header/footer here if needed for storefront, but keep it clean and separate from dashboard UI
function MainLayout() {
  return (
    <div style={{ minHeight: "100vh", background: "#fafbff" }}>
      <Outlet />
      {/* You can add a storefront footer here if needed */}
    </div>
  );
}

export default MainLayout;
