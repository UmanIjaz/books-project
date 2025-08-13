import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/DashboardPage";
import MainLayout from "./layout/MainLayout";
import DashboardLayout from "./layout/DashboardLayout";
import WishlistPage from "./pages/WishlistPage";
import OrdersPage from "./pages/OrdersPage";
import ProductsPage from "./pages/ProdcutsPage";
import LoginPage from "./pages/LoginPage";
import { ProtectedRoutes } from "./components";
import RegisterPage from "./pages/RegisterPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className="app" style={{ width: "100vw" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<MainLayout />}></Route>
          <Route element={<ProtectedRoutes />}>
            <Route element={<DashboardLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
            </Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
