import React from "react";
import { Star } from "lucide-react";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Michael Adebayo",
      role: "Moving Professional",
      text: `"Brivv made my relocation so much easier. The video tours meant I didn't have to travel across town for every viewing."`,
      image: "../src/assets/Michael_pic.png",
    },
    {
      name: "Titi Johnson",
      role: "Freelance Editor",
      text: `"The utility payment feature is a game changer. I never forget a bill now, it's all automated in one dashboard."`,
      image: "../src/assets/Titi-pic.png",
    },
    {
      name: "Chidi Okafor",
      role: "Software Engineer",
      text: `"The smart matching actually works. I found a great apartment and the landlord was verified, which gave me peace of mind."`,
      image: "../src/assets/chidi_pic.png",
    },
  ];

  return (
    <section className="w-full py-16 px-4 mt-30">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Trusted by Thousands
        </h2>
        <p className="mt-2 text-green-600 text-sm md:text-base">
          Real stories from our happy homeowners.
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 text-left shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>

              {/* User */}
              <div className="flex items-center mt-10 gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {item.name}
                  </p>
                  <p className="text-green-600 text-xs">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

