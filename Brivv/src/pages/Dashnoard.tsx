import DashboardCards from "../components/DashboardCards";
import ProfileHeader from "../components/ProfileHeader";
import SideNav from "../components/SideNav";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa6";
import { HiOutlineTrendingUp } from "react-icons/hi";
import UtilityViewings from "../components/UtilityViewings";
import MyListings from "../components/MyListings";

export default function Dashboard() {
  return (
    <main className="flex bg-[#f7f8f6]">
      <SideNav />
      <section className="grow">
        <ProfileHeader />

        {/* Dashboard Content */}
        <div className="p-7.75">

          <div className="flex flex-wrap gap-5 items-center justify-between mb-8">
            <div>
              <h1 className="text-[30px] font-black leading">Welcome back, Alex</h1>
              <p className="text-[14px] text-[#4C739A]">Everything you need to manage your properties in one place.</p>
            </div>

            <button className="py-2 px-4 flex items-center gap-2 border border-[#CFDBE7] rounded-lg cursor-pointer">
              <MdOutlineFileDownload />
              Export Report
            </button>
          </div>

          <div className="mb-8 flex flex-wrap gap-5">
            <DashboardCards text="Saved Properties" count={12} icon={<FaArrowUp size={10} />
              } plusSign="+" rate={2} />
            <DashboardCards text="My Listings" count={3} plusSign="+" rate={0} />
            <DashboardCards text="Upcoming Viewings" count={5} icon={<FaArrowUp size={10} />
              } plusSign="+" rate={1} />
            <DashboardCards text="Reward Points" count={1250} icon={<HiOutlineTrendingUp size={10} />
              } plusSign="+" rate={15} indicator="%" />
          </div>

          <UtilityViewings /> 

          {/* My listing */}
          <MyListings />
        </div>
      </section>
    </main>
  )
}
