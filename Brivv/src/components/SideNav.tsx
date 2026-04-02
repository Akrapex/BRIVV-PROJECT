import {
  HiHome,
  HiBuildingOffice2,
  HiBolt,
  HiCog6Tooth,
  HiSquares2X2,
  HiOutlineCreditCard,
} from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  IoArrowBack,
  IoShieldCheckmarkOutline,
  IoNotificationsOutline,
} from "react-icons/io5";
import { HiOutlineLockClosed } from "react-icons/hi";
import { useAuth } from "../Contexts/AuthContext";
import type { IconType } from "react-icons";
import { NavLink } from "react-router";
import { useState } from "react";

type SubItemsType = {
  icon: IconType;
  label: string;
  path: string;
};

interface NavTypes {
  icon?: IconType;
  label?: string;
  path?: string;
  hasDropDown?: boolean;
  subItems?: SubItemsType[];
}

const sideNavData: NavTypes[] = [
  { icon: HiHome, label: "Dashboard", path: "/dashboard" },
  { icon: HiBuildingOffice2, label: "Properties", path: "/properties" },
  { icon: HiBolt, label: "Utilities", path: "utilities" },
  {
    hasDropDown: true,
    subItems: [
      { icon: FaRegUser, label: "Personal Info", path: "settings/profile" },
      {
        icon: IoShieldCheckmarkOutline,
        label: "Account Security",
        path: "settings/account-security",
      },
      {
        icon: IoNotificationsOutline,
        label: "Notification Preferences",
        path: "settings/notification-preferences",
      },
      {
        icon: HiOutlineCreditCard,
        label: "Payment Methods",
        path: "settings/payment-methods",
      },
      { icon: HiOutlineLockClosed, label: "Privacy", path: "settings/privacy" },
    ],
  },
];

export default function SideNav() {
  const [collapseMenu, setCollapseMenu] = useState<boolean>(false);
  const { user } = useAuth();
  const userName = user?.user_metadata?.full_name;

  const activeLink =
    "flex items-center gap-4 px-4 py-3 font-semibold w-full rounded-xl bg-[#6B8E23]/20 hover:bg-[#6B8E23]/30 text-[#6B8E23] transition-all duration-300";
  const normalLink =
    "flex items-center gap-4 px-4 py-3 font-semibold w-full hover:bg-[#6B8E23]/10 rounded-xl text-[#4C739A] transition-all duration-300";

  return (
    <aside className="sticky top-0 h-screen w-64 shadow-sm bg-white  hidden lg:flex flex-col justify-between ">
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
        <nav className="mt-4 grow flex flex-col space-y-1 px-4">
          {/* Navlist */}
          {sideNavData.map((data, index) => {
            const Icon = data.icon;
            return (
              <div key={index}>
                {/* Parent Link */}
                {data.path && (
                  <NavLink
                    to={data.path}
                    end={data.path === "/dashboard"}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    <span className="flex w-full items-center gap-2">
                      {Icon && <Icon />}
                      <span className="mr-auto">{data.label}</span>
                    </span>
                  </NavLink>
                )}

                {data.hasDropDown && (
                  <div
                    className={`${normalLink} cursor-pointer`}
                    onClick={() => setCollapseMenu((prev) => !prev)}
                  >
                    <HiCog6Tooth />
                    <span className="mr-auto">Settings</span>
                    <MdKeyboardArrowRight
                      size={22}
                      className={`transform ${collapseMenu ? "rotate-90" : "rotate-0"} transition-all duration-300`}
                    />
                  </div>
                )}
                {/* Dropdown */}
                {data.hasDropDown && (
                  <div
                    className={`flex pl-5.75 mt-2 min-0 h-0 overflow-hidden transition-all duration-300 ${collapseMenu ? "max-h-fit min-h-fit h-65" : ""}`}
                  >
                    <span className="block w-0.5 bg-[#CFDBE7]"></span>
                    <div className="text-[13px] ml-2.5 space-y-2">
                      {data.subItems?.map((item) => (
                        <NavLink
                          key={item.path}
                          to={item.path}
                          className={({ isActive }) =>
                            isActive
                              ? "flex items-center gap-4 px-4 py-3 font-semibold w-full rounded-xl bg-[#6B8E23] hover:bg-[#648523] text-white transition-all duration-300"
                              : normalLink
                          }
                        >
                          {item.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
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
          <p className="text-sm font-medium text-slate-900">{userName}</p>
          <p className="text-xs text-slate-500">Unit 402, B-Block</p>
        </div>
      </div>
    </aside>
  );
}
