import { AiOutlineSearch } from "react-icons/ai";
import { RxCaretDown } from "react-icons/rx";

const HeroSearch = () => {
  return (
    <section className="bg-white pt-5 md:px-20 px-10 ">
      <div className="  wrapper">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-900">
          Find your dream home
        </h1>

        <p className="text-gray-500 mt-2">
          Explore 24,000+ properties for sale and rent
        </p>

        {/* Search bar */}
        <form className="hidden lg:flex px-4 items-center gap-3  rounded-lg bg-red-600">
          <AiOutlineSearch color="#4C739A" />
          <input
            type="text"
            placeholder="Search properties, guides..."
            className="py-3 focus:outline-0 w-50 placeholder:text-[#4C739A] bg-transparent"
          />
        </form>
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
};

export default HeroSearch;
