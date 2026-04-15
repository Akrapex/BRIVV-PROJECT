import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Iphone from "../assets/iphone_blur.png"

const Showcase = () => {
  return (
    <section className="bg-white text-gray-800 py-20 px-6 relative overflow-hidden">
      
      {/* Decorative Blobs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-3xl blur-2xl opacity-80"></div>
      <div className="absolute bottom-10 left-2/3 lg:right-30  w-30 h-30 bg-green-300 rounded-3xl blur-2xl opacity-70"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Phone Mockup */}
        <div className="flex justify-center relative">
          <div className="">
            
            <div className="relative w-[260px] h-[520px] rounded-[30px] overflow-hidden">
              <img
                src={Iphone}
                alt="Property"
                className="w-[500px] h-[590px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tour Properties Anytime
          </h2>

          <p className="text-green-400 mb-8 leading-relaxed">
            Experience homes like never before with our reel-style video tours.
            Swipe through properties, save favorites, and schedule visits, all
            from your phone.
          </p>

          {/* Bullet Points */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-400" />
              <span>Swipe through video property tours</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-400" />
              <span>Save and manage favorites easily</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-400" />
              <span>Schedule visits instantly</span>
            </div>
          </div>

          {/* CTA */}
          <button className="bg-black w-[250px] h-[50px] text-white font-semibold rounded-xl shadow-2xl hover:text-green-400 transition">
            Start Exploring →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
