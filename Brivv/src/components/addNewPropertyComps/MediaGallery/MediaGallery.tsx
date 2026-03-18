import AddNewPropertyHeader from "../AddNewPropertyHeader";
import sampleCoverPhoto from "../../../assets/Map Placeholder.png";
import TipsCard from "../TipsCard";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { MdOutlinePhotoSizeSelectLarge } from "react-icons/md";
import { MdOutlineHd } from "react-icons/md";
import { GoLightBulb } from "react-icons/go";

function MediaGallery() {
  const DescEl = (
    <p className="text-[#334155] text-[14px]">
      Our has Listings with short walkthrough video "Reels" get up to{" "}
      <span className="text-[#6B8E23]">400% more engagement.</span> Focus on the
      flow of the house and unique architectural details.
    </p>
  );

  return (
    <div className="py-4 mt-4">
      <AddNewPropertyHeader
        heading="Property Media Gallery"
        paragraph="High-quality visual content helps your property stand out. Add photos, 3D tours, and short video reels."
      />

      <div className="mt-5 flex flex-wrap gap-4">
        <div className="flex grow md:grow-0 flex-col items-center justify-center w-73.25 h-73.25 border-2 border-dashed border-[#6B8E2366] rounded-xl">
          <span className="block p-4 mb-6 w-fit bg-[#6B8E2333] text-[#6B8E23] rounded-full">
            <MdOutlineAddPhotoAlternate size={24} />
          </span>
          <h3 className="font-bold text-[#6B8E23] leading-6">Add Photos</h3>
          <p className="text-[12px] text-[#64748B] mt-1">Up to 20 images</p>
        </div>

        <div className="relative flex grow md:grow-0 flex-col items-center justify-center w-73.25 h-73.25 rounded-xl overflow-hidden">
          <span className="absolute top-3 left-3 px-5 py-2 bg-[#6b8e23] text-[10px] font-bold text-white rounded-lg shadow-md shadow-[#0000001A]">
            COVER PHOTO
          </span>
          <img src={sampleCoverPhoto} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="p-6 my-8 mb-8 bg-white rounded-xl">
        <div className="flex gap-2 mb-4">
          <HiOutlineBadgeCheck size={24} color="#6B8E23" />
          <h4 className="text-[#0D1B0D] font-bold">Media Guidelines</h4>
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-4">
          <div className="grow flex items-start gap-3">
            <i className="block p-2 w-fit bg-[#F1F5F9] rounded-lg text-[#6B8E23]">
              <MdOutlinePhotoSizeSelectLarge size={24} />
            </i>
            <span>
              <h4 className="text-[#0D1B0D] text-[14px] font-bold">
                Image Ratios
              </h4>
              <p className="text-[12px] text-[#64748B] leading-5">
                4:3 or 3:2 landscape is preferred for photos. 9:16 for Reels.
              </p>
            </span>
          </div>

          <div className="grow flex items-start gap-3">
            <i className="block p-2 w-fit bg-[#F1F5F9] rounded-lg text-[#6B8E23]">
              <MdOutlineHd size={24} />
            </i>
            <span>
              <h4 className="text-[#0D1B0D] text-[14px] font-bold">
                Resolution
              </h4>
              <p className="text-[12px] text-[#64748B] leading-5">
                Minimum 1920x1080px for best visibility on all devices.
              </p>
            </span>
          </div>
        </div>
      </div>

      <TipsCard
        icon={<GoLightBulb size={22} />}
        heading="Pro Tip: Storytelling Reels"
        desc={DescEl}
      />
    </div>
  );
}

export default MediaGallery;
