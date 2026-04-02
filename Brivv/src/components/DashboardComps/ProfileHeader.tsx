import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { GoQuestion } from "react-icons/go";
import { useState } from "react";
import { useAuth } from "../../Contexts/AuthContext";
import { Menu, X } from "lucide-react";
import logo from "/images/logo.png";

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
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-20 py-3">
        {/* Logo (mobile only) */}
        <img src={logo} alt="logo" className="w-20 block md:hidden" />

        {/* Search (desktop only) */}
        <form className="hidden lg:flex px-4 items-center gap-3 bg-[#E7EDF3] rounded-lg">
          <AiOutlineSearch color="#4C739A" />
          <input
            type="text"
            placeholder="Search properties, guides..."
            className="py-3 focus:outline-0 w-50 placeholder:text-[#4C739A] bg-transparent"
          />
        </form>

        {/* Right section */}
        <div className="flex items-center gap-4 ml-auto">
          {/* Desktop icons */}
          <div className="hidden lg:flex items-center gap-4 relative">
            <span className="relative flex items-center justify-center w-10 h-10 bg-[#E7EDF3] rounded-lg cursor-pointer">
              <i className="block absolute top-2 right-2.5 w-2 h-2 border-2 border-white bg-[#EF4444]"></i>
              <IoMdNotificationsOutline size={22} />
            </span>

            <span className="flex items-center justify-center w-10 h-10 bg-[#E7EDF3] rounded-lg cursor-pointer">
              <GoQuestion size={22} />
            </span>

            {/* Profile */}
            <span
              onClick={() => setShowDropdown((prev) => !prev)}
              className="relative flex items-center justify-center w-10 h-10 cursor-pointer rounded-full overflow-hidden"
            >
              <img src="https://i.pravatar.cc/40" className="w-full h-full" />
            </span>

            {/* Dropdown */}
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

          {/* Mobile Toggle */}
          <button onClick={toggleMenu} className="lg:hidden">
            {isOpen ? (
              <X size={26} color="#6B8E23" />
            ) : (
              <Menu size={28} color="#6B8E23" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU (same pattern as PropertiesHeader) */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4 border-t border-[#E7EDF3] bg-white">
          {/* Search */}
          <form className="mt-4 mb-6 px-4 flex items-center gap-3 bg-[#E7EDF3] rounded-lg">
            <AiOutlineSearch color="#4C739A" />
            <input
              type="text"
              placeholder="Search properties, guides..."
              className="py-3 focus:outline-0 w-full placeholder:text-[#4C739A] bg-transparent"
            />
          </form>

          {/* Menu Items */}
          <nav className="flex flex-col items-center gap-6 text-lg font-semibold">
            <span className="flex items-center gap-2">
              <IoMdNotificationsOutline size={22} />
              Notifications
            </span>

            <span className="flex items-center gap-2">
              <GoQuestion size={22} />
              Help
            </span>

            <span
              onClick={handleSignOut}
              className="flex items-center gap-2 cursor-pointer"
            >
              <CiLogout size={22} />
              Log Out
            </span>
          </nav>
        </div>
      )}
    </header>
  );
}

export default ProfileHeader;
