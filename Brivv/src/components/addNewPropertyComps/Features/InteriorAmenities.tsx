import { useState } from "react";
import { LiaSnowflakeSolid } from "react-icons/lia";
import { PiFan, PiCoatHangerFill } from "react-icons/pi";
import { RiSofaLine } from "react-icons/ri";
import { BiDroplet, BiSolidWasher } from "react-icons/bi";
import { FaWifi } from "react-icons/fa";
import { MdOutlineFireplace } from "react-icons/md";
import SelectionTypeCard from "../SelectionTypeCard";

interface ListingCategory {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const propertyType: ListingCategory[] = [
  {
    id: "Air Conditioning",
    label: "Air Conditioning",
    icon: <LiaSnowflakeSolid size={25} />,
  },
  { id: "Heating", label: "Heating", icon: <PiFan size={25} /> },
  { id: "Furnished", label: "Furnished", icon: <RiSofaLine size={25} /> },
  { id: "Dishwasher", label: "Dishwasher", icon: <BiDroplet size={25} /> },
  {
    id: "High-speed WiFi",
    label: "High-speed WiFi",
    icon: <FaWifi size={25} />,
  },
  {
    id: "Fireplace",
    label: "Fireplace",
    icon: <MdOutlineFireplace size={25} />,
  },
  {
    id: "Washer/Dryer",
    label: "Washer/Dryer",
    icon: <BiSolidWasher size={25} />,
  },
  {
    id: "Walk-in Closet",
    label: "Walk-in Closet",
    icon: <PiCoatHangerFill size={25} />,
  },
];

function InteriorAmenities() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <div className="mt-4 flex flex-wrap flex-col md:flex-row gap-8">
      {propertyType.map((type) => (
        <SelectionTypeCard
          key={type.id}
          active={selectedType === type.id}
          onclick={() => setSelectedType(type.id)}
          icon={type.icon}
          label={type.label}
        />
      ))}
    </div>
  );
}

export default InteriorAmenities;
