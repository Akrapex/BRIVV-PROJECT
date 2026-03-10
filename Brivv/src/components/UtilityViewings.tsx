import sampleImage from '../assets/Container.png';
import UpcomingViewings from './UpcomingViewings';

function UtilityViewings() {
  return (
    <section className="flex gap-6">
      <div className="bg-white lg:w-157.25 rounded-xl border border-[#CFDBE7]">
        <div className="p-6 flex justify-between items-center border-b border-[#CFDBE7]">
          <h2 className="text-[18px] font-bold text-[#0D141B]">Utility Spending Overview</h2>
          <select className="py-2 px-4 bg-[#F8FAFC] rounded-md focus:outline-0">
            <option value="">Last 6 Months</option>
          </select>
        </div>

        {/* Chart Container */}
        <div className="p-6">
          <img src={sampleImage} />

          <div className='py-6 border-t border-[#CFDBE7] flex gap-2'>
            <div className="w-45.5 grow">
              <p className="text-[12px] leading-4 text-[#4C739A]">Total Monthly Average</p>
              <h4 className="text-[18px] font-bold">$245.00</h4>
            </div>

            <div className="w-45.5">
              <p className="text-[12px] leading-4 text-[#4C739A]">Most Expensive Month</p>
              <h4 className="text-[18px] font-bold">April</h4>
            </div>

            <div className="w-45.5">
              <p className="text-[12px] leading-4 text-[#4C739A]">Year-to-date Savings</p>
              <h4 className='text-[18px] font-bold text-[#078838]'>-$124.00</h4>
            </div>
          </div>
        </div>
      </div>

      <UpcomingViewings />
    </section>
  ) 
}

export default UtilityViewings