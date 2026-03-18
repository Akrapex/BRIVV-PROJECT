import { MdOutlineRocketLaunch, MdAccessTime } from "react-icons/md";
import { PiSealCheckBold } from "react-icons/pi";

function PublishingOptionCard() {
  return (
    <div className="p-6 bg-white border border-[#E2E8F0] rounded-xl">
      <h2 className="mb-3 text-[18px] text-[#0D1B0D] font-bold">
        Publishing Options
      </h2>

      <div className="flex flex-col gap-4">
        <button className="button w-full h-14">
          <MdOutlineRocketLaunch size={24} />
          Publish Listing Now
        </button>

        <button className="button-transparent w-full h-14">
          <MdAccessTime size={24} />
          Schedule for Later
        </button>
      </div>

      <div className="mt-7 pt-8 border-t border-[#F1F5F9]">
        <div className="p-3 flex items-center gap-2 bg-[#6B8E230D] border border-[#6B8E231A] rounded-lg">
          <PiSealCheckBold color="#6B8E23" />
          <div>
            <h3 className="text-[12px] text-[#6B8E23] font-bold leading-4">
              Priority Support
            </h3>
            <p className="text-[12px] text-[#64748B]">
              Your listing will be reviewed within 2 hours.
            </p>
          </div>
        </div>

        <p className="mt-6 text-center text-[10px] text-[#94A3B8] font-bold tracking-[1.13px]">
          BY PUBLISHING, YOU AGREE TO OUR{" "}
          <span className="underline cursor-pointer">TERMS OF SERVICE</span>
        </p>
      </div>
    </div>
  );
}

export default PublishingOptionCard;
