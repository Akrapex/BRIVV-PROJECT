import React, { useEffect, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";

interface Props {
  step: number;
  title: string[];
  range: number;
}

interface SubText {
  id: number;
  text: string;
  icon?: React.ReactNode;
}

const subTextData: SubText[] = [
  { id: 1, text: "DETAILS", icon: <FaCircleCheck size={12} /> },
  { id: 2, text: "MEDIA", icon: <FaCircleCheck size={12} /> },
  { id: 3, text: "LOCATION", icon: <FaCircleCheck size={12} /> },
  { id: 4, text: "REVIEW" },
];

function ProgressBar({ step, title, range }: Props) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const progress = range;
    setWidth(progress);
  }, [step, range]);

  return (
    <div className="p-4 bg-white border border-tertiary rounded-xl">
      <div className="flex justify-between mb-3">
        <h1 className="text-[18px] font-bold text-[#0D1B0D]">
          Step {step} of {title.length}: {title[step - 1]}
        </h1>
        <p className="text-[#6B8E23] text-[14px] font-bold">
          {range}% Completed
        </p>
      </div>
      {/* Progress */}
      <div className="w-full h-3 rounded-xl bg-[#F1F5F9] mb-4 overflow-hidden">
        <span
          style={{ width: `${width}%` }}
          className="block h-full bg-[#6B8E23] rounded-xl transition-all duration-700 ease-in-out"
        />
      </div>

      <div
        className={`flex justify-between ${step === title.length ? "text-[#4C9A4C]" : undefined}`}
      >
        {subTextData.map((data) => (
          <span
            className={`flex items-center gap-1 text-[14px] font-semibold ${data.id === step ? "text-[#4C9A4C]" : "text-[#94A3B8]"}`}
          >
            {step === title.length && data.icon} {data.text}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProgressBar;
