import {
  HiUser,
  HiShieldCheck,
  HiBell,
  HiCreditCard,
  HiLockClosed,
  HiArrowRightOnRectangle,
} from "react-icons/hi2";

export default function SideNavSub() {
  return (
    <aside className="h-full w-64 bg-white px-4 py-6 rounded-xl m-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
      {/* Header */}
      <div className="mb-8 flex items-center gap-3 px-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF3D6]">
          <HiUser className="text-[#6B8E23]" size={20} />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">Settings</p>
          <p className="text-xs text-slate-500">Manage your property profile</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-1">
        <SideItem icon={HiUser} label="Personal Info" active />
        <SideItem icon={HiShieldCheck} label="Account Security" />
        <SideItem icon={HiBell} label="Notification Preferences" />
        <SideItem icon={HiCreditCard} label="Payment Methods" />
        <SideItem icon={HiLockClosed} label="Privacy" />
      </nav>

      {/* Footer */}
      <div className="mt-10 p-4 bg-white rounded-lg shadow-[0_8px_20px_rgba(0,0,0,0.06)]">
        <SideItem icon={HiArrowRightOnRectangle} label="Log Out" danger />
      </div>
    </aside>
  );
}

function SideItem({ icon: Icon, label, active = false, danger = false }) {
  return (
    <button
      className={`flex w-full items-center gap-3 rounded-lg px-4 py-2 text-sm transition
        ${active
          ? "bg-[#6B8E23] text-white font-medium"
          : danger
          ? "text-slate-500 hover:bg-red-50 hover:text-red-600"
          : "text-slate-600 hover:bg-[#F1F6E8] hover:text-[#6B8E23]"}`}
    >
      <Icon size={18} />
      {label}
    </button>
  );
}
