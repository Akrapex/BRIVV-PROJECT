import {
  AiOutlineDashboard,
  AiOutlineSearch,
  AiOutlineSetting,
} from "react-icons/ai";
import { IoMdBusiness, IoMdNotificationsOutline } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { GoQuestion } from "react-icons/go";
import { useState } from "react";
import { useAuth } from "../../Contexts/AuthContext";
import { LayoutGrid, Menu, X } from "lucide-react";
import { Link } from "react-router";

function ProfileHeader() {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const { signOutUser } = useAuth();

  const handleSignOut = async () => {
    await signOutUser();
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-[#E7EDF3]">
      <div className="flex items-center px-4 md:px-8 lg:px-20 py-3">
        <div className="flex items-center lg:hidden py-2 w-full">
          <div className="flex items-center justify-between w-full text-[#4C739A]">
            <button onClick={toggleMenu} className="z-[60]">
              {isOpen ? (
                <X size={26} color="#6B8E23" />
              ) : (
                <Menu size={28} color="#6B8E23" />
              )}
            </button>

            <div className="flex items-center gap-4 cursor-pointer">
              <IoMdNotificationsOutline size={20} />
              <GoQuestion size={20} />
            </div>
          </div>
        </div>

        <form className="hidden lg:flex px-4 items-center gap-3 bg-[#E7EDF3] rounded-lg">
          <AiOutlineSearch color="#4C739A" />
          <input
            type="text"
            placeholder="Search properties, guides..."
            className="py-3 focus:outline-0 w-50 placeholder:text-[#4C739A] bg-transparent"
          />
        </form>

        <div className="flex items-center gap-4 ml-auto">
          <div className="hidden lg:flex items-center gap-4 relative">
            <span className="relative flex items-center justify-center w-10 h-10 bg-[#E7EDF3] rounded-lg cursor-pointer">
              <i className="block absolute top-2 right-2.5 w-2 h-2 border-2 border-white bg-[#EF4444]"></i>
              <IoMdNotificationsOutline size={22} />
            </span>

            <span className="flex items-center justify-center w-10 h-10 bg-[#E7EDF3] rounded-lg cursor-pointer">
              <i className="block absolute top-2 right-2.5 w-2 h-2 border-2 border-white bg-[#EF4444]"></i>
              <GoQuestion size={22} />
            </span>

            <span
              onClick={() => setShowDropdown((prev) => !prev)}
              className="relative flex items-center justify-center w-10 h-10 cursor-pointer rounded-full overflow-hidden"
            >
              <img
                src="https://i.pravatar.cc/40"
                className="w-full h-full"
                alt="profile"
              />
            </span>

            <div
              className={`absolute right-0 top-12 ${
                showDropdown
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              } rounded-lg shadow-lg bg-white border border-[#E7EDF3] w-40 transition-all duration-300`}
            >
              <p className="py-2 px-4 text-[14px] hover:bg-[#f7f8f6] cursor-pointer">
                Profile
              </p>
              <p
                onClick={handleSignOut}
                className="py-2 px-4 text-[14px] hover:bg-[#f7f8f6] flex items-center gap-1 cursor-pointer"
              >
                <CiLogout size={22} /> Log Out
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE SIDEBAR MENU (Sliding from left) */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`fixed top-0 left-0 h-full w-[280px] bg-white shadow-xl transition-transform duration-300 ease-in-out px-4 py-16 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search inside side menu */}
          <form className="mb-8 px-4 flex items-center gap-3 bg-[#E7EDF3] rounded-lg">
            <AiOutlineSearch color="#4C739A" />
            <input
              type="text"
              placeholder="Search..."
              className="py-3 focus:outline-0 w-full placeholder:text-[#4C739A] bg-transparent"
            />
          </form>

          {/* Menu Items */}
          <nav className="flex flex-col gap-6 text-lg font-semibold text-[#4C739A]">
            <div className="flex flex-col gap-4 border-b border-[#E7EDF3] pb-4">
              <Link
                to="/dashboard"
                className="flex items-center gap-2 cursor-pointer hover:text-[#6B8E23]"
              >
                <AiOutlineDashboard size={22} />
                Dashboard
              </Link>
              <Link to="/utility" className="flex items-center gap-2 cursor-pointer hover:text-[#6B8E23]">
                <LayoutGrid size={22} />
                Utility
              </Link>
              <Link to="/properties" className="flex items-center gap-2 cursor-pointer hover:text-[#6B8E23]">
                <IoMdBusiness size={22} />
                Property
              </Link>
              <Link to="/setting" className="flex items-center gap-2 cursor-pointer hover:text-[#6B8E23]">
                <AiOutlineSetting size={22} />
                Settings
              </Link>
            </div>

            <span
              onClick={handleSignOut}
              className="flex items-center gap-2 cursor-pointer text-red-500"
            >
              <CiLogout size={22} />
              Log Out
            </span>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default ProfileHeader;
