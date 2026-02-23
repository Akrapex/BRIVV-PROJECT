import React from "react";

const AccountSecurity: React.FC = () => {
  return (
    <main className=" flex-1 space-y-8 p-6">
      {/* Security Header */}
      <div className="flex md:items-center p-6 rounded-2xl bg-white border-gray-800 shadow-lg w-250 justify-between gap-6 border border-slate-100 dark:border-slate-200">
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
                className="w-full bg-slate-100 focus:border-green-400 rounded-lg px-4 py-2"
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

      {/* Footer */}
      <footer className="py-10 border-t border-slate-200 dark:border-slate-800">
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