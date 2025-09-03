import { Navigate, Outlet } from "react-router";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

const ProtectedRoute2 = () => {
  const { user } = useContext(UserContext);

  return user ? <Outlet /> : <Navigate to="/auth/login" replace />;
};

export default ProtectedRoute2;
