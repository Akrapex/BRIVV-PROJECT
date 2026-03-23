import { Outlet, useNavigate } from "react-router";
import SideNav from "../SideNav";
import { useAuth } from "../../Contexts/AuthContext";
import { useEffect } from "react";

function DashboardLayout() {
  const { session } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!session?.user) navigate("/auth");
  }, [session, navigate]);

  return (
    <main className="relative flex bg-[#f7f8f6]">
      <SideNav />
      <section className="grow">
        <Outlet />
      </section>
    </main>
  );
}

export default DashboardLayout;
