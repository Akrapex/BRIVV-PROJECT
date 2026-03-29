import { MoreVertical } from "lucide-react";

const BankItem = ({ bank }: { bank: any }) => (
  <div className="flex items-center justify-between p-5 bg-white border border-slate-200 rounded-xl">
    <div className="flex items-center gap-4">
      <div className="p-3 bg-slate-50 border border-slate-100 rounded-lg">
        {bank.icon}
      </div>
      <div>
        <p className="font-bold text-sm text-slate-800">{bank.name}</p>
        <p className="text-xs text-slate-400">{bank.desc}</p>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <span className="text-[9px] font-black px-2 py-0.5 bg-slate-50 border border-slate-200 text-slate-400 rounded uppercase tracking-tighter">
        Verified
      </span>
      <button className="text-slate-300 hover:text-slate-600">
        <MoreVertical size={18} />
      </button>
    </div>
  </div>
);

export default BankItem;
