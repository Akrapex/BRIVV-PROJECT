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
    <>
      {/* Header */}
      <div className="sticky top-0 z-10 py-3 px-4 md:px-10 flex items-center justify-between bg-white border-l border-b border-[#E7EDF3]">
        {/* Search (hidden on mobile) */}
        <form className="hidden md:flex px-4 items-center gap-3 bg-[#E7EDF3] rounded-lg">
          <AiOutlineSearch color="#4C739A" />
          <input
            type="text"
            placeholder="Search properties, guides..."
            className="py-3 focus:outline-0 w-50 placeholder:text-[#4C739A] bg-transparent"
          />
        </form>

        {/* Right Section */}
        <div className="flex items-center w-full md:w-auto gap-4">
          <img src={logo} alt="" className="w-14 block lg:hidden" />
          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-4 relative">
            <span className="relative flex items-center justify-center w-10 h-10 bg-[#E7EDF3] rounded-lg cursor-pointer">
              <i className="block absolute top-2 right-2.5 w-2 h-2 border-2 border-white bg-[#EF4444]"></i>
              <IoMdNotificationsOutline size={22} />
            </span>

            <span className="relative flex items-center justify-center w-10 h-10 bg-[#E7EDF3] rounded-lg cursor-pointer">
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

          {/* Mobile Toggle (ALWAYS RIGHT) */}
          <button onClick={toggleMenu} className="md:hidden ml-auto">
            {isOpen ? (
              <X size={26} color="#6B8E23" />
            ) : (
              <Menu size={28} color="#6B8E23" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 py-4 bg-white border-b border-[#E7EDF3]">
          {/* Search */}
          <form className="mb-4 px-4 flex items-center gap-3 bg-[#E7EDF3] rounded-lg">
            <AiOutlineSearch color="#4C739A" />
            <input
              type="text"
              placeholder="Search properties, guides..."
              className="py-3 focus:outline-0 w-full placeholder:text-[#4C739A] bg-transparent"
            />
          </form>

          <div className="flex flex-col gap-6 items-start">
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
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileHeader;
