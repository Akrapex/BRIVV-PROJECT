import React from "react";
import { MdSlowMotionVideo } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";

const properties = [
  {
    id: 1,
    title: "Bamboo Heights Penthouse",
    author: "@eco_realty",
    views: "12.4k",
    image: "../src/assets/Reel Card 1.png",
  },
  {
    id: 2,
    title: "Off-grid Forest Sanctuary",
    author: "@sustainable_sam",
    views: "8.2k",
    image: "../src/assets/Reel Card 2.png",
  },
  {
    id: 3,
    title: "Modular Living 101",
    author: "@green_living",
    views: "25k",
    image: "../src/assets/Reel Card 3.png",
  },
  {
    id: 4,
    title: "Urban Oasis Garden",
    author: "@nature_arch",
    views: "4.1k",
    image: "../src/assets/Reel Card 4.png",
  },
];

export default function PropertyReels() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-extrabold flex items-center gap-2 mt-10 mb-5">
            <MdSlowMotionVideo className="text-green-500 " />
            Property Reels
          </h1>
          <p className="text-gray-500 text-[20px]">
            Immersive property tours at your fingertips.
          </p>
        </div>

        <button className="text-green-600 font-medium hover:underline">
          View All →
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {properties.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden group"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-70 h-130 object-cover group-hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
