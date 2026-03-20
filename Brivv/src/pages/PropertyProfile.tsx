import TopNav from "../components/layouts/TopNav";
import Footer from "../components/layouts/Footer";
import Herosection from "../components/propertyDetailsProfile/Herosection";
import ModernOakVilla from "../components/propertyDetailsProfile/ModernOakVilla";

export default function Discover() {
  return (
    <>
      <div className="w-5/6 mx-auto">
        <Herosection />
        <ModernOakVilla />
        <Footer />
      </div>
    </>
  );
}
