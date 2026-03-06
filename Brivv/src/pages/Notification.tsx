import { BiBuildingHouse } from "react-icons/bi";
import { IoIosChatboxes } from "react-icons/io";
import { IoIosTrendingDown } from "react-icons/io";
import { IoReceipt } from "react-icons/io5";
import { MdOutlineBuildCircle } from "react-icons/md";


export default function NotificationPreferences() {
  return (
    <div>
      {/* Page Heading */}
      <div className="flex flex-wrap justify-between gap-6 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-[#0d1b10] dark:text-green text-5xl font-black leading-tight tracking-[-0.033em] mt-10">
            Notification Preferences
          </p>
          <p className="text-green-600 dark:text-green-500 text-base">
            Stay updated on your real estate journey. Choose how and where you
            receive alerts.
          </p>
        </div>
      </div>

      {/* Marketplace Alerts */}
      <h2 className="text-[#0d1b10] dark:text-black-400 text-[22px] font-bold px-4 pb-3 pt-8">
        Marketplace Alerts
      </h2>

      {/* Table */}
      <div className="px-4 py-3">
        <div className="flex overflow-x-auto rounded-xl border border-[#cfe7d3]  bg-white">
          <table className="flex-1 min-w-255">
            <thead>
              <tr className="bg-[#f0f8f1] dark:bg-green-50">
                <th className="px-6 py-4 text-left text-{25px} font-semibold w-[40%]">
                  Notification Type
                </th>
                <th className="px-6 py-4 text-center text-{25px} text-green-800 font-semibold w-[20%]">
                  Push
                </th>
                <th className="px-6 py-4 text-center text-{25px} text-green-800 font-semibold w-[20%]">
                  Email
                </th>
                <th className="px-6 py-4 text-center text-{25px} text-green-800 font-semibold w-[20%]">
                  SMS
                </th>
              </tr>
            </thead>

            <tbody>
              {/* Row 1 */}
              <tr className="border-t border-green-200 hover:bg-[#f8fcf9] transition-colors gap-10">
                <td className="px-6 py-5 text-sm font-semibold">
                  <div className="flex items-center gap-6 font-bold">
                    <BiBuildingHouse className="text-3xl text-green-500"/>
                    New Property Matches
                  </div>
                </td>

                <td className="px-6 py-5 text-center">
                  <input type="checkbox" className="w-4 h-4" defaultChecked />
                </td>

                <td className="px-6 py-5 text-center">
                  <input type="checkbox" className="w-4 h-4" defaultChecked />
                </td>

                <td className="px-6 py-5 text-center">
                  <input type="checkbox" className="w-4 h-4" defaultChecked />
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="border-t border-[#cfe7d3] hover:bg-[#f8fcf9] transition-colors">
                <td className="px-6 py-5 text-sm font-semibold">
                  <div className="flex items-center gap-6 font-bold">
                    <IoIosChatboxes className="text-3xl text-green-500"/>
                    Chat Messages
                  </div>
                </td>

                <td className="px-6 py-5 text-center">
                  <input type="checkbox" className="w-4 h-4" defaultChecked />
                </td>

                <td className="px-6 py-5 text-center">
                  <input type="checkbox" className="w-4 h-4" />
                </td>

                <td className="px-6 py-5 text-center">
                  <input type="checkbox" className="w-4 h-4" />
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="border-t border-[#cfe7d3] hover:bg-[#f8fcf9] transition-colors">
                <td className="px-6 py-5 text-sm font-semibold">
                  <div className="flex items-center gap-6 font-bold">
                    <IoIosTrendingDown className="text-3xl text-green-500"/>
                    Price Drops
                  </div>
                </td>

                <td className="px-6 py-5 text-center">
                  <input type="checkbox" className="w-4 h-4" defaultChecked  />
                </td>

                <td className="px-6 py-5 text-center">
                  <input type="checkbox" className="w-4 h-4" defaultChecked />
                </td>

                <td className="px-6 py-5 text-center">
                  <input type="checkbox" className="w-4 h-4" defaultChecked />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Property Management */}
      <h2 className="text-[#0d1b10] dark:text-green-950 text-[22px] font-bold px-4 pb-3 pt-10">
        Property Management
      </h2>

      {/* Utility Bill Reminder */}
      <div className="p-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-xl border border-[#cfe7d3] bg-white p-6">
          <div className="flex gap-4 items-center">
            <IoReceipt className="text-2xl text-green-500" />

            <div>
              <p className="font-bold text-[20px]">Utility Bill Reminders</p>
              <p className="text-sm text-[#4c9a59] font-xs">
                Get notified 3 days before your rent or utility bills are due.
              </p>
            </div>
          </div>

          <input type="checkbox" className="w-4 h-4" defaultChecked />
        </div>
      </div>

      {/* Maintenance Updates */}
      <div className="px-4 pb-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-xl border border-[#cfe7d3] bg-white p-6">
          <div className="flex gap-4 items-center">
            <MdOutlineBuildCircle className="text-3xl text-green-500 border:bg-green-300 rounded" />

            <div>
              <p className="font-bold text-[20px]">Maintenance Updates</p>
              <p className="text-sm text-[#4c9a59] font-xs">
                Track status changes on your maintenance requests.
              </p>
            </div>
          </div>

          <input type="checkbox" className="w-4 h-4" />
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="p-4 mt-6 border-t border-[#cfe7d3] flex justify-end gap-4">
        <button className="px-6 py-2.5 rounded-lg border border-[#cfe7d3] text-sm font-semibold hover:bg-gray-100">
          Cancel
        </button>

        <button className="px-8 py-2.5 rounded-lg bg-green-600 text-white text-sm font-bold">
          Save Changes
        </button>
      </div>
    </div>
  );
}