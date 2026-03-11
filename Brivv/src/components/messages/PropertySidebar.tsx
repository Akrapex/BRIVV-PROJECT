const  PropertySidebar = () => {
  return (
    <div className="   p-4 space-y-6">
      <div className="bg-white rounded-lg p-4 w-70">
        <h4 className="font-bold text-xs mb-2">Property Stats</h4>

        <div className="text-sm text-gray-600 space-y-2">
          <div className="flex justify-between items-center">
            <p className="text-[#64748B] text-[12px] font-normal">
              Days on Market
            </p>
            <span className="font-semibold text-[12px]">12 Days</span>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[#64748B] text-[12px] font-normal">
              Total Views
            </p>
            <span className="font-semibold text-[12px]">1,248</span>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[#64748B] text-[12px] font-normal">
              Current Offers
            </p>
            <span className="font-semibold text-[12px] text-primary">
              2 Active
            </span>
          </div>
        </div>
        <div className=" rounded-lg p-4">
          <h4 className="font-bold text-[#64748B] text-[10px] mb-2">
            Key Features
          </h4>

          <div className="flex flex-wrap gap-2 text-sm">
            <span className="bg-tertiary px-2 py-1 rounded">3 Beds</span>
            <span className="bg-tertiary px-2 py-1 rounded">2.5 Baths</span>
            <span className="bg-tertiary px-2 py-1 rounded">Balcony</span>
          </div>
          <h4 className="font-bold text-[10px] text-[#64748B] mt-2">
            Key City View
          </h4>
        </div>
      </div>

      <div className="border rounded-lg p-8 px-5 bg-[#6B8E230D] border-primary">
        <div className="flex items-center gap-3 mb-2">
          <img src="/images/negiotion-icon.svg" alt="icon" />
          <h4 className="font-semibold ">Negotiation Tip</h4>
        </div>

        <p className="text-sm text-gray-600 w-[238px] leading-5">
          Buyers offering a 30-day close are often prioritized.
        </p>
        <p className="text-primary font-bold text-[12px] pt-3">
          Learn more in Education
        </p>
      </div>
    </div>
  );
}
export default  PropertySidebar