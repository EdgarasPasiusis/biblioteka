import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);

  return user ? children : <Navigate to="/auth/login" replace />;
};

export default ProtectedRoute;
