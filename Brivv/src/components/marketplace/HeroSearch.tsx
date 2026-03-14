import { BiCalendar, BiSearch } from "react-icons/bi";

const  HeroSearch = () =>{
  return (
    <section className="bg-white pb-20 pt-5 md:px-20 px-10">
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
            <BiSearch className="text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by city, neighborhood, or ZIP"
              className="bg-transparent w-full outline-none py-6 rounded-xl text-gray-600"
            />
          </div>

          <button className="bg-primary text-white px-8 py-4 font-bold text-base rounded-lg">
            Search
          </button>
        </div>

        {/* Filters */}
        <div className="md:hidden">
          <p className="text-sm text-gray-500 mt-4">Popular Filters:</p>
          <div className="flex items-center gap-3 mt-2">
            <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">
              Apartments
            </span>
            <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">
              Houses
            </span>
            <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">
              Townhomes
            </span>
          </div>
        </div>
        <div className="md:flex gap-3 mt-4 hidden ">
          <select className="bg-gray-100 px-4 py-2 rounded-md text-gray-700">
            <option>Price Range</option>
          </select>

          <select className="bg-gray-100 px-4 py-2 rounded-md text-gray-700">
            <option>Property Type</option>
          </select>

          <select className="bg-gray-100 px-4 py-2 rounded-md text-gray-700">
            <option>Bedrooms</option>
          </select>

          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-md text-gray-700">
            Move-in Date
            <BiCalendar size={16} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default  HeroSearch