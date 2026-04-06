const PromoCard = () => {
  return (
    <div className="bg-[#12140e] rounded-2xl p-6 text-white relative overflow-hidden group">
      <div className="relative z-10 space-y-4">
        <h4 className="text-lg font-bold leading-tight">Real Estate Academy</h4>
        <p className="text-xs text-slate-400 leading-relaxed">
          Get 20% off your next property investment course when you pay with a
          verified bank account.
        </p>
        <button className="w-full button">Browse Courses</button>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#7da02b] opacity-10 blur-[60px] rounded-full -mr-10 -mt-10" />
    </div>
  );
};

export default PromoCard;
