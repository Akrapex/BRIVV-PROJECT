import LocationAndMap from "./LocationAndMap";
import Media from "./Media";
import PropertyBasics from "./PropertyBasics";
import { RiGraduationCapLine } from "react-icons/ri";

function BasicInfo() {
  return (
    <div className="py-4 mt-4">
      <h1 className="text-[32px] font-extrabold leading-10 text-[#0D1B0D]">
        Add New Property Listing
      </h1>
      <p className="text-[16px] text-[#475569] leading-6">
        Fill out the information below to reach thousands of potential buyers
        and renters.
      </p>

      <PropertyBasics />
      <Media />
      <LocationAndMap />

      <div className="bg-[#E7F3E7] p-4 flex items-start gap-5 rounded-xl">
        <span className="block w-fit bg-[#6B8E23] text-white font-bold p-2 rounded-full">
          <RiGraduationCapLine size={20} />
        </span>

        <div>
          <h4 className="text-[18px] text-[#0D1B0D] font-bold leading-7">
            New to Selling?
          </h4>
          <p className="text-[#334155] text-[14px]">
            Our{" "}
            <span className="text-[#6B8E23] font-bold underline">
              Listing Academy
            </span>{" "}
            has short video modules on how to photograph your property and write
            compelling descriptions that attract verified leads.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BasicInfo;
