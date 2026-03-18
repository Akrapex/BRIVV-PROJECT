import { useState } from "react";
import { TbSwimming } from "react-icons/tb";
import { LuTreePine } from "react-icons/lu";
import { MdBalcony, MdOutlineOutdoorGrill } from "react-icons/md";
import SelectionTypeCard from "../SelectionTypeCard";

interface ListingCategory {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const propertyType: ListingCategory[] = [
  {
    id: "Swimming Pool",
    label: "Swimming Pool",
    icon: <TbSwimming size={25} />,
  },
  {
    id: "Private Garden",
    label: "Private Garden",
    icon: <LuTreePine size={25} />,
  },
  {
    id: "Balcony/Terrace",
    label: "Balcony/Terrace",
    icon: <MdBalcony size={25} />,
  },
  {
    id: "BBQ Area",
    label: "BBQ Area",
    icon: <MdOutlineOutdoorGrill size={25} />,
  },
];

function Exterio() {
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

export default Exterio;
