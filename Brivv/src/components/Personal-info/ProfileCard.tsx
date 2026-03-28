import { Camera } from "lucide-react";
import { HiOutlineMail } from "react-icons/hi";
import type { UserData } from "./PersonalInfo";

const ProfileCard = ({ fullName, email }: UserData) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-slate-200 flex items-center gap-6 mb-10">
      <div className="relative">
        <div className="w-24 h-24 rounded-full overflow-hidden border border-slate-200">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
        <button className="absolute bottom-0 right-0 bg-[#7da02b] p-2 rounded-full border-2 border-white text-white">
          <Camera size={14} />
        </button>
      </div>
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold text-slate-900">{fullName}</h2>
        <div className="flex items-center gap-1 text-slate-500 text-sm mt-0.5">
          <span className="opacity-70">
            <HiOutlineMail />
          </span>
          <span>{email}</span>
        </div>
        {/* Metadata right under email */}
        <p className="text-xs text-slate-400 font-medium mt-1">
          Tenant • Joined October 2023
        </p>

        {/* Badges Row */}
        <div className="flex gap-2 mt-3">
          <span className="text-[10px] font-bold bg-[#f1f4e9] text-[#5e7a21] px-2.5 py-1 rounded border border-[#dce6c4] uppercase tracking-wider">
            Verified Buyer
          </span>
          <span className="text-[10px] font-bold bg-[#eff6ff] text-[#1e40af] px-2.5 py-1 rounded border border-[#dbeafe] uppercase tracking-wider">
            Early Access
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
