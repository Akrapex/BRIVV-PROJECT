import Footer from "../components/layouts/Footer";
import FiltersSidebar from "../components/marketplace/FiltersSidebar";
import HeroSearch from "../components/marketplace/HeroSearch";
import Pagination from "../components/marketplace/Pagination";
import PropertyGrid from "../components/marketplace/PropertGrid";


const Marketplace = () => {
  return (
    <>
      <main className="bg-[#F7F8F6]">
        <HeroSearch />
        <div className="wrapper  py-10 flex gap-8 ">
          <FiltersSidebar />
          <div className="flex-1">
            <PropertyGrid />
            <Pagination />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Marketplace
