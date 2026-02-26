import React from "react";

const AccountSecurity: React.FC = () => {
  return (
    <main className=" flex-1 space-y-8 p-6">
      {/* Security Header */}
      <div className="flex md:items-center p-6 rounded-2xl bg-white shadow-lg w-250 justify-between gap-6 border border-slate-100 dark:border-slate-200">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-black">
            Account Security
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            Manage your password, authentication, and monitor your session activity.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-primary/10 px-4 py-2 rounded-full shadow-sm hover:bg-green-200">
          <span className="material-icons text-primary text-sm dark:text-green-500 hover:bg-green-800">
            verified_user
          </span>
          <span className="text-primary text-sm font-semibold uppercase tracking-wider dark:text-green-500 hover:text-white">
            Account Secure
          </span>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Change Password */}
        <section className="bg-white rounded-2xl p-6 border border-slate-00 dark:border-slate-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-slate-100  rounded-lg">
              <span className="material-icons text-slate-600 dark:text-slate-400">
                lock_reset
              </span>
            </div>
            <h2 className="text-lg font-bold">Change Password</h2>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Current Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-slate-100 rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                New Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-slate-100  rounded-lg px-4 py-2"
              />
              <p className="text-[10px] text-slate-500 mt-1 uppercase">
                At least 8 characters, one number and one special char
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Confirm New Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-slate-100 rounded-lg px-4 py-2"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-primary/90 text-white font-bold py-2.5 rounded-lg shadow-md"
            >
              Update Password
            </button>
          </form>
        </section>

        {/* Two Factor Authentication */}
        <section className="bg-white rounded-2xl p-6 shadow-md border border-slate-00 dark:border-slate-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-slate-100 rounded-lg">
              <span className="material-icons text-slate-600 dark:text-slate-400">
                phonelink_lock
              </span>
            </div>
            <h2 className="text-lg font-bold">Two-Factor Auth</h2>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-sm">Authenticator App</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Use an app like Google Authenticator or 1Password.
                </p>
              </div>
              <input type="checkbox" className="h-5 w-5 accent-primary" defaultChecked />
            </div>

            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-sm">SMS Verification</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Receive a security code via text message.
                </p>
              </div>
              <input type="checkbox" className="h-5 w-5 accent-primary" />
            </div>
            
            <div className="p-4 border border-green-200 dark:bg-green-100 rounded-xl mt-4">
              <div className="flex gap-3">
                <span className="material-icons text-green-500 text-3xl">info</span>

                <div>
                  <p className="text-[18px] text-primary font-semibold">
                    Backup Codes
                  </p>

                  <p className="text-[13px] text-slate-500 mt-0.5">
                    You have 10 unused backup codes remaining.
                  </p>

                  <button className="text-[11px] font-bold text-green-500 mt-2 uppercase tracking-wide">
                    Download Codes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* {Login Activity} */}
      <section className="bg-white rounded-2xl border border-slate-100 dark:border-slate-300 overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-300 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-100 rounded-lg">
              <span className="material-icons text-slate-600 dark:text-slate-400">history</span>
            </div>
            <h2 className="text-lg font-bold">Login Activity</h2>
          </div>

          <button className="text-xs font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-wider">
            Log out of all devices
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-100">
                <th className="px-6 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Device</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">IP Address</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Last Activity</th>
                <th className="px-6 py-3 text-right text-xs font-bold text-slate-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 dark:divide-slate-200">

              {/* Row 1 */}
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <span className="material-icons text-slate-400 text-lg">desktop_windows</span>
                    <div>
                      <p className="text-sm font-semibold">Windows PC • Chrome</p>
                      <p className="text-[10px] text-green-400 font-bold uppercase">This Device</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">San Francisco, CA</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">192.168.1.45</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">Active Now</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button className="text-xs font-bold text-slate-300 cursor-not-allowed">
                    Current Session
                  </button>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <span className="material-icons text-slate-400 text-lg">smartphone</span>
                    <div>
                      <p className="text-sm font-semibold">iPhone 14 Pro • App</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-tight">Mobile</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400">Los Angeles, CA</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400">172.58.12.9</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400">Oct 24, 2:15 PM</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button className="text-xs font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 px-3 py-1 rounded-md transition-all">
                    Sign out
                  </button>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <span className="material-icons text-slate-400 text-lg">laptop_mac</span>
                    <div>
                      <p className="text-sm font-semibold">MacBook Air • Safari</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-tight">Laptop</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400">New York, NY</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400">104.16.24.111</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400">Oct 20, 09:44 AM</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button className="text-xs font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 px-3 py-1 rounded-md transition-all">
                    Sign out
                  </button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </section>

      {/* {Additional Security Controls} */}
      <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-200 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h3 className="font-bold text-red-400 dark:text-red-400">
            Delete Account
          </h3>
          <p className="text-xs text-red-400 dark:text-red-500 mt-1">
            Once you delete your account, all data will be permanently removed.
          </p>
        </div>

        <button className="border border-red-200 dark:border-red-200 hover:bg-red-100 dark:hover:bg-red-900/30 text-red-400 dark:text-red-400 font-bold px-6 py-2 rounded-lg transition-all text-sm">
          Deactivate Account
        </button>
      </div>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-200 dark:border-slate-300">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © 2026 BRIVV  Platform. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-slate-400 hover:text-primary transition-colors uppercase tracking-widest font-bold">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-slate-400 hover:text-primary transition-colors uppercase tracking-widest font-bold">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-slate-400 hover:text-primary transition-colors uppercase tracking-widest font-bold">
              Security Whitepaper
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default AccountSecurity;