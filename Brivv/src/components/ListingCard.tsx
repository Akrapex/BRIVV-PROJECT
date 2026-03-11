import type { Listing } from "./constant/listing";
import { MdOutlineEdit, MdOutlineRemoveRedEye } from "react-icons/md";

interface Props {
    properties: Listing;
}

function ListingCard({properties}: Props) {
  return (
    <article className="relative grow w-76 rounded-xl overflow-hidden bg-white border border-[#CFDBE7]">
        <span className={`absolute top-4 left-4 py-1 px-2 rounded-sm text-[10px] text-white ${properties.status === "LIVE" ? "bg-[#22C55E]" : "bg-[#F59E0B]"}`}>{properties.status}</span>
        <div className="w-full h-48">
            <img src={properties.image} className="w-full h-full object-cover" />
        </div>

        <div className="p-4">
            <h1 className="text-[18px] font-bold text-[#0D141B] leading-7">{properties.title}</h1>
            <p className="text-[14px] text-[#4C739A]">{properties.location}</p>

            <div className="mt-3 flex items-center justify-between">
                <h3 className="text-[14px] text-[#0D141B] leading-6 font-bold">{properties.price}</h3>

                <div className="flex gap-2">
                    <span className="p-2 rounded-lg bg-[#F1F5F9] cursor-pointer hover:bg-[#e7e7e7] transition duration-300">
                        <MdOutlineEdit />
                    </span>

                    <span className="p-2 rounded-lg bg-[#F1F5F9] cursor-pointer hover:bg-[#e7e7e7] transition duration-300">
                        <MdOutlineRemoveRedEye />
                    </span>
                </div>
            </div>
        </div>
    </article>
  )
}

export default ListingCard