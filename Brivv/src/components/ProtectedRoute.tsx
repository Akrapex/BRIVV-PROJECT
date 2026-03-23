import { useEffect } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { Navigate, useNavigate } from "react-router";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { session } = useAuth();
  const navigate = useNavigate();

  if (session === undefined) return null;

  const isAuthenticated = !!session?.user?.email_confirmed_at;

  if (!session?.user) {
    console.log("Yes, it's not");
    return <Navigate to="/auth" replace />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
