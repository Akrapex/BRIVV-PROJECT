import { Info, Smartphone } from "lucide-react";
import SecurityCard from "./SecurityCard";
import Toggle from "./Toggle";
import type { SetStateAction } from "react";

interface TwoFactorAuthType {
  authenticator: boolean;
  sms: boolean;
  setTwoFactor: React.Dispatch<
    SetStateAction<{ authenticator: boolean; sms: boolean }>
  >;
}

const TwoFactorAuth = ({
  authenticator,
  sms,
  setTwoFactor,
}: TwoFactorAuthType) => {
  return (
    <SecurityCard className="space-y-6">
      <h2 className="flex items-center gap-3 font-bold text-lg">
        <span className="p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-600">
          <Smartphone size={20} />
        </span>
        Two-Factor Auth
      </h2>
      <div className="space-y-6">
        <div className="flex items-start justify-between">
          <div className="max-w-[80%]">
            <p className="font-bold text-sm">Authenticator App</p>
            <p className="text-xs text-slate-400 mt-1">
              Use an app like Google Authenticator or 1Password to generate
              verification codes.
            </p>
          </div>
          <Toggle
            enabled={authenticator}
            onChange={() =>
              setTwoFactor((prev) => ({
                ...prev,
                authenticator: !prev.authenticator,
              }))
            }
          />
        </div>
        <div className="flex items-start justify-between">
          <div className="max-w-[80%]">
            <p className="font-bold text-sm">SMS Verification</p>
            <p className="text-xs text-slate-400 mt-1">
              Receive a security code via text message when you log in.
            </p>
          </div>
          <Toggle
            enabled={sms}
            onChange={() =>
              setTwoFactor((prev) => ({ ...prev, sms: !prev.sms }))
            }
          />
        </div>

        {/* Backup Codes Alert */}
        <div className="flex items-start gap-4 p-4 bg-[#f9faf4] border border-[#e2e9d4] rounded-xl">
          <div className="bg-[#7da02b] p-1 rounded-full text-white">
            <Info
              size={14}
              fill="currentColor"
              className="text-[#7da02b]"
              stroke="white"
            />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-800">Backup Codes</p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              You have 10 unused backup codes remaining.
            </p>
            <button className="text-[11px] font-black text-[#7da02b] mt-2 flex items-center gap-1 hover:underline uppercase">
              Download Codes
            </button>
          </div>
        </div>
      </div>
    </SecurityCard>
  );
};

export default TwoFactorAuth;
