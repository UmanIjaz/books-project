import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { Spinner } from "../../";
function ProtectedRoutes({ roles = [] }) {
  const { user, isLoading } = useAuth();

  if (isLoading) return <Spinner />;

  if (!user) return <Navigate to="/login" replace />;

  if (roles.length > 0 && !roles.includes(user.role)) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;
