import React from 'react';
import { Check, X, CheckCircle2, Home, User } from 'lucide-react';

const SmartMaching = () => {
  const features = [
    {
      title: "Preference-Based Matching",
      description: "Set your criteria and get matched with compatible profiles automatically"
    },
    {
      title: "Verified Profiles",
      description: "All users undergo verification for safety and trust"
    },
    {
      title: "Save Time",
      description: "No more endless scrolling, see only relevant matches"
    },
    {
      title: "Higher Success Rate",
      description: "95% of matched users find their perfect fit within 2 weeks"
    }
  ];

  return (
    <section className="bg-[#f8f7f4] py-20 px-6 flex items-center justify-center font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center rounded-2xl shadow-2xl p-15">
        
        {/* Left Column: Overlapping Cards */}
        <div className="relative h-[450px] w-full flex items-center justify-center lg:justify-start">
          
          {/* Landlord Preferences Card (Top Left) */}
          <div className="absolute top-0 left-0 z-20 bg-white p-6 rounded-xl shadow-xl border border-gray-100 w-[280px]">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#6a8d24] p-1.5 rounded-md">
                <Home className="w-4 h-4 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 text-sm">Landlord Preferences</h4>
            </div>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2 text-gray-600"><Check className="w-3 h-3 text-green-500" /> Professional tenant</li>
              <li className="flex items-center gap-2 text-gray-600"><Check className="w-3 h-3 text-green-500" /> 1-year lease minimum</li>
              <li className="flex items-center gap-2 text-red-500"><X className="w-3 h-3" /> No pets</li>
            </ul>
          </div>

          {/* Tenant Preferences Card (Middle Right) */}
          <div className="absolute top-24 left-24 lg:left-32 z-10 bg-white p-6 rounded-xl shadow-lg border border-gray-100 w-[280px]">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#f4c40e] p-1.5 rounded-md">
                <User className="w-4 h-4 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 text-sm">Tenant Preferences</h4>
            </div>
            <ul className="space-y-2 text-xs text-gray-600">
              <li className="flex items-center gap-2"><Check className="w-3 h-3 text-green-500" /> Long-term rental</li>
              <li className="flex items-center gap-2"><Check className="w-3 h-3 text-green-500" /> Quiet neighborhood</li>
              <li className="flex items-center gap-2"><Check className="w-3 h-3 text-green-500" /> Modern amenities</li>
            </ul>
          </div>

          {/* Perfect Match Card (Bottom) */}
          <div className="absolute bottom-10 left-16 lg:left-20 z-30 bg-[#f4f8ec] p-6 rounded-xl border border-[#dce6c7] w-[240px] shadow-sm">
            <h4 className="text-[#6a8d24] font-bold text-sm mb-3">Perfect Match!</h4>
            <ul className="space-y-2 text-xs text-[#6a8d24]">
              <li className="flex items-center gap-2 font-medium"><Check className="w-3 h-3" /> 98% compatibility</li>
              <li className="flex items-center gap-2 font-medium"><Check className="w-3 h-3" /> All preferences aligned</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="flex flex-col">
          <h2 className="text-[#1a2b3c] text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Smart Matching Technology
          </h2>
          <p className="text-gray-500 text-lg mb-10 leading-relaxed max-w-lg">
            Our intelligent algorithm analyzes preferences, lifestyle, and requirements to connect landlords with ideal tenants, and vice versa.
          </p>

          <div className="space-y-8">
            {features.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="mt-1">
                  <CheckCircle2 className="w-6 h-6 text-[#6a8d24] fill-[#6a8d24]/10" />
                </div>
                <div>
                  <h4 className="text-[#1a2b3c] font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SmartMaching
