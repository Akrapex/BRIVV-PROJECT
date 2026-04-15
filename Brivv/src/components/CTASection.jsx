import React from "react";
import { Play } from "lucide-react";

export default function CTASection() {
  return (
    <section className="w-full bg-green-700 py-20 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center text-white">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold">
          Ready to Find Your Perfect Home?
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-green-100 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
          Join over 50,000 users who found their dream apartment and
          simplified their household management.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-white text-green-700 font-medium px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
            Get Started Free
          </button>

          <button className="flex items-center gap-2 border border-green-400 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
            <Play className="w-4 h-4" />
            Watch Demo
          </button>
        </div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-green-600 rounded-br-full opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-600 rounded-tl-full opacity-30"></div>
    </section>
  );
}
