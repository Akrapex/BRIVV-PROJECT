import { Home, MessageSquare, TrendingDown } from "lucide-react";
import Toggle from "./Toggle";

interface MarketplaceAlertsTableProps {
  alerts: {
    matches: { push: boolean; email: boolean; sms: boolean };
    chat: { push: boolean; email: boolean; sms: boolean };
    price: { push: boolean; email: boolean; sms: boolean };
  };
  toggleAlert: (
    category: "matches" | "chat" | "price",
    channel: "push" | "email" | "sms",
  ) => void;
}

const MarketplaceAlertsTable = ({
  alerts,
  toggleAlert,
}: MarketplaceAlertsTableProps) => {
  const rows = [
    {
      key: "matches",
      label: "New Property Matches",
      icon: <Home size={18} className="text-[#7da02b]" />,
    },
    {
      key: "chat",
      label: "Chat Messages",
      icon: <MessageSquare size={18} className="text-[#7da02b]" />,
    },
    {
      key: "price",
      label: "Price Drops",
      icon: <TrendingDown size={18} className="text-[#7da02b]" />,
    },
  ] as const;

  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-[#f9fafb]/50">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-[10px] font-black text-[#5e7a21] uppercase tracking-[0.15em]">
              <th className="px-8 py-5">Notification Type</th>
              <th className="px-8 py-5 text-center">Push</th>
              <th className="px-8 py-5 text-center">Email</th>
              <th className="px-8 py-5 text-center">SMS</th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-slate-100">
            {rows.map((row) => (
              <tr key={row.key} className="group">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-3">
                    {row.icon}
                    <span className="font-bold text-sm text-slate-700">
                      {row.label}
                    </span>
                  </div>
                </td>

                <td className="px-8 py-6 text-center">
                  <div className="flex justify-center">
                    <Toggle
                      enabled={alerts[row.key].push}
                      onChange={() => toggleAlert(row.key, "push")}
                    />
                  </div>
                </td>

                <td className="px-8 py-6 text-center">
                  <div className="flex justify-center">
                    <Toggle
                      enabled={alerts[row.key].email}
                      onChange={() => toggleAlert(row.key, "email")}
                    />
                  </div>
                </td>

                <td className="px-8 py-6 text-center">
                  <div className="flex justify-center">
                    <Toggle
                      enabled={alerts[row.key].sms}
                      onChange={() => toggleAlert(row.key, "sms")}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketplaceAlertsTable;
