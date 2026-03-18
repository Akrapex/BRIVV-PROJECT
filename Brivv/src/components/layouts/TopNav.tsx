import { RiNotification4Fill } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import { IoIosAdd, IoMdNotificationsOutline } from "react-icons/io";
import { Link, Outlet, useParams } from "react-router";
import { useLocation } from "react-router";
import { GoQuestion } from "react-icons/go";
import { AiOutlineSearch } from "react-icons/ai";

function TopNav() {
  let isVisible = true;

  let path = useLocation();
  console.log(path.pathname);

  if (path.pathname === "/properties") {
    isVisible = false;
  }

  return (
    <>
      <div className="sticky top-0 z-10 py-3 px-10 flex items-center justify-between bg-white border-l border-b border-[#E7EDF3]">
        <form className="px-4 flex items-center gap-3 bg-[#E7EDF3] w-fit rounded-lg">
          <AiOutlineSearch color="#4C739A" />
          <input
            type="text"
            placeholder="Search properties, guides..."
            className="py-3 focus:outline-0 w-50 placeholder:text-[#4C739A]"
          />
        </form>

        <div className="flex items-center gap-4">
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
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default TopNav;
