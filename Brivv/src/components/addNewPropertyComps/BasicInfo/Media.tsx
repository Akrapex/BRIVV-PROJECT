import { FaRegImages } from "react-icons/fa6";
import { FiUploadCloud } from "react-icons/fi";
import PropertyCard from "../PropertyCard";

function Media() {
  const element = (
    <>
      <div className="p-12 bg-[#6B8E230D] border-dashed border-2 border-[#6B8E234D] rounded-xl">
        <div className="flex flex-col text-center items-center justify-center">
          <span className="p-4 bg-[#6B8E2333] block w-fit rounded-full mb-4">
            <FiUploadCloud size={24} color="#6B8E23" />
          </span>
          <h3 className="text-[18px] font-bold text-[#0D1B0D] leading-7 mb-1">
            Drag and drop photos or reels
          </h3>
          <p className="text-[14px] text-[#64748B] leading-5 w-full lg:w-[38%]">
            Support JPG, PNG and MP4. Suggested aspect ratio 4:3 for photos and
            9:16 for reels.
          </p>
          <label className="mt-6 bg-[#6B8E23] py-2 px-6 font-bold rounded-lg text-white cursor-pointer">
            Browse Files
            <input type="file" hidden />
          </label>
        </div>
      </div>
    </>
  );

  const badge = (
    <div className="py-1 px-2 bg-[#6B8E2333] text-[#6B8E23] text-[12px] font-bold rounded-sm">
      PRO TIP: Listings with video sell 4x faster
    </div>
  );

  return (
    <PropertyCard
      icon={<FaRegImages size={25} color="#6B8E23" />}
      headerText="High-Quality Media"
      badge={badge}
      component={element}
    />
  );
}

export default Media;
