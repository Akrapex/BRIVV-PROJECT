import React from "react";
import { LuShieldCheck } from "react-icons/lu";
import { MdOutlineEditNote } from "react-icons/md";
import { IoPlayCircleOutline } from "react-icons/io5";
import { BsLightningCharge } from "react-icons/bs";

const Features = () => {
  const features = [
    {
      title: "Verified Listings Only",
      description:
        "Our rigorous multi-step verification process ensures every listing is real. Zero scams, guaranteed.",
      icon: <LuShieldCheck />,
    },
    {
      title: "Smart Transactions",
      description:
        "Secure escrow payments and legally binding digital contracts that protect both parties.",
      icon: <MdOutlineEditNote />,
    },
    {
      title: "Social Property Reels",
      description:
        "Discover your next home through immersive video tours. See the space as it really is.",
      icon: <IoPlayCircleOutline />,
    },
    {
      title: "Utility Payments",
      description:
        "Manage your home post-move. Pay electricity, water, airtime, and data directly.",
      icon: <BsLightningCharge />,
    },
  ];

  return (
    <section className="bg-gray-50 min-h-screen py-16 px-6 mt-10">
      <div className="max-w-7xl mx-auto mb-12 align-baseline">
        <h2 className="text-6xl md:text-4xl font-bold mb-8">
          Core Platform Features
        </h2>
        <p className="text-gray-400 md:text-[23px] min-w-2xl mx-auto">
          Nigerian real estate is complex. We’ve simplified it with technology
          built for trust.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto mt-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >
            <div className="bg-green-200 text-3xl mb-4 text-green-500 rounded shadow-sm w-9 h-8">{feature.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-500 text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
