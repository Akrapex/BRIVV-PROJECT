import { useState } from "react";
import { Link } from "react-router";
import { navLink } from "../constant/navLinks";
import { Menu, X } from "lucide-react";

function PropertiesHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="w-full bg-white border-b border-tertiary">
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-20 py-3">
        {/* Logo */}
        <Link to="/">
          <img src="/images/logo.png" alt="logo" className="w-16 md:w-18" />
        </Link>

       
        <div className="flex items-center gap-4">
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLink.map((link) => (
              <li key={link.name} className="list-none">
                <button className="hover:opacity-80 transition">
                  {link.name}
                </button>
              </li>
            ))}
          </nav>
          {/* Save button */}
          <button className="hidden sm:block py-2 px-4 border border-[#6B8E23] text-sm font-bold text-[#6B8E23] rounded-lg">
            Save as Draft
          </button>

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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4">
          <nav className="flex justify-center flex-col items-center mx-auto gap-6 text-lg font-semibold">
            {navLink.map((link) => (
              <button
                key={link.name}
                className="text-left py-2 "
              >
                {link.name}
              </button>
            ))}

            {/* Mobile Save Button */}
            <button className="mt-2 py-2 px-4 border border-[#6B8E23] text-sm font-bold bg-[#6B8E23] text-white rounded-lg w-full">
              Save as Draft
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default PropertiesHeader;
