import { MdAddCard } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { CiWallet } from "react-icons/ci";
import { MdOutlinePayments } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { TfiCreditCard } from "react-icons/tfi";
import { AiFillBank } from "react-icons/ai";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { MdVerifiedUser } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdAutorenew } from "react-icons/md";



export default function PaymentDashboard() {
  return (
    <main className="p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-slate-900 dark:text-slate-950 text-4xl font-black leading-tight tracking-tight mb-3">
            Payment Methods
          </h1>
          <p className="text-slate-500 dark:text-slate-600 text-base max-w-xl font-bold">
            Manage your secure payment sources for property purchases, monthly rent, and education subscriptions.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-green-400 hover:bg-green-600 text-background-dark font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-green-500/20">
          <MdAddCard className="text-3xl text-green-800"  />
          <span>Add New Card</span>
        </button>
      </div>

      {/* Saved Cards Section */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-slate-900 dark:text-slate-800 text-xl font-bold flex items-center gap-2">
            <TfiCreditCard className="text-3xl text-green-400" />
            Saved Cards
          </h2>
          <div className="flex gap-2">
            <button className="size-8 rounded-full bg-white dark:bg-slate-100 border border-slate-200  flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-50">
              <FaArrowLeftLong className="text-xl" />
            </button>
            <button className="size-8 rounded-full bg-white dark:bg-slate-100 border  flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-50">
              <FaArrowRight className="text-xl" />
            </button>
          </div>
        </div>

        {/* Cards Grid/Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="card-gradient-1 bg-green-400 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl p-4 w-80 h-48 flex flex-col justify-between text-white shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
              <CiWallet className="text-6xl" />
            </div>
            <div className="flex justify-between items-start">
              <div className="font-bold text-lg">Main Card</div>
              <img
                className="h-4 filter brightness-0 invert"
                data-alt="Visa logo white version"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuClmjjKhEPzWLmsaPCyshgaHYsYhEyCNuKueAdjLV5Onq18gCQv0Z0X8NfNwxPOASZo6YeEP6sAReYGwkGFNo7pntyGoNAa_EUh-6VYDQmYKU8ihjtB0hSoKCKEc8wFjhddskVLfWADjrVEZHNeHxukgVYSuSyGvfV6zUdpnL8_pz-t5395CcM_mA_MTIrLnMpx1AIihn8PK2eayNOclhqyUglY1rEOsZPaQJCwJCARGEYRsN-C_O8zz_Jzv9E11neIi2c2QZB9JTTy"
                alt="Visa logo"
              />
            </div>
            <div>
              <div className="text-xl font-mono tracking-widest mb-4">•••• •••• •••• 4242</div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] uppercase opacity-70">Card Holder</p>
                  <p className="font-semibold text-sm">ALEXANDER RIVERA</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase opacity-70">Expires</p>
                  <p className="font-semibold text-sm">12/26</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card-gradient-2 bg-slate-950 bg-gradient-to-r from-slate-700 to-slate-950 rounded-2xl p-6 w-80 h-48 flex flex-col justify-between text-white shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
              <MdOutlinePayments className="text-6xl" />
            </div>
            <div className="flex justify-between items-start">
              <div className="font-bold text-lg">Business</div>
              <img
                className="h-8"
                data-alt="Mastercard logo"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzN6sB0U-fhHKimVGqrAP6Mezv4pf4vwQ7uDeJFfjpjipMzD5ha5Xq88N29f1oUe9xu4YefkU7LkMStD_ILOaExAomAqnDWXOajbnSJWiVZPxhvYiDIpbl42agFPEB6efdG17JS2l4muDpCoZ7BFDlToMKAsg_QrjJ4iKP9xykh0BLNouQyElpXFuqB5aAxs5kJD0WPZ5RDlmb9YpVbkKX6m8rOwATMjJCJOG_VJb-FTe_F74MEdxsx_uCeDGqaj-OWxF5B1RYWO4Z"
                alt="Mastercard logo"
              />
            </div>
            <div>
              <div className="text-xl font-mono tracking-widest mb-4">•••• •••• •••• 8890</div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] uppercase opacity-70">Card Holder</p>
                  <p className="font-semibold text-sm">RIVERA ESTATE HOLDINGS</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase opacity-70">Expires</p>
                  <p className="font-semibold text-sm">10/25</p>
                </div>
              </div>
            </div>
          </div>

          {/* Add New Placeholder */}
          <button className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-6 w-75 h-48 flex flex-col items-center justify-center gap-3 text-slate-500 hover:border-primary hover:text-primary transition-all group">
            <div className="size-12 rounded-full bg-slate-100 dark:bg-slate-100 flex items-center justify-center group-hover:bg-primary/20">
              <CiCirclePlus className="text-6xl" />
            </div>
            <span className="font-semibold">Add Payment Method</span>
          </button>
        </div>
      </section>

      {/* Bank Accounts & Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Bank Accounts Section */}
        <section className="lg:col-span-2">
          <div className="bg-slate-100 rounded-2xl w-165 p-6 shadow-xl border border-slate-200 dark:border-slate-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-slate-900 dark:text-slate-950 text-lg font-bold flex items-center gap-2">
                <AiFillBank className="text-green-500 text-3xl" />
                Direct Utility &amp; Rent Payments
              </h2>
              <a className="text-primary text-sm font-semibold hover:underline" href="#">
                Link Bank Account
              </a>
            </div>

            <div className="space-y-4">
              {/* Bank Row 1 */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-200 border border-slate-100 ">
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-lg bg-white dark:bg-slate-100 flex items-center justify-center border border-slate-200 dark:border-slate-200">
                    <AiFillBank className="text-3xl text-blue-700" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-slate-950">Chase Personal Checking</p>
                    <p className="text-xs text-slate-500">Connected for Monthly Rent &amp; Water Bills</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-2 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">Verified</span>
                  <button className="text-slate-400 hover:text-slate-600">
                    <IoEllipsisVerticalSharp className="text-xl text-slate-500" />
                  </button>
                </div>
              </div>

              {/* Bank Row 2 */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-200 border border-slate-100 ">
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-lg bg-white dark:bg-slate-100 flex items-center justify-center border border-slate-200 dark:border-slate-200">
                    <AiFillBank className="text-3xl text-red-700" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-slate-950">Wells Fargo Savings</p>
                    <p className="text-xs text-slate-500">Backup payment source</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-2 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">Verified</span>
                  <button className="text-slate-400 hover:text-slate-600">
                    <IoEllipsisVerticalSharp className="text-xl text-slate-500" />
                  </button>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="mt-6 flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/20">
              <MdVerifiedUser className="text-3xl text-green-900" />
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-slate-950">Secure Bank Linking</p>
                <p className="text-[15px] text-slate-600 dark:text-slate-600 leading-relaxed p-2">
                  Your bank credentials are never stored on our servers. We use 256-bit AES encryption to keep your data safe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="bg-white dark:bg-white rounded-2xl w-75 p-6 shadow-sm border border-slate-200 ">
            <h3 className="text-slate-900 dark:text-slate-950 font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <a className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-200 transition-colors group" href="#">
                <div className="flex items-center gap-5">
                  <FaHistory className="text-xl text-slate-500" />
                  <span className="text-[15px] font-medium">Transaction History</span>
                </div>
                <MdKeyboardArrowRight className="text-2xl text-slate-500" />
              </a>
              <a className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-200 transition-colors group" href="#">
                <div className="flex items-center gap-5">
                  <CiLocationOn className="text-2xl text-slate-500" />
                  <span className="text-[15px] font-medium">Billing Address</span>
                </div>
                <MdKeyboardArrowRight className="text-2xl text-slate-500" />
              </a>
              <a className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-200 transition-colors group" href="#">
                <div className="flex items-center gap-5">
                  <MdAutorenew className="text-2xl text-slate-500" />
                  <span className="text-sm font-medium">Auto-pay Settings</span>
                </div>
                <MdKeyboardArrowRight className="text-2xl text-slate-500" />
              </a>
            </nav>
          </div>

          <div className="bg-slate-950 text-white rounded-2xl w-64 p-6 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-bold text-lg mb-2">Real Estate Academy</h3>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Get 20% off your next property investment course when you pay with a verified bank account.
              </p>
              <button className="w-full py-2 bg-primary text-background-dark font-bold rounded-lg text-sm hover:opacity-90 transition-opacity">
                Browse Courses
              </button>
            </div>
            <div className="absolute -bottom-4 -right-4 size-24 bg-primary/20 rounded-full blur-2xl"></div>
          </div>
        </aside>
      </div>
    </main>
  );
}
