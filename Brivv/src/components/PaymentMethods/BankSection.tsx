import { Building2, Landmark, ShieldCheck } from "lucide-react";
import BankItem from "./BankItem";

const BankSection = () => {
  const banks = [
    {
      name: "Chase Personal Checking",
      desc: "Connected for Monthly Rent & Water Bills",
      icon: <Landmark className="text-blue-600" />,
    },
    {
      name: "Wells Fargo Savings",
      desc: "Backup payment source",
      icon: <Landmark className="text-red-600" />,
    },
  ];

  return (
    <div className="lg:col-span-2 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold flex items-center gap-2 text-slate-800">
          <Building2 size={20} className="text-[#7da02b]" /> Direct Utility &
          Rent Payments
        </h2>
        <button className="text-[11px] font-black text-[#7da02b] uppercase tracking-widest hover:underline">
          Link Bank Account
        </button>
      </div>

      <div className="space-y-4">
        {banks.map((bank, i) => (
          <BankItem key={i} bank={bank} />
        ))}
      </div>

      <div className="p-5 bg-[#f9fafc] border border-slate-100 rounded-xl flex items-start gap-4">
        <ShieldCheck className="text-[#7da02b] mt-0.5" size={18} />
        <div>
          <p className="text-[11px] font-bold text-slate-700">
            Secure Bank Linking
          </p>
          <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
            Your bank credentials are never stored on our servers. We use
            256-bit AES encryption to keep your data safe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BankSection;
