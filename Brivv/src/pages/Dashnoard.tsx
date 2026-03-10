import ProfileHeader from "../components/ProfileHeader";
import SideNav from "../components/SideNav";

export default function Dashboard() {
  return (
    <main className="flex bg-[#f7f8f6]">
      <SideNav />
      <section className="grow">
        <ProfileHeader />
      </section>
    </main>
  )
}
