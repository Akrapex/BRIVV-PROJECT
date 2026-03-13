import { IoMdInformationCircleOutline } from "react-icons/io";
import { LuTag } from "react-icons/lu";
import { BsKey } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useState } from "react";

interface Type {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const propertyType: Type[] = [
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

  return (
    <div className="mt-8 bg-white border border-tertiary rounded-xl overflow-hidden">
      <header className="py-4 px-6 bg-[#F8FAFC80] border-b border-[#F1F5F9] flex items-center gap-2">
        <IoMdInformationCircleOutline size={25} color="#6B8E23" />
        <h2 className="text-[20px] font-bold text-[#0D1B0D]">
          Property Basics
        </h2>
      </header>

      <div className="p-8">
        <h3 className="text-[16px] font-semibold text-[#0D1B0D]">
          Listing Category
        </h3>

        <div className="mt-4 flex gap-8">
          {propertyType.map((type) => (
            <div
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`grow flex flex-col justify-center items-center w-70.5 gap-2 py-6 border ${selectedType === type.id ? "border-[#6B8E23] text-[#6B8E23]" : "border-tertiary text-[#94A3B8]"} rounded-lg cursor-pointer transition-all duration-300`}
            >
              {type.icon}
              <h4 className="text-[14px] font-bold">{type.label}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PropertyBasics;
