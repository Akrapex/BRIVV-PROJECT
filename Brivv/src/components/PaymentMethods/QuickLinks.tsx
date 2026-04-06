import { History, MapPin, Settings, ChevronRight } from "lucide-react";

const QuickLinks = () => {
  const links = [
    { label: "Transaction History", icon: <History size={18} /> },
    { label: "Billing Address", icon: <MapPin size={18} /> },
    { label: "Auto-pay Settings", icon: <Settings size={18} /> },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6">
      <h3 className="font-bold text-slate-800 mb-6">Quick Links</h3>
      <div className="space-y-6">
        {links.map((link, i) => (
          <button
            key={i}
            className="w-full flex items-center justify-between text-slate-500 hover:text-slate-900 group"
          >
            <div className="flex items-center gap-3">
              <span className="text-slate-300 group-hover:text-[#7da02b] transition-colors">
                {link.icon}
              </span>
              <span className="text-sm font-bold">{link.label}</span>
            </div>
            <ChevronRight size={16} className="text-slate-200" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
