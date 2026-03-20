import { IoMdNotificationsOutline } from "react-icons/io";
import { Link, Outlet } from "react-router";
import { useLocation } from "react-router";
import { GoQuestion } from "react-icons/go";
import logo from "/images/logo.png";
import { CiMenuFries } from "react-icons/ci";

function TopNav() {
  let isVisible = true;

  let path = useLocation();
  console.log(path.pathname);

  if (path.pathname === "/properties") {
    isVisible = false;
  }

  return (
    <>
      <div className="sticky top-0 z-300 py-3 md:px-16 px-5 flex items-center justify-between bg-white border-[#E7EDF3]">
        <div className="flex  items-center space-x-4">
          <img src={logo} alt="" className="w-14 " />
          {"Brivv"}
          {/* <form className="px-4 flex items-center gap-3 bg-[#E7EDF3] w-fit rounded-lg">
            <AiOutlineSearch color="#4C739A" />
            <input
              type="text"
              placeholder="Search properties, guides..."
              className="py-3 focus:outline-0 w-50 placeholder:text-[#4C739A]"
            />
          </form> */}
        </div>

        <div className="flex items-center gap-4">
          <div className="md:flex items-center hidden space-x-3">
            <Link to={"/properties"}>Properties</Link>
            <Link to={"/messages"}>message</Link>
            {/* <Link to={"/dashboard"}>listing</Link> */}
            <span className="relative flex items-center justify-center w-10 h-10 bg-[#E7EDF3] rounded-lg cursor-pointer">
              <i className="block absolute top-2 right-2.5 w-2 h-2 border-2 border-white bg-[#EF4444]"></i>
              <IoMdNotificationsOutline size={22} />
            </span>

            <span className="relative flex items-center justify-center w-10 h-10 bg-[#E7EDF3] rounded-lg cursor-pointer">
              <GoQuestion size={22} />
            </span>

            <span className="relative flex items-center justify-center w-10 h-10  cursor-pointer rounded-full overflow-hidden">
              <img src="https://i.pravatar.cc/40" className="w-full h-full" />
            </span>
          </div>
          <div>
            <CiMenuFries className="md:hidden"/>
          </div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default TopNav;
