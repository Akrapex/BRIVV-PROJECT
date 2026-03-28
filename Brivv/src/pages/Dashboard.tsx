import DashboardCards from "../components/DashboardComps/DashboardCards";
import ProfileHeader from "../components/DashboardComps/ProfileHeader";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa6";
import { HiOutlineTrendingUp } from "react-icons/hi";
import UtilityViewings from "../components/DashboardComps/UtilityViewings";
import MyListings from "../components/DashboardComps/MyListings";
import { useAuth } from "../Contexts/AuthContext";

interface OverViewTypes {
  label: string;
  count: number;
  icon?: React.ReactNode;
  plusSign: string;
  rate: number;
  indicator: string;
}

const overViewData: OverViewTypes[] = [
  {
    label: "Saved Properties",
    count: 0,
    icon: <FaArrowUp size={10} />,
    plusSign: "+",
    rate: 0,
    indicator: "%",
  },
  {
    label: "Upcoming Viewings",
    count: 0,
    icon: <FaArrowUp size={10} />,
    plusSign: "+",
    rate: 0,
    indicator: "%",
  },
  {
    label: "My Listing",
    count: 0,
    icon: <FaArrowUp size={10} />,
    plusSign: "+",
    rate: 0,
    indicator: "%",
  },
  {
    label: "Reward Points",
    count: 0,
    icon: <HiOutlineTrendingUp size={10} />,
    plusSign: "+",
    rate: 0,
    indicator: "%",
  },
];

export default function Dashboard() {
  const { user } = useAuth();
  const userName = user?.user_metadata?.full_name;

  return (
    <>
      <ProfileHeader />
      {/* Dashboard Content */}
      <div className="lg:p-7.75 p-3">
        <div className="lg:flex flex-row  gap-5 items-center justify-between mb-8 ">
          <div>
            <h1 className="text-[30px] font-black leading">
              Welcome back, {userName?.split(" ")[0]}
            </h1>
            <p className="md:text-[14px] text-xs text-[#4C739A] ">
              Everything you need to manage your properties in one place.
            </p>
          </div>

          <button className="py-2 px-4 flex items-center gap-2 mt-6 border border-[#CFDBE7] rounded-lg cursor-pointer">
            <MdOutlineFileDownload />
            Export Report
          </button>
        </div>

        <div className="mb-8  grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 space-y-4 gap-5 ">
          {overViewData.map((data, index) => {
            const showIcon = data.count > 0;
            return (
              <DashboardCards
                key={index}
                text={data.label}
                count={data.count}
                icon={showIcon && data.icon}
                plusSign={data.plusSign}
                rate={data.rate}
              />
            );
          })}
        </div>

        <UtilityViewings />

        {/* My listing */}
        <MyListings />
      </div>
    </>
  );
}
