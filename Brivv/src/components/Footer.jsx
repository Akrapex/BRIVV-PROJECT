import React from 'react';
import { Award, AtSign, Share2, SendHorizontal} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black tracking-tight">BRIVV</h2>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Elevating real estate standards across Nigeria through technology and transparency.
            </p>
            <div className="flex space-x-4">
              <Award className="w-6 h-6 cursor-pointer hover:text-yellow-400 transition-colors" />
              <AtSign className="w-6 h-6 cursor-pointer hover:text-yellow-400 transition-colors" />
              <Share2 className="w-6 h-6 cursor-pointer hover:text-yellow-400 transition-colors" />
            </div>
          </div>

          {/* Explore Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Explore</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Verified Partners</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Real Estate Blog</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Support</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Join Our Newsletter</h3>
            <p className="text-gray-400 text-sm">
              Get the latest property listings and market insights.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-[#1a1a1a] border border-gray-800 text-sm py-3 px-4 rounded-l-md w-full focus:outline-none focus:border-gray-600"
              />
              <button className="bg-[#f0c808] hover:bg-[#d4b107] text-black px-4 rounded-r-md transition-colors flex items-center justify-center">
                <SendHorizontal className="w-5 h-5 fill-current" />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-900 pt-8">
          <p className="text-center text-gray-500 text-sm tracking-wide">
            © 2026 BRIVV Nigerian . Elevating real estate standards.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;