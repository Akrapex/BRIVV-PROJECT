import Footer from "../components/layouts/Footer";
import FiltersSidebar from "../components/marketplace/FiltersSidebar";
import Pagination from "../components/marketplace/Pagination";
import PropertyGrid from "../components/marketplace/PropertGrid";


const Marketplace = () => {
  return (
    <>
      <main className="max-w-7xl mx-auto px-6 py-10 flex gap-8">
        <FiltersSidebar />
        <div className="flex-1">
          <PropertyGrid />
          <Pagination />
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default Marketplace
