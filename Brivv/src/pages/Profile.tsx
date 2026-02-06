import { Outlet } from "react-router";
import SideNav from "../components/SideNav";

export default function Profile() {
  return (
    <>
      <div className="flex flex-row">
        <SideNav />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
