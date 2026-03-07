const ChatPanel = () => {
  return (
    <div className="flex flex-col bg-white shadow-2xl w-[492px] h-[836px] rounded-2xl">
      {/* Header */}
      <div className="p-4 flex justify-between items-center border-b">
        <div className="flex items-center gap-2">
          <img src="/images/sun-height.svg" alt="sunsetheight" />
          <div>
            <h3 className="font-semibold">Sunset Heights Apt</h3>
            <p className="text-green-600 text-sm">$450,000 • Negotiation</p>
          </div>
        </div>

        <button className="bg-[#6B8E231A] text-primary px-4 py-2 rounded-lg text-sm flex items-center gap-2">
          <img src="/images/shedule.svg" alt="schedule-icon" />
          Schedule Viewing
        </button>
      </div>
      <button className="text-[10px] font-bold bg-tertiary text-center mx-auto px-3 py-1 mt-3 rounded-2xl">
        TODAY
      </button>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {/* Incoming message */}
        <div className="flex gap-3 max-w-[320px]">
          <img src="/images/john-doe.svg" alt="john" />

          <div>
            <p className="bg-white p-3 rounded-lg shadow text-sm leading-6">
              Hi! I've reviewed the initial documents for the Sunset Heights
              property. Is the current price negotiable if we can close within
              30 days?
            </p>

            <span className="text-[10px] text-[#94A3B8] font-medium">
              John Doe • 10:42 AM
            </span>
          </div>
        </div>

        {/* Outgoing message */}
        <div className="flex justify-end gap-3">
          <div className="max-w-[320px]">
            <p className="bg-[#6B8E23] text-white p-3 rounded-lg shadow text-sm leading-6">
              Hello John! The owner is open to a slight adjustment for a quick
              closing. I've prepared a draft counter-offer document for your
              review.
            </p>

            <span className="text-[10px] text-[#94A3B8] font-medium">
              10:45 AM • Read
            </span>
          </div>

          <img src="/images/blessing.svg" alt="blessing" />
        </div>

        {/* Another incoming message */}
        <div className="flex gap-3 max-w-[320px]">
          <img src="/images/peter.svg" alt="john" />
          <div>
            <p className="bg-white p-3 rounded-lg shadow text-sm leading-6">
              Hi! I've reviewed the initial documents for the Sunset Heights
              property. Is the current price negotiable if we can close within
              30 days?
            </p>

            <span className="text-[10px] text-[#94A3B8] font-medium">
              John Doe • 10:42 AM
            </span>
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="py-10">
        <div className="p-4  bg-[#F1F5F9] rounded-xl flex items-center gap-3 w-[458px] mx-auto text-center">
          <div className="flex items-center gap-2">
            <img src="/images/plus-icon.svg" alt="plus-icon" />
            <img src="/images/write-icon.svg" alt="write-icon" />
          </div>
          <input
            className="flex-1  rounded-lg px-3 py-2"
            placeholder="Write a message or send a contract..."
          />
          <div className="flex items-center gap-2">
            <img src="/images/stickers.svg" alt="" />
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
              <img src="/images/send-icon.svg" alt="secon-icon" />
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center px-2 pt-3">
          <div className="flex items-center gap-2">
            <img src="/images/lock.svg" alt="lock-icon" />
            <p className="text-[#94A3B8] text-[10px] font-normal">
              End-to-end encrypted negotiation
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#94A3B8] text-[10px] font-bold">
              Templates
            </span>
            <span className="text-[#94A3B8] text-[10px] font-bold">Terms</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPanel;
