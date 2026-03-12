import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

interface Steps {
  step: number;
  text: string[];
  nextStep: React.MouseEventHandler<HTMLButtonElement>;
  prevStep: React.MouseEventHandler<HTMLButtonElement>;
}

function StepNavigation({ step, text, nextStep, prevStep }: Steps) {
  const max = step === text.length;
  const min = step === 1;

  return (
    <div className="py-6 mt-6 flex gap-4 border-t border-tertiary">
      <button
        onClick={prevStep}
        className="flex items-center gap-1 text-[#64748B] py-3 px-6 cursor-pointer font-bold"
      >
        <IoMdArrowBack size={22} /> Back to {min ? "Dashboard" : text[step - 2]}
      </button>

      {!max && (
        <button className="ml-auto text-[#0D1B0D] bg-tertiary py-3 px-6 cursor-pointer font-bold rounded-xl">
          Save Progress
        </button>
      )}

      <button
        onClick={nextStep}
        className={`flex items-center gap-1 ${max ? "text-[#64748B] ml-auto" : "bg-[#6B8E23] text-white"} py-3 px-6 cursor-pointer font-bold rounded-xl`}
      >
        {step === text.length ? "Discard Draft" : `Next: ${text[step]}`}
        {!max && <IoMdArrowForward size={22} />}
      </button>
    </div>
  );
}

export default StepNavigation;
