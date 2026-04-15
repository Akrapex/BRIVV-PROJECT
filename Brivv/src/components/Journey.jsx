import React from 'react';
import { Search, Heart, Wallet, FileEdit, Truck } from 'lucide-react';

const Journey = () => {
  const steps = [
    {
      icon: Search,
      title: "Browse",
      description: "Explore thousands of verified homes with HD tours.",
      bgColor: "bg-[#6a8d24]", // Olive Green
    },
    {
      icon: Heart,
      title: "Interest",
      description: "Save your favorites and schedule a physical viewing.",
      bgColor: "bg-[#2a2a2a]", // Dark Gray
    },
    {
      icon: Wallet,
      title: "Escrow",
      description: "Pay securely into our escrow. Your money is safe.",
      bgColor: "bg-[#2a2a2a]",
    },
    {
      icon: FileEdit,
      title: "Sign",
      description: "Digital contracts signed in seconds. No paperwork.",
      bgColor: "bg-[#2a2a2a]",
    },
    {
      icon: Truck,
      title: "Move-In",
      description: "Get your keys and start living. We handle the rest.",
      bgColor: "bg-[#f4c40e]", // Yellow
    },
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-20 font-sans">
      {/* Title */}
      <h1 className="text-white text-4xl md:text-5xl font-bold mb-20 text-center tracking-tight">
        The BRIVV Journey
      </h1>

      {/* Journey Container */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 max-w-7xl w-full">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center text-center w-full sm:w-[180px]"
          >
            {/* Icon Wrapper */}
            <div className={`${step.bgColor} w-20 h-20 rounded-[2rem] flex items-center justify-center mb-6 shadow-2xl transition-transform duration-300 hover:scale-110`}>
              {/* If Move-In icon, make it black for contrast, otherwise white */}
              <step.icon 
                className={`w-8 h-8 ${index === 4 ? 'text-black' : 'text-white'}`} 
                strokeWidth={1.5} 
              />
            </div>

            {/* Content */}
            <h3 className="text-white font-bold text-lg mb-3">
              {step.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed px-2">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;