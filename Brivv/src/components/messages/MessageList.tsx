

const chats = [
  {
    image: "/images/sunset-villa.png",
    name: "Sunset Heights Apt",
    message: "John: Does the price negotiable?",
    time: "10:43 AM",
  },
  {
    image: "/images/modern-villa.svg",
    name: "Modern Villa",
    message: "Paul: Please review the contract",
    time: "Yesterday",
  },
  {
    image: "/images/green-valley.svg",
    name: "Green Valley Estate",
    message: "Sarah: The appraisal is done",
    time: "Oct 12",
  },
  {
    image: "/images/slash screen.svg",
    name: "Urban Loft Unit 4B",
    message: "You: Sent the deposit receipt.",
    time: "Oct 10",
  },
];

const   MessageList = () => {
  return (
    <div className=" h-[90vh] w-95 bg-white shadow-2xl p-4 flex flex-col rounded-2xl sticky top-10">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold mb-4">Messages</h2>
        <img
          src="/images/meassahe-icon.svg"
          alt="messageIcon"
          className="w-5"
        />
      </div>

      <div className=" flex items-center gap-2 rounded-lg px-3 py-2 text-sm mb-4 bg-[#F1F5F9]">
        <img src="/images/search-icon.svg" alt="searchIcon" className="w-4" />
        <input placeholder="Search conversations..." />
      </div>

      <div className="space-y-3">
        {chats.map((chat, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-4 rounded-lg  cursor-pointer ${index === 0 && "bg-[#6B8E231A]"}`}
          >
            <img src={chat.image} className="w-10 h-10 rounded-lg" />

            <div className="">
              <p className="text-sm font-semibold">{chat.name}</p>
              <p
                className={`text-xs text-gray-500 ${index === 0 && "text-primary"}`}
              >
                {chat.message}
              </p>
            </div>

            <span className="text-xs text-gray-400">{chat.time}</span>
            {index === 1 && (
              <div className="bg-[#22C55E] w-2 h-2 rounded-full"> </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default  MessageList