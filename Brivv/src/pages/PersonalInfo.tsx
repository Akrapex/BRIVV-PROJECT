import { MdOutlineModeEdit, MdOutlineNotificationsActive } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { MdContacts } from "react-icons/md";
import { MdOutlineWallet } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { IoCardOutline } from "react-icons/io5";
import { RiDeleteBin6Line, RiShieldUserFill } from "react-icons/ri";
import { HiOutlineBolt } from "react-icons/hi2";



const PersonalInfo = () => {
  return (
    <div className="flex-1 p-6 lg:p-10 bg-slate-50">
      {/* Page Heading */}
      <div className="flex flex-wrap justify-between items-end gap-2 mb-8 w-235">
        <div className="flex min-w-15 flex-col gap-2">
          <h2 className="text-slate-900 dark:text-slate-950 text-4xl font-black tracking-tight">
            Personal Information
          </h2>
          <p className="text-slate-500 dark:text-slate-600 text-base">
            Update your contact details and residency information.
          </p>
        </div>

        <button className="bg-primary hover:bg-primary/90 text-slate-900 font-bold py-2 px-6 rounded-lg text-sm transition-all shadow-md">
          Save Changes
        </button>
      </div>

      {/* Profile Header */}
      <div className="bg-white  border border-slate-100 shadow-xl rounded-xl p-6 mb-8 w-240">
        <div className="flex gap-6 items-center">
          <div className="relative group">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-full size-24 md:size-32 border-4 border-slate-100"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCgexhhRLBxUmYrkCgOco0sFfDSwrOi4uMZyRbPLggAiiqf4iCZZUKKAbqrxrTkhiFFanFJ2MNgMiFdxtR3rbBON2PAqMTQBDBJQYhw4o3KIKb0MZID-5AfzatXXzqhI1GEDcyruGIhRuBwq1oP5gO7MRiuNHkxp9pNDw-3MuNDZI7Id234-zS7nLsaWavoSx8dOEjriFxOjdRXC24t1HEjClUEX1pB18LNfgE6qAyVt-lul1hJmYla2v4rAzze2y_sYWcNNQG_TkiH")',
              }}
            />
            <button className="absolute bottom-0 right-0 bg-primary size-10 rounded-full flex items-center justify-center text-slate-900 border-4 border-white dark:border-slate-900 shadow-lg">
              <MdOutlineModeEdit className="text-2xl text-green-950" />
            </button>
          </div>

          <div className="flex flex-col">
            <p className="text-slate-900 dark:text-slate-950 text-2xl font-bold">
              Alex Johnson
            </p>

            <p className="text-slate-500 dark:text-slate-800 text-sm flex items-center gap-1">
              <CiMail className="text-sm text-slate-800" />
              alex.johnson@estateflow.com
            </p>

            <p className="text-slate-500 dark:text-slate-800 text-sm mt-1">
              Tenant • Joined October 2023
            </p>

            <div className="mt-3 flex gap-2">
              <span className="bg-primary/10 text-primary text-[11px] font-bold uppercase px-2 py-1 rounded">
                Verified Buyer
              </span>

              <span className="bg-slate-100 dark:bg-slate-200 text-slate-600 dark:text-slate-800 text-[11px] font-bold uppercase px-2 py-1 rounded">
                Early Access
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <MdContacts className="text-2xl text-green-800" />
            <h3 className="text-lg font-bold">Contact Details</h3>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase">
                Full Name
              </label>
              <input
                className="w-135 rounded-lg border-slate-200 dark:border-slate-200 shadow-xs bg-white border h-10 p-2"
                type="text"
                defaultValue="Alex Johnson"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase">
                Email Address
              </label>
              <input
                className="w-135 rounded-lg border-slate-200 dark:border-slate-200 shadow-xs bg-white border h-10 p-2"
                type="email"
                defaultValue="alex.johnson@estateflow.com"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase">
                Phone Number
              </label>

              <div className="flex gap-2">
                <select className="w-14 rounded-lg border-slate-200 dark:border-slate-200 shadow-xs bg-white border h-10 p-2">
                  <option>+1</option>
                  <option>+234</option>
                  <option>+44</option>
                </select>

                <input
                  className="w-120  rounded-lg border-slate-200 dark:border-slate-200 shadow-xs bg-white border h-10 p-2"
                  type="tel"
                  defaultValue="555-0123"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="space-y-3">
          <div className="flex items-center mb-2 gap-2">
            <MdOutlineNotificationsActive className="text-2xl text-green-600" />
            <h3 className="text-lg font-bold">Notifications</h3>
          </div>

          <div className="space-y-2 w-90 h-45 bg-white p-5 rounded-xl border border-slate-200 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[15px] font-bold">Property Alerts</p>
                <p className="text-[12px] text-slate-500">
                  Get notified when new matches appear.
                </p>
              </div>

              <input
                type="checkbox"
                defaultChecked
                className="w-5 h-5 accent-green-600"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold">Educational Newsletter</p>
                <p className="text-xs text-slate-500">
                  Weekly tips on property investment.
                </p>
              </div>

              <input
                type="checkbox"
                defaultChecked
                className="w-5 h-5 accent-green-600"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold">Billing & Invoices</p>
                <p className="text-xs text-slate-500">
                  Utility bills and rent reminders.
                </p>
              </div>

              <input type="checkbox" className="w-5 h-5 accent-green-600" />
            </div>
          </div>
        </div>
      </div>

         {/* Payment Methods Section */}
      <div className="mt-12">
        <div className="w-235 flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <MdOutlineWallet className="text-3xl text-green-700" />
            <h3 className="text-2xl font-bold">Payment Methods</h3>
          </div>

          <button className="text-primary hover:text-primary/80 text-sm font-bold flex items-center gap-1">
            <IoMdAdd className="text-2xl text-green-700" />
            Add New
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Card 1 */}
          <div className=" w-130 flex items-center justify-between p-4 bg-white  border border-slate-200 shadow-xl rounded-xl">
            <div className="flex items-center gap-4">
              <div className="size-10 bg-slate-100 dark:bg-slate-200 rounded flex items-center justify-center">
                <IoCardOutline className="text-2xl text-slate-400" />
              </div>

              <div>
                <p className="text-sm font-bold">Visa ending in 4242</p>
                <p className="text-xs text-slate-500">
                  Expires 12/25 • Primary for Utilities
                </p>
              </div>
            </div>

            <button className="text-slate-400 hover:text-red-500 transition-colors">
              <RiDeleteBin6Line className="text-2xl text-slate-400" />
            </button>
          </div>

          {/* Utility / Airtime */}
          <div className="w-96 flex items-center justify-between p-4 bg-primary/5 border border-primary/20 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="size-10 bg-primary/20 rounded flex items-center justify-center text-primary">
                <HiOutlineBolt className="text-2xl text-green-600" />
              </div>

              <div>
                <p className="text-sm font-bold">Auto-Pay Utilities</p>
                <p className="text-xs text-primary/80">
                  Active for Electricity & Airtime
                </p>
              </div>
            </div>

            <button className="text-primary font-bold text-xs uppercase hover:underline">
              Manage
            </button>
          </div>
        </div>
      </div>

      {/* Privacy & Security Notice */}
      <div className="w-240 mt-12 p-6 bg-slate-100 rounded-xl flex flex-col md:flex-row gap-6 items-center shadow-xl">
        <div className="size-16 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
          <RiShieldUserFill className="text-3xl text-green-700" />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h4 className="font-bold text-slate-900 dark:text-slate-950 mb-1">
            Your data is secured with EstateFlow
          </h4>

          <p className="text-sm text-slate-500">
            We use industry-standard encryption to protect your personal
            information and transaction history. You can manage data sharing
            preferences in the{" "}
            <a className="text-primary hover:underline" href="#">
              Privacy Tab
            </a>
            .
          </p>
        </div>

        <button className="whitespace-nowrap bg-white dark:bg-white border border-slate-200  text-slate-950 dark:text-slate-950 font-bold py-2 px-6 rounded-lg text-sm hover:bg-slate-50 transition-colors shadow-sm">
          View Privacy Policy
        </button>
      </div>

      <footer className="mt-5 border-t border-slate-200 dark:border-slate-200 py-2">
      <div className="max-w-200 mx-auto px-2 text-center">
        <p className="text-slate-400 text-xs">
          © 2026 EstateFlow Real Estate Platform. All rights reserved.
        </p>
      </div>
    </footer>
    </div>

  );
};

export default PersonalInfo;