function ProgressBar() {
  return (
    <div className="p-4 bg-white border border-tertiary rounded-xl">
      <div className="flex justify-between mb-3">
        <h1 className="text-[18px] font-bold text-[#0D1B0D]">
          Step 1 of 4: Basic Information
        </h1>
        <p className="text-[#6B8E23] text-[14px] font-bold">25% completed</p>
      </div>
      {/* Progress */}
      <div className="w-full h-3 rounded-xl bg-[#F1F5F9] mb-4 overflow-hidden">
        <span className="block h-full w-[25%] bg-[#6B8E23] rounded-xl transition duration-300"></span>
      </div>

      <div className="flex justify-between">
        <span className="text-[14px] font-semibold text[#4C9A4C]">DETAILS</span>
        <span className="text-[14px] font-semibold text-[#94A3B8]">MEDIA</span>
        <span className="text-[14px] font-semibold text-[#94A3B8]">
          LOCATION
        </span>
        <span className="text-[14px] font-semibold text-[#94A3B8]">REVIEW</span>
      </div>
    </div>
  );
}

export default ProgressBar;
