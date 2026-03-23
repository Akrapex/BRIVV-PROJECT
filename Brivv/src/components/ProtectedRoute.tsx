import { useAuth } from "../Contexts/AuthContext";
import { useNavigate } from "react-router";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { session } = useAuth();
  const navigate = useNavigate();

  if (session === undefined) return;

  const isAuthenticated = !!session?.user?.email_confirmed_at;

  if (!session?.user || !isAuthenticated) navigate("/auth");

  return <>{children}</>;
}

export default ProtectedRoute;
