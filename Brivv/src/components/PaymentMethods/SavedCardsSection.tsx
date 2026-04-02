import { ChevronLeft, ChevronRight, CreditCard } from "lucide-react";
import AddCardButton from "./AddCardButton";
import PaymentCard from "./PaymentCard";

const SavedCardsSection = () => {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold flex items-center gap-2">
          <CreditCard size={20} className="text-[#7da02b]" /> Saved Cards
        </h2>
        <div className="flex gap-2">
          <button className="p-1.5 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50">
            <ChevronLeft size={18} />
          </button>
          <button className="p-1.5 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PaymentCard>
          <div className="h-48 rounded-2xl p-6 bg-gradient-to-br from-[#00d948] to-[#00b33c] text-white flex flex-col justify-between border border-[#00a337]">
            <div className="flex justify-between items-start">
              <span className="font-bold text-lg tracking-tight">
                Main Card
              </span>
              <div className="w-10 h-6 bg-white/20 rounded border border-white/30 backdrop-blur-sm" />
            </div>
            <p className="text-2xl font-mono tracking-[0.2em] my-2">
              •••• •••• •••• 4242
            </p>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[10px] uppercase opacity-80 font-bold mb-1">
                  Card Holder
                </p>
                <p className="text-xs font-bold uppercase tracking-wide">
                  Alexander Rivera
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase opacity-80 font-bold mb-1">
                  Expires
                </p>
                <p className="text-xs font-bold uppercase tracking-wide">
                  12/26
                </p>
              </div>
            </div>
          </div>
        </PaymentCard>

        <PaymentCard>
          <div className="h-48 rounded-2xl p-6 bg-[#1a1a1a] text-white flex flex-col justify-between border border-black">
            <div className="flex justify-between items-start">
              <span className="font-bold text-lg tracking-tight">Business</span>
              <div className="w-10 h-6 bg-white/10 rounded border border-white/20" />
            </div>
            <p className="text-2xl font-mono tracking-[0.2em] my-2">
              •••• •••• •••• 8890
            </p>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[10px] uppercase opacity-60 font-bold mb-1">
                  Card Holder
                </p>
                <p className="text-xs font-bold uppercase tracking-wide">
                  Rivera Estate Holdings
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase opacity-60 font-bold mb-1">
                  Expires
                </p>
                <p className="text-xs font-bold uppercase tracking-wide">
                  10/25
                </p>
              </div>
            </div>
          </div>
        </PaymentCard>

        <AddCardButton />
      </div>
    </section>
  );
};

export default SavedCardsSection;
