import type React from "react";

interface Tips {
  icon: React.ReactNode;
  heading: string;
  desc: React.ReactElement;
}

function TipsCard({ icon, heading, desc }: Tips) {
  return (
    <div className="bg-[#E7F3E7] p-8 flex items-start gap-5 rounded-xl">
      <span className="block w-fit bg-[#6B8E23] text-white font-bold p-2 rounded-full">
        {icon}
      </span>

      <div>
        <h4 className="text-[18px] text-[#0D1B0D] font-bold leading-7">
          {heading}
        </h4>

        {desc}
      </div>
    </div>
  );
}

export default TipsCard;
