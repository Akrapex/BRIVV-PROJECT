import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

function StepNavigation() {
  return (
    <div className="py-6 mt-6 flex gap-4 border-t border-tertiary">
      <button className="flex items-center gap-1 text-[#64748B] py-3 px-6 cursor-pointer font-bold">
        <IoMdArrowBack size={22} /> Back to DashBoard
      </button>

      <button className="ml-auto text-[#0D1B0D] bg-tertiary py-3 px-6 cursor-pointer font-bold rounded-xl">
        Save Progress
      </button>

      <button className="flex items-center gap-1 text-white bg-[#6B8E23] py-3 px-6 cursor-pointer font-bold rounded-xl">
        Next: Media Gallery <IoMdArrowForward size={22} />
      </button>
    </div>
  );
}

export default StepNavigation;
