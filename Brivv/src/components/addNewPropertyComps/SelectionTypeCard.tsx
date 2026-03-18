interface ListingCategory {
  label: string;
  icon: React.ReactNode;
  active: boolean | string;
  onclick: React.MouseEventHandler<HTMLDivElement>;
}

function SelectionTypeCard({ label, icon, active, onclick }: ListingCategory) {
  return (
    <div
      onClick={onclick}
      className={`grow w-51.75 flex flex-col justify-center items-center gap-2 py-6 border-2 ${active ? "border-[#6B8E23] text-[#6B8E23] bg-[#f8f9f4]" : "border-tertiary text-[#94A3B8]"} rounded-lg cursor-pointer transition-all duration-300`}
    >
      {icon}
      <h4 className="text-[14px] font-bold">{label}</h4>
    </div>
  );
}

export default SelectionTypeCard;
