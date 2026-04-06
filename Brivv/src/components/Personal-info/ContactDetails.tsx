import { UserRound } from "lucide-react";
import type { UserData } from "./PersonalInfo";

const ContactDetails = ({ fullName, email, phone }: UserData) => {
  return (
    <section className="space-y-6">
      <h3 className="flex items-center gap-2 font-bold text-lg text-slate-800">
        <UserRound size={20} className="text-[#7da02b]" /> Contact Details
      </h3>
      <div className="space-y-4">
        <div>
          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
            Full Name
          </label>
          <input
            type="text"
            value={fullName}
            className="w-full p-3 bg-white border border-slate-200 rounded-lg focus:border-[#7da02b] outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            className="w-full p-3 bg-white border border-slate-200 rounded-lg focus:border-[#7da02b] outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
            Phone Number
          </label>
          <div className="flex gap-2">
            <div className="relative">
              <select className="appearance-none p-3 bg-white border border-slate-200 rounded-lg w-20 font-medium text-slate-700 outline-none pr-6">
                <option>+1</option>
              </select>
            </div>
            <input
              type="text"
              value={phone}
              className="flex-1 p-3 bg-white border border-slate-200 rounded-lg focus:border-[#7da02b] outline-none transition-colors"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
