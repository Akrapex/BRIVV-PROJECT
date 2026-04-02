import { useState } from "react";
import { ShieldCheck, Smartphone as PhoneIcon } from "lucide-react";
import SettingsFooter from "../../components/SettingsFooter";
import LoginActivity from "../../components/Security/LoginActivity";
import ChangePassword from "../../components/Security/ChangePassword";
import TwoFactorAuth from "../../components/Security/TwoFactorAuth";

const AccountSecurity = () => {
  const [twoFactor, setTwoFactor] = useState({
    authenticator: true,
    sms: false,
  });

  return (
    <div className="min-h-screen w-full bg-white p-6 md:p-10 font-sans text-slate-900">
      <div className="w-full max-w-250 mx-auto space-y-8">
        {/* Header Banner */}
        <header className="flex flex-col md:flex-row md:items-center justify-between p-6 border border-slate-200 rounded-2xl bg-white">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Account Security
            </h1>
            <p className="text-slate-500 text-sm">
              Manage your password, authentication, and monitor your session
              activity.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-1.5 bg-[#f1f4e9] border border-[#dce6c4] rounded-full text-[#5e7a21] text-xs font-bold uppercase tracking-widest">
            <ShieldCheck size={14} /> Account Secure
          </div>
        </header>

        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Change Password Section */}
          <ChangePassword />

          {/* Two-Factor Auth Section */}
          <TwoFactorAuth
            authenticator={twoFactor.authenticator}
            sms={twoFactor.sms}
            setTwoFactor={setTwoFactor}
          />
        </div>

        {/* Login Activity Table */}
        <LoginActivity />

        {/* Delete Account */}
        <div className="bg-[#fff1f1] rounded-2xl p-6 border border-[#fee2e2] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-bold text-red-800">Delete Account</p>
            <p className="text-sm text-red-600/70 mt-1">
              Once you delete your account, all data will be permanently
              removed.
            </p>
          </div>
          <button className="button-transparent">Deactivate Account</button>
        </div>

        {/* Footer copyright */}
        <SettingsFooter />
      </div>
    </div>
  );
};

export default AccountSecurity;
