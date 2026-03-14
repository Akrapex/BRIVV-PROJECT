interface Type {
  icon: React.ReactNode;
  headerText: string;
  component: React.ReactElement;
  badge?: React.ReactElement;
}

function PropertyCard({ icon, headerText, component, badge }: Type) {
  return (
    <div className="my-8 bg-white border border-tertiary rounded-xl overflow-hidden">
      <header className="py-4 px-6 bg-[#F8FAFC80] border-b border-[#F1F5F9] flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {icon}
          <h2 className="text-[20px] font-bold text-[#0D1B0D]">{headerText}</h2>
        </div>

        {badge && badge}
      </header>

      <div className="p-8">{component}</div>
    </div>
  );
}

export default PropertyCard;
