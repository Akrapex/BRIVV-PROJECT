import { useAuth } from "../Contexts/AuthContext";
import { Navigate } from "react-router";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { session, sessionLoader } = useAuth();

  if (sessionLoader) return null;

  const authenticated = !!session?.user?.email_confirmed_at;

  if (!session?.user || !authenticated) {
    return <Navigate to="/auth" replace />;
  }
  return <>{children}</>;
}

export default ProtectedRoute;
