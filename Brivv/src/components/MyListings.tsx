import ListingCard from "./ListingCard";
import { propertyListing } from "./constant/listing";
import { IoIosAdd } from "react-icons/io";


const properyToList = propertyListing.slice(0, 2);

function MyListings() {
  return (
    <section>
        <header className="my-6 flex justify-between">
            <h1 className="text-[24px] font-bold text-[#0D141B]">My Listings</h1>
            <h3 className="text-[14px] text-[#6B8E23] font-bold cursor-pointer">Manage All</h3>
        </header>

        <div className="flex gap-3">
            {properyToList.map((property) => (
                <ListingCard key={property.id} properties={property} />
            ))}

                <div className="grow flex items-center justify-center w-76 border-2 hover:bg-[#f1f1f1] border-dashed border-[#CFDBE7] rounded-xl cursor-pointer transition duration-300">

                <div className="w-[80%] text-center">
                    <span className="flex m-auto mb-3 items-center justify-center rounded-full bg-white border border-[#CFDBE7] w-16 h-16">
                        <IoIosAdd size={30} color="#6B8E23" />
                    </span>
                    <h3 className="text-[18px] text-[#0D141B] font-bold leading-7">Post New Property</h3>
                    <p className="text-[14px] text-[#4C739A]">Reach thousands of potential buyers and renters.</p>
                </div>

            </div>
        </div>
    </section>
  )
}

export default MyListings