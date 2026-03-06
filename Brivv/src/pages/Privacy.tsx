import React, { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const PrivacyDataControl: React.FC = () => {
  const [visibility, setVisibility] = useState<"public" | "private">("public");
  const [showPhone, setShowPhone] = useState(true);
  const [recommendations, setRecommendations] = useState(true);
  const [sharePartners, setSharePartners] = useState(false);

  return (
    <div className="flex-1 flex flex-col gap-8">
      {/* Page Heading */}
      <div className="flex flex-col gap-2">
        <h2 className="text-[#0d1b10] dark:text-slate-950 mt-5 mb-5 text-5xl font-black tracking-tight">
          Privacy & Data Control
        </h2>
        <p className="text-green-600 text-base">
          Take command of your digital presence and manage how EstateFlow uses
          your information.
        </p>
      </div>

      {/* Profile Visibility */}
      <section className="bg-white dark:bg-dark rounded-xl border border-[#e7f3e9] shadow-xl overflow-hidden">
        <div className="px-6 py-5 border-b border-[#e7f3e9] dark:border-green-400 flex justify-between items-center">
          <h3 className="text-[#0d1b10] dark:text-slate-950 text-lg font-bold">
            Profile Visibility
          </h3>
          <span className="bg-primary/10 text-green-600 text-[10px] font-bold uppercase border dark:border-green-300 tracking-widest px-2 py-1 rounded">
            Live Status
          </span>
        </div>

        <div className="p-6 flex flex-col gap-4">

          {/* Public Profile */}
          <label className="flex items-center gap-4 rounded-xl border border-[#cfe7d3] dark:border-green-500 p-4 flex-row-reverse cursor-pointer hover:bg-background-light dark:hover:bg-green-200 transition-colors">
            <input
              type="radio"
              name="visibility"
              checked={visibility === "public"}
              onChange={() => setVisibility("public")}
              className="h-5 w-5 border-2 border-[#cfe7d3]"
            />
            <div className="flex grow flex-col">
              <p className="text-[#0d1b10] dark:text-slate-950 text-sm font-bold">
                Public Profile
              </p>
              <p className="text-[#4c9a59] text-sm">
                Your profile and listed properties are visible to everyone on
                the platform.
              </p>
            </div>
          </label>

          {/* Private Profile */}
          <label className="flex items-center gap-4 rounded-xl border border-[#cfe7d3] dark:border-green-500 p-4 flex-row-reverse cursor-pointer hover:bg-background-light dark:hover:bg-green-200 transition-colors">
            <input
              type="radio"
              name="visibility"
              checked={visibility === "private"}
              onChange={() => setVisibility("private")}
              className="h-5 w-5 border-2 border-[#cfe7d3]"
            />
            <div className="flex grow flex-col">
              <p className="text-[#0d1b10] dark:text-slate-950 text-sm font-bold">
                Private Profile
              </p>
              <p className="text-[#4c9a59] text-sm">
                Only you and verified entities you interact with can see your
                full profile.
              </p>
            </div>
          </label>

          {/* Show phone toggle */}
          <div className="mt-4 pt-4 border-t border-[#e7f3e9] dark:border-green-400">
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex flex-col gap-1">
                <p className="text-[#0d1b10] dark:text-slate-950 text-sm font-bold">
                  Show phone number to verified agents
                </p>
                <p className="text-[#4c9a59] text-[15px]">
                  Allow licensed professionals to contact you directly regarding inquiries.
                </p>
              </div>

              <input
                type="checkbox"
                checked={showPhone}
                onChange={() => setShowPhone(!showPhone)}
                className="sr-only peer"
              />

              <div className="w-11 h-6 bg-[#e7f3e9] border-green-500 rounded-full relative
                peer-checked:bg-primary
                after:content-['']
                after:absolute
                after:top-0.5
                after:left-0.5
                after:bg-white
                after:border
                after:rounded-full
                after:h-5
                after:w-5
                after:transition-all
                peer-checked:after:translate-x-full
              " />
            </label>
          </div>

        </div>
      </section>

      {/* Data Usage */}
      <section className="bg-white dark:bg-dark rounded-xl border border-[#e7f3e9] shadow-xl overflow-hidden">
        <div className="px-6 py-5 border-b border-[#e7f3e9] dark:border-green-400">
          <h3 className="text-[#0d1b10] dark:text-slate-950 text-lg font-bold">
            Data Usage & Sharing
          </h3>
        </div>

        <div className="p-6 flex flex-col gap-6">

          {/* Recommendations */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 pr-10">
              <p className="text-[#0d1b10] dark:text-slate-950 text-[18px] font-bold">
                Personalized Recommendations
              </p>
              <p className="text-[#4c9a59] text-[15px]">
                Use my browsing history to show me relevant properties and educational content.
              </p>
            </div>

            <input
              type="checkbox"
              checked={recommendations}
              onChange={() => setRecommendations(!recommendations)}
              className="sr-only peer"
            />

            <div className="w-11 h-6 bg-[#e7f3e9] dark:bg-green-300 rounded-full relative
              peer-checked:bg-primary
              after:content-['']
              after:absolute
              after:top-0.5
              after:left-0.5
              after:bg-white
              after:border
              after:rounded-full
              after:h-5
              after:w-5
              after:transition-all
              peer-checked:after:translate-x-full
            " />
          </div>

          {/* Share partners */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 pr-10">
              <p className="text-[#0d1b10] dark:text-slate-950 text-[18px] font-bold">
                Share Data with Partners
              </p>
              <p className="text-[#4c9a59] text-[15px]">
                Allow third-party mortgage lenders and moving services to view your property interests.
              </p>
            </div>

            <input
              type="checkbox"
              checked={sharePartners}
              onChange={() => setSharePartners(!sharePartners)}
              className="sr-only peer"
            />

            <div className="w-11 h-6 bg-[#e7f3e9] dark:bg-green-100 rounded-full relative
              peer-checked:bg-primary
              after:content-['']
              after:absolute
              after:top-0.5
              after:left-0.5
              after:bg-white
              after:border
              after:rounded-full
              after:h-5
              after:w-5
              after:transition-all
              peer-checked:after:translate-x-full
            " />
          </div>

          {/* Info box */}
          <div className="bg-background-light dark:bg-green-100 p-4 rounded-lg flex gap-3">
            <CiCircleInfo className="text-2xl text-green-600" />
            <p className="text-xs text-[#4c9a59] leading-relaxed">
              Disabling data sharing may limit our ability to provide you with tailored financial services and exclusive property insights.
            </p>
          </div>

        </div>
      </section>

      {/* Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Export Data */}
        <div className="bg-white dark:bg-white/5 p-6 rounded-xl border border-[#e7f3e9] dark:border-green-100 shadow-xl flex flex-col gap-4 w-96">
          <div className="size-10 bg-green-300 text-primary rounded-lg flex items-center justify-center">
            <MdOutlineDownloadForOffline className="text-3xl text-green-600"/>
          </div>

          <div>
            <p className="text-[#0d1b10] dark:text-slate-950 text-base font-bold">
              Export My Data
            </p>
            <p className="text-[#4c9a59] text-xs">
              Download a copy of all your profile data, listings, and education history in JSON format.
            </p>
          </div>

          <button className="mt-auto w-full bg-primary text-background-dark font-bold py-3 rounded-lg hover:brightness-110 transition-all">
            Request Data Export
          </button>
        </div>

        {/* Delete Account */}
        <div className="bg-white dark:bg-white/5 p-6 rounded-xl border border-[#e7f3e9] dark:border-green-100 shadow-xl flex flex-col gap-4 w-96">
          <div className="size-10 bg-red-300 text-red-500 rounded-lg flex items-center justify-center">
            <MdDeleteForever className="text-3xl text-red-500" />
          </div>

          <div>
            <p className="text-[#0d1b10] dark:text-slate-950 text-base font-bold">
              Delete Account
            </p>
            <p className="text-[#4c9a59] text-xs">
              Permanently remove your account and all associated data from EstateFlow.
            </p>
          </div>

          <button className="mt-auto w-full border border-red-500/50 text-red-500 font-bold py-3 rounded-lg hover:bg-red-500/10 transition-all">
            Delete My Account
          </button>
        </div>

      </div>

      {/* Legal Links */}
      <div className="mt-4 p-6 bg-[#e7f3e9]/30 dark:bg-green-200/30 rounded-xl">
        <h4 className="text-[#0d1b10] dark:text-slate-950 text-sm font-bold mb-4">
          Privacy Resources
        </h4>

        <div className="flex flex-wrap gap-4">
          <a className="text-primary text-xs font-semibold">
            Privacy Policy
          </a>
          <a className="text-primary text-xs font-semibold">
            Terms of Service
          </a>
          <a className="text-primary text-xs font-semibold">
            Cookie Policy
          </a>
          <a className="text-primary text-xs font-semibold">
            Contact Privacy Officer
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyDataControl;
