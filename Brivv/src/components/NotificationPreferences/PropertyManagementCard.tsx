import React from "react";
import Toggle from "./Toggle";

interface PropertyManagementCardProps {
  title: string;
  description: string;
  enabled: boolean;
  onToggle: () => void;
  icon: React.ReactNode;
}

const PropertyManagementCard = ({
  title,
  description,
  enabled,
  onToggle,
  icon,
}: PropertyManagementCardProps) => {
  return (
    <div className="flex items-center justify-between p-6 bg-white border border-slate-200 rounded-2xl group transition-colors hover:border-[#7da02b]/30">
      <div className="flex items-center gap-5">
        <div className="p-3 bg-[#f1f4e9] border border-[#dce6c4] rounded-xl text-[#7da02b]">
          {icon}
        </div>

        <div>
          <p className="font-bold text-slate-800">{title}</p>
          <p className="text-xs text-slate-400 mt-0.5">{description}</p>
        </div>
      </div>

      <Toggle enabled={enabled} onChange={onToggle} />
    </div>
  );
};

export default PropertyManagementCard;
