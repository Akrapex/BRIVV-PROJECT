import type { Property } from "../constant/properties";
import { MdOutlineKingBed } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { LuSendHorizontal } from "react-icons/lu";

interface Props {
  property: Property;
}

const PropertyCard = ({ property }: Props) => {
  return (
    <div className="bg-white  overflow-hidden rounded-xl hover:border border-[#6B8E23]  shadow-sm  hover:shadow-lg transition-all group duration-500 ease-in-out">
      <div className="relative ">
        <img
          src={property.image}
          alt={property.title}
          className="h-52 w-full object-cover transition-all ease-in-out duration-500"
        />

        {property.tag && (
          <span className="absolute top-3 left-3 bg-[#6B8E23] text-white text-xs px-3 py-1 rounded-full">
            {property.tag}
          </span>
        )}

        <button className="absolute top-3 right-3 w-7 h-7 rounded-full border  shadow flex items-center justify-center text-white bg-white/20">
          ♡
        </button>
        <h4 className="text-xl font-bold text-[#6B8E23] absolute bottom-3 right-3 bg-white px-3 py-2 rounded-lg z-200">
          {property.price}
        </h4>
      </div>
      <div className="pt-4 space-y-4 -mt-16  w-full  backdrop:blur-2xl">
        <div className="z-100 relative  bg-linear-to-t from-[#ffffff] to-transparent w-full h-12 backdrop:blur-2xl "></div>
        <div className="p-4 pt-0">
          <p className="text-lg font-bold">{property.title}</p>
          <p className="text-sm text-[#64748B] ">{property.location}</p>
          <hr className="m-3 border border-slate-200" />
          <div className="text-sm text-gray-500 flex gap-4 justify-between w-full ">
            <div className="flex space-x-3 grow items-center">
              <div className="flex justify-around items-center space-x-1 ">
                <MdOutlineKingBed /> <span>{property.beds}</span>
              </div>
              <div className="flex justify-around items-center space-x-1">
                <MdBathtub />
                <span>{property.baths}</span>
              </div>
              <div className="flex ">
                <span>{property.size}</span>
              </div>
            </div>
            <div className="space-x-2">
              <button className="bg-slate-300  text-gray-500 font-medium px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all ease-in-outn duration-300 hover:bg-slate-200">
                <TbListDetails />
              </button>
              <button className="bg-[#6B8E23] text-white font-medium px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all ease-in-outn duration-300 hover:bg-[#6B8E23cc]">
                <LuSendHorizontal />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
