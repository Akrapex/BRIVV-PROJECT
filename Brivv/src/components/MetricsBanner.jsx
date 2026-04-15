import React from 'react'

const MetricsBanner = () => {
  const metrics = [
    { value: "500+", label: "PROPERTIES VERIFIED" },
    { value: "1,000+", label: "ACTIVE USERS" },
    { value: "50+", label: "DAILY TRANSACTIONS" },
    { value: "₦100M+", label: "VALUE TRANSACTED" },
  ];

  return (
    <div className="w-full bg-green-700 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
        {metrics.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold">
              {item.value}
            </h2>
            <p className="mt-2 text-sm tracking-widest opacity-80">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MetricsBanner
