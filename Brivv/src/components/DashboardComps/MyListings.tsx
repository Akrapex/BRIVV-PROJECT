import { Link } from "react-router";
import ListingCard from "./ListingCard";
import { propertyListing } from "../constant/listing";
import { IoIosAdd } from "react-icons/io";

const properyToList =
  propertyListing.length > 0 ? propertyListing.slice(0, 2) : [];

function MyListings() {
  return (
    <section className="lg:px-0 px-4">
      <header className="my-6 flex items-center gap-2 ">
        <div className="md:flex justify-between gap-10 flex-row ">
          <h1 className="text-[24px] font-bold text-[#0D141B]">My Listings</h1>
          {properyToList.length === 0 && (
            <p className="text-[12px] py-1 px-2 bg-[#e0e0e0] rounded-md font-semibold text-[#6B8E23] lg:my-0 my-2">
              You don't any listing currently, add new property and they'll
              appear here.
            </p>
          )}
        </div>

        {properyToList.length > 0 && (
          <button className="text-[14px] text-[#6B8E23] font-bold cursor-pointer">
            Manage All
          </button>
        )}
      </header>

      <div className="flex gap-3">
        {properyToList.length > 0 &&
          properyToList.map((property) => (
            <ListingCard key={property.id} properties={property} />
          ))}

        <div className="flex items-center justify-center w-76 h-76 border-2 hover:bg-[#f1f1f1] border-dashed border-[#CFDBE7] rounded-xl cursor-pointer transition duration-300">
          <Link to="/add-new-property">
            <div className="w-[80%] m-auto text-center">
              <span className="flex m-auto mb-3 items-center justify-center rounded-full bg-white border border-[#CFDBE7] w-16 h-16">
                <IoIosAdd size={30} color="#6B8E23" />
              </span>
              <h3 className="text-[18px] text-[#0D141B] font-bold leading-7">
                Post New Property
              </h3>
              <p className="text-[14px] text-[#4C739A]">
                Reach thousands of potential buyers and renters.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MyListings;
