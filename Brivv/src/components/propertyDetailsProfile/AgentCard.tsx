import { BsArrowRight } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const AgentCard = () => {
  return (
    <section>
      <div className="bg-white shadow-2xl rounded-xl p-6 space-y-4  w-[320px] h-[386px]">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/100"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="font-semibold">Marcus Sterling</h3>
            <p className="text-sm text-gray-500">⭐ 4.9 (120 reviews)</p>
          </div>
        </div>

        <div className="bg-gray-100 p-3 rounded-lg text-sm">
          ✔ Verified Agent
        </div>

        <div className="bg-gray-100 p-3 rounded-lg text-sm">
          ⏱ Responds in 1 hour
        </div>

        <button className="w-full bg-primary text-black py-3 rounded-lg text-base font-bold flex justify-center items-center gap-3">
          <MdEmail />
          Contact Seller
        </button>

        <button className="w-full border border-primary text-primary py-3 rounded-lg font-semibold">
          Schedule Tour
        </button>
      </div>
      <div className="bg-[#102215] p-6 rounded-xl space-y-3 mt-6">
        <button className="bg-[#1A2E1F] text-sm font-bold text-primary py-1 px-3 rounded-2xl">
          Education
        </button>
        <p className="text-lg font-bold  text-white">
          First-Time Buyer's Guide
        </p>
        <p className="text-sm font-normal text-white w-[254px]">
          Learn about Austin property taxes and financing options for this area.
        </p>
        <button className="text-base font-bold text-primary flex items-center">Read Guide <BsArrowRight/></button>
      </div>
    </section>
  );
};

export default AgentCard;
