import { GoLightBulb } from "react-icons/go";
import { RiSofaLine } from "react-icons/ri";
import { HiOutlineHomeModern } from "react-icons/hi2";
import InteriorAmenities from "./InteriorAmenities";
import { PiBuildingApartment } from "react-icons/pi";
import { SlEnergy } from "react-icons/sl";
import AddNewPropertyHeader from "../AddNewPropertyHeader";
import PropertyCard from "../PropertyCard";
import TipsCard from "../TipsCard";
import Exterio from "./Exterio";
import BuildingFacilities from "./BuildingFacilities";
import UtilityInfo from "./UtilityInfo";

interface FeaturesDataCategory {
  icon: React.ReactNode;
  title: string;
  component: React.ReactElement;
}

const featuresData: FeaturesDataCategory[] = [
  {
    icon: <RiSofaLine size={25} />,
    title: "Interior Amenities",
    component: <InteriorAmenities />,
  },
  {
    icon: <HiOutlineHomeModern size={25} />,
    title: "Exterior & Outdoors",
    component: <Exterio />,
  },
  {
    icon: <PiBuildingApartment size={25} />,
    title: "Building Facilities",
    component: <BuildingFacilities />,
  },
  {
    icon: <SlEnergy size={25} />,
    title: "Utility Info",
    component: <UtilityInfo />,
  },
];

function Features() {
  const DescEl = (
    <p className="text-[#334155] text-[14px]">
      Properties with "High-speed WiFi" and "Dedicated Workspace" have seen a
      30% increase in inquiries since 2023. Be sure to check these if they apply
      to your listing.
    </p>
  );

  return (
    <div className="py-4 mt-4">
      <AddNewPropertyHeader
        heading="Property Features"
        paragraph="Highlight the best parts of your property to help potential leads find exactly what they're looking for."
      />

      {featuresData.map((data, index) => (
        <PropertyCard
          key={index}
          icon={data.icon}
          headerText={data.title}
          component={data.component}
        />
      ))}

      <TipsCard
        icon={<GoLightBulb size={22} />}
        heading="Did you know?"
        desc={DescEl}
      />
    </div>
  );
}

export default Features;
