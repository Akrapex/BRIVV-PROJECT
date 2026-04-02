import { IoMdNotificationsOutline } from "react-icons/io";
import { Link, Outlet, useLocation } from "react-router";
import { GoQuestion } from "react-icons/go";
import logo from "/images/logo.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function TopNav() {
  let isVisible = true;
  const [isOpen, setIsOpen] = useState(false);

  let path = useLocation();

  if (path.pathname === "/properties") {
    isVisible = false;
  }

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      
      <header className="w-full bg-white border-b border-tertiary sticky top-0 z-999">
        <div className="flex items-center justify-between px-4 md:px-8 lg:px-16 py-3 bg-white">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img src={logo} alt="" className="w-12 md:w-14" />
            {"Brivv"}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link to={"/dashboard"}>Dashboard</Link>
              <Link to={"/messages"}>message</Link>

              <span className="relative flex items-center justify-center w-10 h-10 bg-[#E7EDF3] rounded-lg cursor-pointer">
                <i className="block absolute top-2 right-2.5 w-2 h-2 border-2 border-white bg-[#EF4444]"></i>
                <IoMdNotificationsOutline size={22} />
              </span>

              <span className="relative flex items-center justify-center w-10 h-10 bg-[#E7EDF3] rounded-lg cursor-pointer">
                <GoQuestion size={22} />
              </span>

              <span className="relative flex items-center justify-center w-10 h-10 cursor-pointer rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/40" className="w-full h-full" />
              </span>
            </div>

            {/* Mobile Toggle */}
            <button onClick={toggleMenu} className="lg:hidden">
              {isOpen ? (
                <X size={24} color="#6B8E23" />
              ) : (
                <Menu size={28} color="#6B8E23" />
              )}
            </button>
          </div>
        </div>

        
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-tertiary z-999 shadow-lg">
            <nav className="flex flex-col items-center mx-auto gap-6 text-lg font-semibold py-8 bg-white">
              <Link to={"/dashboard"} onClick={toggleMenu}>
                Dashboard
              </Link>

              <Link to={"/messages"} onClick={toggleMenu}>
                message
              </Link>

              <span className="flex items-center gap-2">
                <IoMdNotificationsOutline size={22} />
                Notifications
              </span>

              <span className="flex items-center gap-2">
                <GoQuestion size={22} />
                Help
              </span>

              <span className="flex items-center gap-2">
                <img
                  src="https://i.pravatar.cc/40"
                  className="w-8 h-8 rounded-full"
                />
                Profile
              </span>
            </nav>
          </div>
        )}
      </header>

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default TopNav;
