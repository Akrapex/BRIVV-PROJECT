import { MdEmail } from "react-icons/md";

const AgentCard = () => {
  return (
    <div className="bg-white shadow-2xl rounded-xl p-6 space-y-4  w-[320px]">
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

      <div className="bg-gray-100 p-3 rounded-lg text-sm">✔ Verified Agent</div>

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
  );
};

export default AgentCard;
