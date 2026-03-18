import React, { useEffect, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import type { Steps } from "../../Properties";

interface Props {
  currentStep: number;
  steps: Steps[];
  range: number;
}

interface SubText {
  id: number;
  text: string;
  icon?: React.ReactNode;
  underline?: boolean;
}

const subTextData: SubText[] = [
  { id: 1, text: "DETAILS", icon: <FaCircleCheck size={12} /> },
  { id: 2, text: "MEDIA", icon: <FaCircleCheck size={12} /> },
  { id: 3, text: "FEATURES", icon: <FaCircleCheck size={12} /> },
  { id: 4, text: "REVIEW", underline: true },
];

function ProgressBar({ currentStep, steps, range }: Props) {
  const [width, setWidth] = useState(0);
  const completionMax = currentStep === steps.length;

  useEffect(() => {
    const progress = range;
    setWidth(progress);
  }, [currentStep, range]);

  return (
    <div className="p-4 bg-white border border-tertiary rounded-xl">
      <div className="flex justify-between mb-3">
        <h1 className="text-[18px] font-bold text-[#0D1B0D]">
          Step {currentStep} of {steps.length}: {steps[currentStep - 1].title}
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
        className={`flex justify-between ${currentStep === steps.length ? "text-[#4C9A4C]" : undefined}`}
      >
        {subTextData.map((data) => {
          const isActive = data.id === currentStep;
          const isCompleted = completionMax;

          const textColor =
            isActive || isCompleted ? "text-[#4C9A4C]" : "text-[#94A3B8]";

          return (
            <span
              key={data.id}
              className={`${data.underline ? "relative" : ""} flex items-center gap-1 text-[14px] font-semibold ${textColor}`}
            >
              {currentStep === steps.length && data.icon} {data.text}
              {data.underline && completionMax && (
                <span className="block absolute w-full h-0.75 bg-[#6B8E23] -bottom-0.5"></span>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default ProgressBar;
