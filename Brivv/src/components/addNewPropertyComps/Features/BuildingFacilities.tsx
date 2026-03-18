import { useState } from "react";
import SelectionTypeCard from "../SelectionTypeCard";
import { IoMdFitness } from "react-icons/io";
import {
  MdSecurity,
  MdOutlineElevator,
  MdOutlineLocalParking,
} from "react-icons/md";

interface ListingCategory {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const propertyType: ListingCategory[] = [
  {
    id: "Fitness Center",
    label: "Fitness Center",
    icon: <IoMdFitness size={25} />,
  },
  {
    id: "24/7 Security",
    label: "24/7 Security",
    icon: <MdSecurity size={25} />,
  },
  {
    id: "Elevator",
    label: "Elevator",
    icon: <MdOutlineElevator size={25} />,
  },
  {
    id: "Resident Parking",
    label: "Resident Parking",
    icon: <MdOutlineLocalParking size={25} />,
  },
];

function BuildingFacilities() {
  const [selection, setSelection] = useState<string[]>([]);

  const handleSelection = (id: string) => {
    setSelection((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  };

  return (
    <div className="mt-4 flex flex-wrap flex-col md:flex-row gap-8">
      {propertyType.map((type) => (
        <SelectionTypeCard
          key={type.id}
          active={selection.includes(type.id)}
          onclick={() => handleSelection(type.id)}
          icon={type.icon}
          label={type.label}
        />
      ))}
    </div>
  );
}

export default BuildingFacilities;
