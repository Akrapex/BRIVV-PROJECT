import {  BiSearch } from "react-icons/bi";
import { RxCaretDown } from "react-icons/rx";

const  HeroSearch = () =>{
  return (
    <section className="bg-white pt-5 md:px-20 px-10">
      <div className="  wrapper">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-900">
          Find your dream home
        </h1>

        <p className="text-gray-500 mt-2">
          Explore 24,000+ properties for sale and rent
        </p>

        {/* Search Bar */}
        <div className="flex items-center mt-6 bg-gray-100 rounded-lg px-2">
          <div className="flex items-center gap-3 px-4 flex-1">
            <BiSearch className="text-gray-400 hidden md:block" size={20} />
            <input
              type="text"
              placeholder="Search by city, neighborhood, or ZIP"
              className="bg-transparent w-full outline-none py-6 rounded-xl text-gray-600"
            />
          </div>

          <button className="bg-primary text-white p-4 md:px-8 md:py-4 font-bold text-base rounded-full md:rounded-lg">
           <span className="hidden md:inline-block">Search</span><BiSearch className="text-white md:hidden" size={20} />
          </button>
        </div>

        {/* Filters */}
        <div className="m-4 flex items-center space-x-3">
          <div className="flex items-center space-x-2 px-4 py-2 bg-gray-200 w-fit my-4 rounded-xl">
            <span className="">Sort by</span> <RxCaretDown size={26} />{" "}
          </div>
          <span>Showing Result for:</span>
        </div>
      </div>
    </section>
  );
}

export default  HeroSearch