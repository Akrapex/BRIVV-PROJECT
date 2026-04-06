import { Plus } from "lucide-react";

const AddCardButton = () => (
  <button className="h-48 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-3 text-slate-400 hover:border-[#7da02b] hover:text-[#7da02b] transition-all group bg-slate-50/30">
    <div className="p-3 bg-white rounded-full border border-slate-100 shadow-sm group-hover:border-[#7da02b]">
      <Plus size={24} />
    </div>
    <span className="font-bold text-sm">Add Payment Method</span>
  </button>
);

export default AddCardButton;
