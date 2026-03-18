import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import type { Steps } from "../../Properties";

interface Props {
  currentStep: number;
  steps: Steps[];
  nextStep: React.MouseEventHandler<HTMLButtonElement>;
  prevStep: React.MouseEventHandler<HTMLButtonElement>;
}

function StepNavigation({ currentStep, steps, nextStep, prevStep }: Props) {
  const max = currentStep === steps.length;
  const min = currentStep === 1;

  return (
    <div className="py-6 mt-6 flex gap-4 border-t border-tertiary">
      <button
        onClick={prevStep}
        className="flex items-center gap-1 text-[#64748B] py-3 px-6 cursor-pointer font-bold"
      >
        <IoMdArrowBack size={22} /> Back to{" "}
        {min ? "Dashboard" : steps[currentStep - 2].title?.split(" ")[0]}
      </button>

      {!max && (
        <button className="ml-auto text-[#0D1B0D] bg-tertiary py-3 px-6 cursor-pointer font-bold rounded-xl">
          Save Progress
        </button>
      )}

      <button
        onClick={nextStep}
        className={`${max ? "text-[#64748B] ml-auto" : "button"} ${currentStep === steps.length ? "" : "shadow-lg"}`}
      >
        {currentStep === steps.length
          ? "Discard Draft"
          : `Next: ${steps[currentStep].title}`}
        {!max && <IoMdArrowForward size={22} />}
      </button>
    </div>
  );
}

export default StepNavigation;
