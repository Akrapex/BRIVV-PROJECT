function ListingForm() {
  return (
    <form className="mt-6">
      <div className="flex flex-wrap gap-4 mb-4">
        <label className="grow w-106.75 flex flex-col gap-1 text-[#0D1B0D]">
          <p className="font-medium">Property Title</p>
          <input
            className="w-full h-12 px-4 outline-2 outline-transparent focus:outline-tertiary border border-tertiary rounded-lg transition-all duration-300"
            type="text"
            placeholder="e.g., Modern 3-Bedroom Villa with Garden"
          />
        </label>

        <label className="grow w-106.75 flex flex-col gap-1 text-[#0D1B0D]">
          <p className="grow font-medium">Asking Price (USD)</p>
          <input
            className="w-full h-12 px-4 outline-2 outline-transparent focus:outline-tertiary border border-tertiary rounded-lg transition-all duration-300"
            type="text"
            placeholder="$ 500,000"
          />
        </label>
      </div>

      <label className="grow flex flex-col gap-1 text-[#0D1B0D]">
        <p className="font-medium">Detailed Description</p>
        <textarea
          className="w-full h-30 p-4 border border-tertiary rounded-lg outline-2 outline-transparent resize-none focus:outline-tertiary transition-all duration-300"
          placeholder="Describe the key features, amenities, and recent renovations..."
        ></textarea>
      </label>
    </form>
  );
}

export default ListingForm;
