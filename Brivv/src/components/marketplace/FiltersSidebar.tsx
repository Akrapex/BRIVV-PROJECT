
const FiltersSidebar = () => {
  return (
    <aside className="bg-white p-6 rounded-lg shadow-sm w-[288px] h-[800px] py-6">
      <h3 className="font-semibold mb-4">Advanced Filters</h3>

      <div className="mb-6">
        <p className="text-sm font-medium mb-2">Property Type</p>
        <div className="flex flex-col gap-2 text-gray-600 text-sm">
          <label>
            <input type="checkbox" /> Houses
          </label>
          <label>
            <input type="checkbox" /> Apartments
          </label>
          <label>
            <input type="checkbox" /> Townhomes
          </label>
        </div>
      </div>

      {/* AMENITIES */}
      <div>
        <h3 className="font-bold text-gray-800 mb-4 tracking-wide">
          AMENITIES
        </h3>

        <div className="space-y-4 pb-8">
          {/* Selected Amenity */}
          <div className="bg-[#DDE3D1] rounded-xl px-4 py-3 flex items-center gap-3">
            <span>🏊</span>
            <span className="text-[#6B8E23] font-semibold">Swimming Pool</span>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <span>🏋️</span>
            <span>Gym / Fitness</span>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <span>🚗</span>
            <span>Private Garage</span>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <span>🧺</span>
            <span>In-unit Laundry</span>
          </div>
        </div>
      </div>

      {/* YEAR BUILT */}
      <div className="border-t py-6">
        <h3 className="font-bold text-gray-800 mb-4">YEAR BUILT</h3>

        {/* Fake slider (visual only) */}
        <div className="h-2 bg-gray-300 rounded-full mb-3"></div>

        <div className="flex justify-between text-sm text-gray-500">
          <span>Before 1990</span>
          <span>2024+</span>
        </div>
      </div>

      {/* LEASE TERMS */}
      <div className="border-t py-6">
        <h3 className="font-bold text-gray-800 mb-4">LEASE TERMS</h3>

        <div className="space-y-3">
          <label className="flex items-center gap-3 text-gray-700">
            <input type="radio" name="lease" className="w-4 h-4" />
            Short-term
          </label>

          <label className="flex items-center gap-3 text-gray-700">
            <input
              type="radio"
              name="lease"
              defaultChecked
              className="accent-[#6B8E23] w-4 h-4"
            />
            Long-term
          </label>
        </div>
      </div>

      <div className="pb-20">
        <p className="text-sm font-medium mb-2">Lease Terms</p>
        <div className="flex flex-col gap-2 text-gray-600 text-sm">
          <label>
            <input type="checkbox" /> Short-term
          </label>
          <label>
            <input type="checkbox" /> Long-term
          </label>
        </div>
      </div>
    </aside>
  );
}

export default FiltersSidebar
