import { useState } from "react";
import MarketplaceAlertsTable from "../../components/NotificationPreferences/MarketPlace";
import PropertyManagementCard from "../../components/NotificationPreferences/PropertyManagementCard";
import { FileText, Wrench } from "lucide-react";
import Section from "../../components/NotificationPreferences/Section";

const NotificationPreferences = () => {
  const [alerts, setAlerts] = useState({
    matches: { push: true, email: true, sms: false },
    chat: { push: true, email: false, sms: false },
    price: { push: true, email: true, sms: true },
    utility: true,
    maintenance: false,
  });

  const toggleAlert = (
    category: "matches" | "chat" | "price",
    channel: "push" | "email" | "sms",
  ) => {
    setAlerts((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [channel]: !prev[category][channel],
      },
    }));
  };

  return (
    <div className="min-h-screen w-full bg-white p-6 md:p-10 font-sans text-slate-900">
      <div className="w-full mx-auto space-y-12">
        <header>
          <h1 className="text-3xl font-extrabold text-slate-900">
            Notification Preferences
          </h1>
          <p className="text-[#7da02b] font-medium text-sm mt-1">
            Stay updated on your real estate journey. Choose how and where you
            receive alerts.
          </p>
        </header>

        <Section title="Marketplace Alerts">
          <MarketplaceAlertsTable alerts={alerts} toggleAlert={toggleAlert} />
        </Section>

        <Section title="Property Management">
          <div className="space-y-4">
            <PropertyManagementCard
              title="Utility Bill Reminders"
              description="Get notified 3 days before your rent or utility bills are due."
              enabled={alerts.utility}
              onToggle={() =>
                setAlerts((prev) => ({
                  ...prev,
                  utility: !prev.utility,
                }))
              }
              icon={<FileText size={22} />}
            />

            <PropertyManagementCard
              title="Maintenance Updates"
              description="Track status changes on your maintenance requests."
              enabled={alerts.maintenance}
              onToggle={() =>
                setAlerts((prev) => ({
                  ...prev,
                  maintenance: !prev.maintenance,
                }))
              }
              icon={<Wrench size={22} />}
            />
          </div>
        </Section>

        <footer className="flex justify-end items-center gap-4 pt-8 border-t border-slate-100">
          <button className="button-transparent">Cancel</button>
          <button className="button">Save Changes</button>
        </footer>
      </div>
    </div>
  );
};

export default NotificationPreferences;
