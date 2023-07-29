import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";

export const RequiresAuth = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  return user.tokenVal ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
