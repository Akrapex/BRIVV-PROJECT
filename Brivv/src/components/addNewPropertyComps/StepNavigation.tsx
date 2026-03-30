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
    <div className="py-4 sm:py-6 mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 border-t border-tertiary ">
      <button
        onClick={prevStep}
        className="flex items-center gap-1 text-[#64748B] py-2 sm:py-3 px-4 sm:px-6 cursor-pointer font-bold text-[13px] sm:text-[14px]"
      >
        <IoMdArrowBack size={20} /> Back to{" "}
        {min ? "Dashboard" : steps[currentStep - 2].title?.split(" ")[0]}
      </button>

      {!max && (
        <button className="sm:ml-auto text-[#0D1B0D] bg-tertiary py-2 sm:py-3 px-4 sm:px-6 cursor-pointer font-bold rounded-xl text-[13px] sm:text-[14px]">
          Save Progress
        </button>
      )}

      <button
        onClick={nextStep}
        className={`${max ? "text-[#64748B] sm:ml-auto" : "button"} ${
          currentStep === steps.length ? "" : "shadow-lg"
        } py-2 sm:py-3 px-4 sm:px-6 text-[13px] sm:text-[14px] flex items-center gap-1 justify-center`}
      >
        {currentStep === steps.length
          ? "Discard Draft"
          : ` Next: ${steps[currentStep].title}`}
        {currentStep < 3 && <IoMdArrowForward size={22} />}
        {currentStep === 3 && <FaRegCheckCircle size={20} />}
      </button>
    </div>
  );
}

export default StepNavigation;
