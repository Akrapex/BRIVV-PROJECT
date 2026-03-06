
import TopNav from "../components/layouts/TopNav";
import Footer from "../components/propertyDetailsProfile/Footer";
import Herosection from "../components/propertyDetailsProfile/Herosection";
import ModernOakVilla from "../components/propertyDetailsProfile/ModernOakVilla";

export default function Profile() {
  return (
    <>
    <TopNav/>
    <Herosection/>
    <ModernOakVilla/>
    <Footer/>
      {/* <div className="flex flex-row">
        <SideNav />
        <div>
          <Outlet />
        </div>
      </div> */}
    </>
  );
}
