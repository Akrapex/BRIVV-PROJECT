import { CreditCard, Plus, Trash2, Zap } from "lucide-react";

interface PaymentMethod {
  id: number;
  title: string;
  description: string;
}

interface PaymentMethodsProps {
  paymentMethods: PaymentMethod[];
}

const PaymentMethods = ({ paymentMethods }: PaymentMethodsProps) => {
  return (
    <section className="mb-10">
      <div className="flex justify-between items-center mb-6">
        <h3 className="flex items-center gap-2 font-bold text-lg text-slate-800">
          <CreditCard size={20} className="text-[#7da02b]" /> Payment Methods
        </h3>
        <button className="flex items-center gap-1 text-[#7da02b] font-bold text-xs hover:text-[#6a8a25]">
          <Plus size={14} strokeWidth={3} /> Add New
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className="flex items-center justify-between bg-white p-5 rounded-xl border border-slate-200"
          >
            <div className="flex items-center gap-4">
              <div className="bg-slate-50 p-2 rounded border border-slate-100">
                <CreditCard className="text-slate-400" size={20} />
              </div>
              <div>
                <p className="font-bold text-sm text-slate-800">
                  {method.title}
                </p>
                <p className="text-[11px] text-slate-400 font-medium">
                  {method.description}
                </p>
              </div>
            </div>
            <button className="text-slate-300 hover:text-red-500 transition-colors">
              <Trash2 size={18} />
            </button>
          </div>
        ))}

        <div className="flex items-center justify-between bg-[#f8faf4] p-5 rounded-xl border border-[#e2e9d4]">
          <div className="flex items-center gap-4">
            <div className="bg-[#e9f0d8] p-2 rounded border border-[#d8e2bf]">
              <Zap className="text-[#7da02b]" size={20} fill="currentColor" />
            </div>
            <div>
              <p className="font-bold text-sm text-[#5a7320]">
                Auto-Pay Utilities
              </p>
              <p className="text-[11px] text-[#7da02b] font-bold uppercase tracking-tight">
                Active for Electricity & Airtime
              </p>
            </div>
          </div>
          <button className="text-[10px] font-black text-slate-500 tracking-widest hover:text-slate-800">
            MANAGE
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
