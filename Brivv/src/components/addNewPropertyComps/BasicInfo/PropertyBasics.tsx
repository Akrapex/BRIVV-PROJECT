import { IoMdInformationCircleOutline } from "react-icons/io";
import { LuTag } from "react-icons/lu";
import { BsKey } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useState } from "react";
import ListingForm from "./ListingForm";
import PropertyCard from "../PropertyCard";
import SelectionTypeCard from "./SelectionTypeCard";

interface ListingCategory {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const propertyType: ListingCategory[] = [
  { id: "sale", label: "FOR SALE", icon: <LuTag size={25} /> },
  { id: "rent", label: "FOR RENT", icon: <BsKey size={25} /> },
  {
    id: "lease",
    label: "FOR LEASE",
    icon: <IoDocumentTextOutline size={25} />,
  },
];

function PropertyBasics() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const element = (
    <>
      <h3 className="text-[16px] font-semibold text-[#0D1B0D]">
        Listing Category
      </h3>

      <div className="mt-4 flex flex-col md:flex-row gap-8">
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

      <ListingForm />
    </>
  );

  return (
    <PropertyCard
      icon={<IoMdInformationCircleOutline size={25} color="#6B8E23" />}
      headerText="Property Basics"
      component={element}
    />
  );
}

export default PropertyBasics;
