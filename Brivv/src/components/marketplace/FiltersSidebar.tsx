import React from 'react'

const FiltersSidebar = () => {
  return (
    <aside className="bg-white p-6 rounded-lg shadow-sm w-64">
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

      <div>
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
