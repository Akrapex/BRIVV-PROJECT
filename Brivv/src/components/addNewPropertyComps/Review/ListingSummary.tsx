import { MdOutlineModeEdit } from "react-icons/md";

function ListingSummary() {
  return (
    <div className="p-6 bg-white border border-[#E2E8F0] w-164 rounded-xl">
      <header className="flex items-center justify-between">
        <h2 className="text-[18px] text-[#0D1B0D] font-bold">
          Listing Summary
        </h2>

        <p className="text-[14px] font-bold text-[#6B8E23] flex items-center gap-1">
          <MdOutlineModeEdit /> Edit All
        </p>
      </header>

      <div className="my-4 flex justify-between">
        <div className="w-69.75 mt-2">
          <p className="text-[12px] mb-1 text-[#94A3B8] font-bold leading-4 tracking-widest">
            CATEGORY
          </p>
          <h3 className="font-medium text-[#0D1B0D]">Residential - For Sale</h3>
        </div>

        <div className="w-69.75 mt-2">
          <p className="text-[12px] mb-1 text-[#94A3B8] font-bold leading-4 tracking-widest">
            LOT SIZE
          </p>
          <h3 className="font-medium text-[#0D1B0D]">0.25 Acres</h3>
        </div>
      </div>

      <h5 className="mt-6 text-[12px] font-bold text-[#94A3B8] leading-4">
        DESCRIPTION
      </h5>
      <p className="text-[14px] text-[#475569] leading-5.5">
        Modern 3-bedroom villa located in the heart of San Francisco. Features
        include high ceilings, professional-grade kitchen, private backyard, and
        smart home integration...
      </p>
    </div>
  );
}

export default ListingSummary;
