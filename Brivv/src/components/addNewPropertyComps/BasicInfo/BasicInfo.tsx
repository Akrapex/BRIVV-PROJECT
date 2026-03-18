import AddNewPropertyHeader from "../AddNewPropertyHeader";
import TipsCard from "../TipsCard";
import LocationAndMap from "./LocationAndMap";
import Media from "./Media";
import PropertyBasics from "./PropertyBasics";
import { RiGraduationCapLine } from "react-icons/ri";

function BasicInfo() {
  const DescEl = (
    <p className="text-[#334155] text-[14px]">
      Our <span className="text-[#6B8E23] underline">Listing Academy</span> has
      short video modules on how to photograph your property and write
      compelling descriptions that attract verified leads.
    </p>
  );

  return (
    <div className="py-4 mt-4">
      <AddNewPropertyHeader
        heading="Add New Property Listing"
        paragraph="Fill out the information below to reach thousands of potential buyers
        and renters."
      />

      <PropertyBasics />
      <Media />
      <LocationAndMap />

      <TipsCard
        icon={<RiGraduationCapLine size={20} />}
        heading="New to Selling?"
        desc={DescEl}
      />
    </div>
  );
}

export default BasicInfo;
