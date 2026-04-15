import React from 'react'
import { MapPin, ShieldCheck } from 'lucide-react';

const MarketPlace = () => {
  const properties = [
    {
      title: "The Ivory Pavilion",
      location: "Banana Island, Lagos",
      price: "₦720,000,000",
      image: "../src/assets/house-1.png",
    },
    {
      title: "Skyloft Residence",
      location: "Eko Atlantic, Lagos",
      price: "₦310,000,000",
      image: "../src/assets/house-2.png",
    },
    {
      title: "The Garden Mews",
      location: "Maitama, Abuja",
      price: "₦250,000,000",
      image: "../src/assets/house-3.png",
    }
  ];

  return (
    <section className="bg-[#f2f1e9] min-h-screen py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-[#1a1a1a] text-4xl md:text-5xl font-extrabold mb-4">
              Marketplace
            </h2>
            <p className="text-gray-500 text-lg">
              Top-tier properties from verified partners.
            </p>
          </div>
          <a href="#" className="text-[#6a8d24] font-bold underline decoration-2 underline-offset-4 hover:text-[#5a7a1f] transition-colors">
            Explore All Listings
          </a>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {properties.map((property, index) => (
            <div key={index} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
              {/* Image Container */}
              <div className="relative h-64 w-200">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                {/* Verified Badge */}
                <div className="absolute top-4 left-4 bg-[#f4c40e] flex items-center gap-1 px-3 py-1 rounded-full shadow-md">
                  <div className="bg-black rounded-full p-0.5">
                    <ShieldCheck className="w-3 h-3 text-[#f4c40e]" fill="currentColor" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-black">Verified</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8">
                <h3 className="text-[#1a1a1a] text-xl font-bold mb-2">
                  {property.title}
                </h3>
                
                <div className="flex items-center gap-1 text-gray-400 mb-6">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-[#6a8d24] text-xl font-bold">
                    {property.price}
                  </span>
                  <button className="bg-[#f4c40e] hover:bg-[#e5b80d] text-black text-xs font-bold px-6 py-3 rounded-xl transition-colors whitespace-nowrap">
                    Secure Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketPlace
