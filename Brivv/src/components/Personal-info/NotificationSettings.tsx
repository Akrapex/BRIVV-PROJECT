import { Bell } from "lucide-react";
import type { SetStateAction } from "react";
import type { UserData } from "./PersonalInfo";

interface NotificationItem {
  id: string;
  label: string;
  desc: string;
}

interface NotificationSettingsProps {
  notifications: NotificationItem[];
  formData: UserData;
  setFormData: React.Dispatch<SetStateAction<UserData>>;
}

const NotificationSettings = ({
  notifications,
  formData,
  setFormData,
}: NotificationSettingsProps) => {
  const handleToggle = (key: keyof UserData) => {
    setFormData((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="space-y-6">
      <h3 className="flex items-center gap-2 font-bold text-lg text-slate-800">
        <Bell size={20} className="text-yellow-500" /> Notifications
      </h3>
      <div className="bg-white rounded-xl p-6 border border-slate-200 space-y-6">
        {notifications.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div>
              <p className="font-bold text-sm">{item.label}</p>
              <p className="text-xs text-slate-500">{item.desc}</p>
            </div>
            <button
              onClick={() => handleToggle(item.id as unknown as keyof UserData)}
              className={`w-12 h-6 rounded-full transition-colors relative ${formData[item.id as unknown as keyof UserData] ? "bg-[#7da02b]" : "bg-slate-200"}`}
            >
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${formData[item.id as unknown as keyof UserData] ? "right-1" : "left-1"}`}
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NotificationSettings;
