import React, { useState } from "react";
import {
  Download,
  Trash2,
  Info,
  ShieldCheck,
  Eye,
  Database,
  ExternalLink,
} from "lucide-react";

// --- Sub-Components ---

const SectionCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`bg-white border border-slate-200 rounded-xl overflow-hidden ${className}`}
  >
    {children}
  </div>
);

const Toggle = ({
  enabled,
  onChange,
}: {
  enabled: boolean;
  onChange: () => void;
}) => (
  <button
    onClick={onChange}
    className={`w-12 h-6 rounded-full transition-colors relative ${enabled ? "bg-[#7da02b] border-[#6a8a25]" : "bg-slate-100 border-slate-300"}`}
  >
    <div
      className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${enabled ? "translate-x-6.75" : "translate-x-1"}`}
    />
  </button>
);

const RadioOption = ({
  selected,
  label,
  description,
  onClick,
}: {
  selected: boolean;
  label: string;
  description: string;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${selected ? "border-[#7da02b] bg-[#f9faf4]" : "border-slate-200 bg-white hover:border-slate-300"}`}
  >
    <div>
      <p
        className={`font-bold text-sm ${selected ? "text-slate-900" : "text-slate-700"}`}
      >
        {label}
      </p>
      <p className="text-xs text-slate-400 mt-0.5">{description}</p>
    </div>
    <div
      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selected ? "border-[#7da02b]" : "border-slate-300"}`}
    >
      {selected && <div className="w-2.5 h-2.5 rounded-full bg-[#7da02b]" />}
    </div>
  </button>
);

// --- Main Component ---

const PrivacyControl = () => {
  const [profileType, setProfileType] = useState<"public" | "private">(
    "public",
  );
  const [showPhone, setShowPhone] = useState(true);
  const [personalized, setPersonalized] = useState(true);
  const [sharePartners, setSharePartners] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#f9fafb] p-6 md:p-10 font-sans text-slate-900">
      <div className="w-full max-w-[1440px] mx-auto space-y-8">
        {/* Page Title Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-extrabold text-slate-900">
            Privacy & Data Control
          </h1>
          <p className="text-[#4C739A] font-medium text-sm mt-1">
            Take command of your digital presence and manage how EstateFlow uses
            your information.
          </p>
        </header>

        {/* Profile Visibility Section */}
        <SectionCard>
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h2 className="font-bold text-slate-800 flex items-center gap-2">
              Profile Visibility
            </h2>
            <span className="text-[10px] font-black bg-[#f1f4e9] text-[#5e7a21] px-2 py-0.5 rounded border border-[#dce6c4] uppercase tracking-widest">
              Live Status
            </span>
          </div>
          <div className="p-6 space-y-4">
            <RadioOption
              selected={profileType === "public"}
              label="Public Profile"
              description="Your profile and listed properties are visible to everyone on the platform."
              onClick={() => setProfileType("public")}
            />
            <RadioOption
              selected={profileType === "private"}
              label="Private Profile"
              description="Only you and verified entities you interact with can see your full profile."
              onClick={() => setProfileType("private")}
            />

            <div className="pt-4 flex items-center justify-between border-t border-slate-50 mt-6">
              <div>
                <p className="font-bold text-sm text-slate-800">
                  Show phone number to verified agents
                </p>
                <p className="text-xs text-slate-400">
                  Allow licensed professionals to contact you directly regarding
                  inquiries.
                </p>
              </div>
              <Toggle
                enabled={showPhone}
                onChange={() => setShowPhone(!showPhone)}
              />
            </div>
          </div>
        </SectionCard>

        {/* Data Usage & Sharing Section */}
        <SectionCard>
          <div className="p-6 border-b border-slate-100">
            <h2 className="font-bold text-slate-800">Data Usage & Sharing</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-sm text-slate-800">
                  Personalized Recommendations
                </p>
                <p className="text-xs text-slate-400">
                  Use my browsing history to show me relevant properties and
                  educational content.
                </p>
              </div>
              <Toggle
                enabled={personalized}
                onChange={() => setPersonalized(!personalized)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-sm text-slate-800">
                  Share Data with Partners
                </p>
                <p className="text-xs text-slate-400">
                  Allow third-party mortgage lenders and moving services to view
                  your property interests.
                </p>
              </div>
              <Toggle
                enabled={sharePartners}
                onChange={() => setSharePartners(!sharePartners)}
              />
            </div>

            {/* Info Box */}
            <div className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-100 rounded-xl">
              <Info size={16} className="text-[#7da02b] mt-0.5" />
              <p className="text-[11px] text-slate-400 leading-relaxed italic">
                Disabling data sharing may limit our ability to provide you with
                tailored financial services and exclusive property insights that
                match your profile.
              </p>
            </div>
          </div>
        </SectionCard>

        {/* Bottom Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Export Data */}
          <SectionCard className="p-6 space-y-4">
            <div className="w-10 h-10 bg-[#f1f4e9] border border-[#dce6c4] rounded-lg flex items-center justify-center text-[#7da02b]">
              <Database size={20} />
            </div>
            <div>
              <h3 className="font-bold text-slate-800">Export My Data</h3>
              <p className="text-xs text-slate-400 mt-1">
                Download a copy of all your profile data, listings, and
                education history in JSON format.
              </p>
            </div>
            <button className="w-full button">Request Data Export</button>
          </SectionCard>

          {/* Delete Account */}
          <SectionCard className="p-6 space-y-4">
            <div className="w-10 h-10 bg-[#fff1f1] border border-[#fee2e2] rounded-lg flex items-center justify-center text-red-500">
              <Trash2 size={20} />
            </div>
            <div>
              <h3 className="font-bold text-slate-800">Delete Account</h3>
              <p className="text-xs text-slate-400 mt-1">
                Permanently remove your account and all associated data from
                EstateFlow.
              </p>
            </div>
            <button className="w-full button-transparent">
              Delete My Account
            </button>
          </SectionCard>
        </div>

        {/* Footer Resources */}
        <footer className="bg-[#f2f5f1] rounded-xl p-8 border border-slate-100">
          <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-4">
            Privacy Resources
          </h4>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Cookie Policy",
              "Contact Privacy Officer",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs font-bold text-[#7da02b] hover:underline flex items-center gap-1 transition-all"
              >
                {item}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyControl;
