import Media from "./Media";
import PropertyBasics from "./PropertyBasics";

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
    </div>
  );
}

export default BasicInfo;
