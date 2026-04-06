import { KeyRound } from "lucide-react";
import SecurityCard from "./SecurityCard";

const ChangePassword = () => {
  return (
    <SecurityCard className="space-y-6">
      <h2 className="flex items-center gap-3 font-bold text-lg">
        <span className="p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-600">
          <KeyRound size={20} />
        </span>
        Change Password
      </h2>
      <div className="space-y-4">
        {["Current Password", "New Password", "Confirm New Password"].map(
          (label) => (
            <div key={label}>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                {label}
              </label>
              <input
                type="password"
                defaultValue="********"
                className="w-full p-3 bg-white border border-slate-200 rounded-lg focus:border-[#7da02b] outline-none text-slate-400"
              />
              {label === "New Password" && (
                <p className="text-[9px] text-slate-400 mt-1 font-bold">
                  AT LEAST 8 CHARACTERS, ONE NUMBER AND ONE SPECIAL CHAR.
                </p>
              )}
            </div>
          ),
        )}
        <button className="w-full button">Update Password</button>
      </div>
    </SecurityCard>
  );
};

export default ChangePassword;
