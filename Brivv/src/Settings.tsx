import { Outlet } from "react-router";
import SideNavSub from "./components/SideNavSub";

export default function Settings() {
  return (
    <div className="flex flex-row">
      <SideNavSub />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
