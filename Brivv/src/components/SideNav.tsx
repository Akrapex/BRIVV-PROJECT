import {
  HiHome,
  HiBuildingOffice2,
  HiBookOpen,
  HiBolt,
  HiCog6Tooth,
  HiSquares2X2,
} from "react-icons/hi2";
import { IoArrowBack } from "react-icons/io5";

export default function SideNav() {
  return (
    <aside className="h-screen w-64 shadow-sm bg-white flex flex-col justify-between">
      {/* Logo */}
      <div>
        <div className="flex items-center gap-3 px-6 py-6">
          <IoArrowBack />
          <div className="h-10 w-10 rounded-lg bg-[#EAF3D6] flex items-center justify-center">
            <HiSquares2X2 className="text-[#6B8E23]" size={20} />
          </div>
          <div>
            <h1 className="text-sm font-semibold text-slate-900">Brivv</h1>
            <p className="text-xs text-slate-500">Management Portal</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-4 space-y-1 px-3">
          <NavItem icon={HiHome} label="Dashboard" active/>
          <NavItem icon={HiBuildingOffice2} label="Properties" />
          <NavItem icon={HiBookOpen} label="Education" />
          <NavItem icon={HiBolt} label="Utilities"  />
          <NavItem icon={HiCog6Tooth} label="Settings" />
        </nav>
      </div>

      {/* User */}
      <div className="border-t px-6 py-4 flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/40"
          alt="User avatar"
          className="h-10 w-10 rounded-full"
        />
        <div>
          <p className="text-sm font-medium text-slate-900">Alex Johnson</p>
          <p className="text-xs text-slate-500">Unit 402, B-Block</p>
        </div>
      </div>
    </aside>
  );
}

function NavItem({ icon: Icon, label, active = false }) {
  return (
    <button
      className={`flex w-full items-center gap-3 rounded-lg px-4 py-2 text-sm transition \
        ${
          active
            ? "bg-[#F1F6E8] text-[#6B8E23] font-medium"
            : "text-slate-600 hover:bg-slate-100"
        }`}
    >
      <Icon size={18} />
      {label}
    </button>
  );
}
