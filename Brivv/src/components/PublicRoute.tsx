import { Navigate } from "react-router";
import { useAuth } from "../Contexts/AuthContext";

function PublicRoute({ children }: { children: React.ReactNode }) {
  const { session, sessionLoader } = useAuth();

  if (sessionLoader || session === undefined) return null;
  if (session && session.user) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}

export default PublicRoute;
