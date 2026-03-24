import DashboardCards from "../components/DashboardComps/DashboardCards";
import ProfileHeader from "../components/DashboardComps/ProfileHeader";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa6";
import { HiOutlineTrendingUp } from "react-icons/hi";
import UtilityViewings from "../components/DashboardComps/UtilityViewings";
import MyListings from "../components/DashboardComps/MyListings";
import { useAuth } from "../Contexts/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();
  const userName = user?.user_metadata?.full_name;

  return (
    <>
      <ProfileHeader />
      {/* Dashboard Content */}
      <div className="p-7.75">
        <div className="flex flex-wrap gap-5 items-center justify-between mb-8">
          <div>
            <h1 className="text-[30px] font-black leading">
              Welcome back, {userName?.split(" ")[0]}
            </h1>
            <p className="text-[14px] text-[#4C739A]">
              Everything you need to manage your properties in one place.
            </p>
          </div>

          <button className="py-2 px-4 flex items-center gap-2 border border-[#CFDBE7] rounded-lg cursor-pointer">
            <MdOutlineFileDownload />
            Export Report
          </button>
        </div>

        <div className="mb-8 flex flex-wrap gap-5">
          <DashboardCards
            text="Saved Properties"
            count={12}
            icon={<FaArrowUp size={10} />}
            plusSign="+"
            rate={2}
          />
          <DashboardCards text="My Listings" count={3} plusSign="+" rate={0} />
          <DashboardCards
            text="Upcoming Viewings"
            count={5}
            icon={<FaArrowUp size={10} />}
            plusSign="+"
            rate={1}
          />
          <DashboardCards
            text="Reward Points"
            count={1250}
            icon={<HiOutlineTrendingUp size={10} />}
            plusSign="+"
            rate={15}
            indicator="%"
          />
        </div>

        <UtilityViewings />

        {/* My listing */}
        <MyListings />
      </div>
    </>
  );
}
