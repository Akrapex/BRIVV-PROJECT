import { CiLocationOn } from "react-icons/ci";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { LuShieldCheck } from "react-icons/lu";
import { MdOutlineBed, MdOutlineBathtub } from "react-icons/md";
import mapPlaceHolder from "../../../assets/Map Placeholder.png";

function PropertyReviewCard() {
  return (
    <div className="relative w-164 bg-white overflow-hidden shadow-2xl rounded-xl">
      <div className="h-72">
        <img src={mapPlaceHolder} className="h-full w-full object-cover" />
      </div>

      <div className="p-6">
        <div className="flex justify-between">
          <div>
            <h3 className="text-[22px] text-[#0D1B0D] font-bold leading-8">
              Modern 3-Bedroom Villa with Garden
            </h3>
            <p className="flex text-[#64748B] items-center gap-1">
              <CiLocationOn size={14} color="#6B8E23" /> Sunset Blvd, San
              Francisco, CA
            </p>
          </div>

          <div>
            <h3 className="text-[22px] text-[#6B8E23] font-extrabold leading-8">
              $500,000
            </h3>
            <p className="flex justify-end text-[#64748B] text-[12px] items-center gap-1">
              Est. $2,450/mo
            </p>
          </div>
        </div>

        <div className="py-3 px-2 my-4 border-y border-[#F1F5F9] flex justify-between">
          <span className="text-[14px] text-[#0D1B0D] font-semibold flex items-center gap-1">
            <MdOutlineBed size={20} color="#94A3B8" /> 3 Beds
          </span>

          <span className="text-[14px] text-[#0D1B0D] font-semibold flex items-center gap-1">
            <MdOutlineBathtub size={20} color="#94A3B8" /> 2.5 Baths
          </span>

          <span className="text-[14px] text-[#0D1B0D] font-semibold flex items-center gap-1">
            <TfiRulerAlt2 size={20} color="#94A3B8" /> 2,400 sqft
          </span>
        </div>

        <div className="flex justify-between items-center">
          <h4 className="text-[12px] text-[#64748B] font-bold flex items-center gap-2">
            <span className="block p-2 w-fit rounded-full bg-[#6B8E231A] text-[#6B8E23]">
              <LuShieldCheck size={20} />
            </span>
            VERIFIED LISTING
          </h4>

          <p className="text-[12px] text-[#94A3B8]">Listed 2 mins ago</p>
        </div>
      </div>
    </div>
  );
}

export default PropertyReviewCard;
