import React from 'react';
import { 
  Zap, 
  Droplets, 
  Wifi, 
  Trash2, 
  ChevronRight, 
  ShieldCheck, 
  Lock 
} from 'lucide-react';

const UtilityPayments = () => {
  const categories = [
    { name: "Electricity", icon: Zap, color: "text-yellow-500" },
    { name: "Water Supply", icon: Droplets, color: "text-blue-500" },
    { name: "Fiber Internet", icon: Wifi, color: "text-purple-500" },
    { name: "Waste Management", icon: Trash2, color: "text-yellow-600" },
  ];

  const bills = [
    { label: "Electricity (Prepaid)", amount: "₦5,000.00" },
    { label: "Water Rate", amount: "₦1,250.00" },
    { label: "Monthly Internet Plan", amount: "₦4,200.00" },
    { label: "Waste Surcharge", amount: "₦2,000.00" },
  ];

  return (
    <section className="bg-black min-h-screen flex items-center justify-center p-6 font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content and Selectors */}
        <div className="space-y-8">
          <div>
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Simplify Utility Payments
            </h2>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
              Tired of managing multiple bills from different providers? Pay 
              everything from electricity to internet in one click.
            </p>
          </div>

          <div className="space-y-3 max-w-md">
            {categories.map((item, idx) => (
              <div 
                key={idx}
                className="group flex items-center justify-between bg-[#121212] border border-white/5 p-5 rounded-xl cursor-pointer hover:bg-white/5 transition-all"
              >
                <div className="flex items-center gap-4">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-white font-medium">{item.name}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Bill Card */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl w-full max-w-md lg:ml-auto">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-[#1a1a1a] text-xl font-bold">September Bills</h3>
              <p className="text-[#6a8d24] text-sm font-medium">Account: HF-908234</p>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Total Due</p>
              <p className="text-[#6a8d24] text-3xl font-extrabold tracking-tight">₦12,450.00</p>
            </div>
          </div>

          {/* Line Items */}
          <div className="space-y-6 mb-10">
            {bills.map((bill, index) => (
              <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-4">
                <span className="text-gray-700 text-sm font-medium">{bill.label}</span>
                <span className="text-[#1a1a1a] text-sm font-bold">{bill.amount}</span>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <button className="w-full bg-[#6a8d24] hover:bg-[#5a7a1f] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#6a8d24]/20">
            <ShieldCheck className="w-5 h-5" />
            Pay Securely Now
          </button>

          {/* Security Footer */}
          <div className="mt-4 flex items-center justify-center gap-1.5 text-[#6a8d24]">
            <Lock className="w-3 h-3" />
            <span className="text-[10px] font-medium">256-bit Encrypted Transaction</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default UtilityPayments;
