import { ShieldCheck } from "lucide-react";

const SecurityNotice = () => {
  return (
    <footer className="bg-[#f9fafc] rounded-xl p-6 border border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-6 mb-10">
      <div className="flex items-center gap-5 text-center lg:text-left">
        <div className="bg-white p-3 rounded-xl border border-slate-100 flex items-center justify-center">
          <ShieldCheck className="text-[#7da02b]" size={32} />
        </div>
        <div>
          <p className="font-bold text-slate-900">
            Your data is secured with Akrapex
          </p>
          <p className="text-xs text-slate-500 max-w-xl leading-relaxed mt-0.5">
            We use industry-standard encryption to protect your personal
            information and transaction history. You can manage data sharing
            preferences in the{" "}
            <span className="text-[#7da02b] font-bold underline cursor-pointer">
              Privacy Tab
            </span>
            .
          </p>
        </div>
      </div>
      <button className="button-transparent">View Privacy Policy</button>
    </footer>
  );
};

export default SecurityNotice;
