function UtilityInfo() {
  return (
    <form className="flex flex-col gap-3">
      <div className="flex items-center gap-6">
        <label className="grow w-106.75 flex flex-col gap-1">
          <p className="text-[#334155] font-medium text-[14px]">
            Property Title
          </p>
          <input
            className="w-full h-12 px-4 outline-2 outline-transparent focus:outline-tertiary border border-tertiary rounded-lg transition-all duration-300"
            type="text"
            placeholder="e.g., Modern 3-Bedroom Villa with Garden"
          />
        </label>

        <label className="grow w-106.75 flex flex-col gap-1">
          <p className="text-[#334155] font-medium text-[14px]">Heating Type</p>

          <select className="p-3 w-full border border-[#E2E8F0] rounded-md focus:outline-0">
            <option value="">Gas Central Heating</option>
          </select>
        </label>
      </div>

      <div className="flex items-center gap-6">
        <label className="grow w-106.75 flex flex-col gap-1">
          <p className="text-[#334155] font-medium text-[14px]">
            Property Title
          </p>
          <input
            className="w-full h-12 px-4 outline-2 outline-transparent focus:outline-tertiary border border-tertiary rounded-lg transition-all duration-300"
            type="text"
            placeholder="e.g., City Water Works"
          />
        </label>

        <label className="grow w-106.75 flex flex-col gap-1">
          <p className="text-[#334155] font-medium text-[14px]">
            Waste Management
          </p>
          <input
            className="w-full p-3 outline-2 outline-transparent focus:outline-tertiary border border-tertiary rounded-lg transition-all duration-300"
            type="text"
            placeholder="Municipal or Private"
          />
        </label>
      </div>
    </form>
  );
}

export default UtilityInfo;
