import { Navigate, useLocation } from "react-router";
import { useAuth } from "../Contexts/AuthContext";

function PublicRoute({ children }: { children: React.ReactNode }) {
  const { session, sessionLoader } = useAuth();
  const location = useLocation();

  if (sessionLoader || session === undefined) return null;

  if (location.pathname === "/auth/callback") {
    return <>{children}</>;
  }
  if (session && session.user) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}

export default PublicRoute;
