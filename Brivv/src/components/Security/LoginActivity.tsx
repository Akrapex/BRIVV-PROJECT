import { History, Laptop, Monitor, PhoneIcon } from "lucide-react";
import SecurityCard from "./SecurityCard";
import { sessionData } from "./SessionData";

const LoginActivity = () => {
  return (
    <SecurityCard className="p-0 overflow-hidden">
      <div className="p-6 flex items-center justify-between border-b border-slate-100">
        <h2 className="flex items-center gap-3 font-bold text-lg">
          <span className="p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-600">
            <History size={20} />
          </span>
          Login Activity
        </h2>
        <button className="text-[11px] font-black text-slate-400 uppercase tracking-widest hover:text-red-500">
          Log out of all devices
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50/50 text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] border-b border-slate-100">
              <th className="px-6 py-4">Device</th>
              <th className="px-6 py-4">Location</th>
              <th className="px-6 py-4">IP Address</th>
              <th className="px-6 py-4">Last Activity</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {sessionData.map((row, idx) => (
              <tr key={idx} className="text-sm">
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <span className="text-slate-400">
                      {row.type === "THIS DEVICE" && <Monitor size={18} />}
                      {row.type === "MOBILE" && <PhoneIcon size={18} />}
                      {row.type === "LAPTOP" && <Laptop size={18} />}
                    </span>
                    <div>
                      <p className="font-bold text-slate-800">{row.device}</p>
                      <p
                        className={`text-[10px] font-black mt-0.5 ${row.current ? "text-[#7da02b]" : "text-slate-300"}`}
                      >
                        {row.type}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5 text-slate-500 font-medium">
                  {row.loc}
                </td>
                <td className="px-6 py-5 text-slate-500 font-medium">
                  {row.ip}
                </td>
                <td className="px-6 py-5 text-slate-500 font-medium">
                  {row.time}
                </td>
                <td className="px-6 py-5 text-right">
                  {row.current ? (
                    <span className="text-[11px] font-bold text-slate-300">
                      Current Session
                    </span>
                  ) : (
                    <button className="text-[11px] font-black text-red-500 hover:text-red-600 uppercase cursor-pointer">
                      Sign out
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SecurityCard>
  );
};

export default LoginActivity;
