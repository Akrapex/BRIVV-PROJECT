import React from "react";

const HeroSection = "/images/Hero_img.png";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col-reverse px-8 py-20 lg:grid lg:grid-cols-2 lg:gap-16 lg:place-item-center max-w-7xl mx-auto">
        <div className="bg-white">
          {/* Badge */}
          <div className="inline-flex items-center bg-green-100 text-green-700 text-sm px-4 py-1 rounded-full mb-10 mt-20">
            ✔ 100% Scam-Free Guarantee
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-10">
            Find, Verify, and Secure <br />
            Your Next <span className="text-green-600">Property</span>
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg mb-10 max-w-2xl">
            Browse trusted listings, watch real video tours, pay bills, and
            complete property transactions seamlessly with BRIVV.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg">
              Browse Properties
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-lg">
              List Your Property
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 text-gray-600 text-sm mt-20">
            <div className="flex items-center gap-2">
              <span className="text-green-600">✔</span>
              <span>10,000+ Properties</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">👥</span>
              <span>5,000+ Happy Tenants</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">🛡</span>
              <span>Verified Listings</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <img src={HeroSection} alt="Hero Image" className="w-[96] mt-5" />
        </div>
      </div>
    </>
  );
};

export default Hero;
