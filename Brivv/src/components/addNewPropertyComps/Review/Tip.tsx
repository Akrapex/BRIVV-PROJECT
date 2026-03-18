import { LuLightbulb } from "react-icons/lu";

function Tip() {
  return (
    <div className="p-4 flex gap-2 bg-[#E7F3E7] border border-[#6B8E2333] rounded-xl">
      <LuLightbulb size={30} color="#6B8E23" />
      <p className="text-[12px] text-[#334155] font-bold leading-5">
        Pro Tip: Properties with a specific street address get 35% more
        inquiries than general area listings.
      </p>
    </div>
  );
}

export default Tip;
