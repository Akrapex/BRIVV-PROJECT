import { IoLocationOutline } from "react-icons/io5";
import mapPlaceHolder from "../../../assets/Map Placeholder.png";

function ReviewLocationCard() {
  return (
    <div className="bg-white border border-[#E2E8F0] overflow-hidden rounded-xl">
      <header className="p-4 flex items-center justify-between border-b border-[#F1F5F9]">
        <h3 className="font-bold text-[#0D1B0D] flex items-center gap-3">
          <IoLocationOutline color="#6B8E23" />
          Location
        </h3>
        <h4 className="text-[12px] font-bold text-[#6B8E23]">Adjust</h4>
      </header>

      <div>
        <img src={mapPlaceHolder} className="my-1.5 w-full object-cover" />
      </div>

      <div className="p-4">
        <h3 className="text-[#0D1B0D] text-[14px] font-medium leading-5">
          123 Sunset Boulevard, Heights District
        </h3>
        <p className="text-[#64748B] text-[12px]">San Francisco, CA 94112</p>
      </div>
    </div>
  );
}

export default ReviewLocationCard;
