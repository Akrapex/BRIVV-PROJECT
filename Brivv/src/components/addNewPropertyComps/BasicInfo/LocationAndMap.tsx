import { CiLocationOn } from "react-icons/ci";
import { IoSearchSharp } from "react-icons/io5";
import PropertyCard from "../PropertyCard";
import mapPlaceHolder from "../../../assets/Map Placeholder.png";

function LocationAndMap() {
  const element = (
    <div>
      <p className="text-[#0D1B0D] mb-1 font-medium">Search Address</p>
      <form className="relative h-12 rounded-lg">
        <span className="absolute top-1/2 transform -translate-y-1/2 left-4">
          <IoSearchSharp size={20} color="#94A3B8" />
        </span>
        <input
          className="w-full h-full px-12 rounded-lg border border-tertiary outline-2 outline-transparent focus:outline-tertiary transition-all duration-300"
          type="text"
          placeholder="Start typing address..."
        />
      </form>

      <div>
        <img className="w-full mt-8" src={mapPlaceHolder} />
      </div>
    </div>
  );

  return (
    <PropertyCard
      icon={<CiLocationOn size={25} color="#6B8E23" />}
      headerText="Location & Map"
      component={element}
    />
  );
}

export default LocationAndMap;
