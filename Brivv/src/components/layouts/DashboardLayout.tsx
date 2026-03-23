import { Outlet } from "react-router";
import SideNav from "../SideNav";

function DashboardLayout() {
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
