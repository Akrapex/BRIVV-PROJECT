import AgentCard from "./AgentCard";
import Amenities from "./Amenities";
import MapSection from "./MapSection";


const ModernOakVilla = () => {
  return (
    <div className="wrapper">
      <div className="flex gap-110 items-center">
        <div>
          <div className="mt-6">
            <h2 className="text-5xl font-bold">Modern Oak Villa</h2>
            <p className="text-primary font-medium text-xl py-4">
              123 Greenway Drive, Austin, TX 78701
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              <span className="bg-[#6B8E2333] text-green-700 px-4 py-1 rounded-lg font-semibold">
                $1,250,000
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-lg">4 Beds</span>
              <span className="bg-gray-100 px-3 py-1 rounded-lg">
                3.5 Baths
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-lg">
                3,450 sqft
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-lg">
                Built 2022
              </span>
            </div>
          </div>
          <div>
            <div className="space-y-4 py-10">
              <h3 className="text-xl font-bold">About this property</h3>
              <p className="text-base font-normal text-primary w-150">
                Experience luxury living in the heart of Austin at the Modern
                Oak Villa. This architectural masterpiece seamlessly blends
                contemporary design with natural elements, featuring
                floor-to-ceiling windows that flood the home with Texas
                sunlight.
              </p>
              <p className="text-base font-normal text-primary w-150">
                The open-concept floor plan is perfect for entertaining, with a
                chef-grade kitchen that features custom oak cabinetry, quartz
                countertops, and professional-grade appliances. The primary
                suite offers a private sanctuary with a spa-like bathroom and
                views of the surrounding green belt.
              </p>
              <span className="text-xl font-bold text-primary">Show more</span>
            </div>
          </div>
        </div>
        <AgentCard />
      </div>
      <Amenities />
      <MapSection />
    </div>

    // <div className="wrapper">
    //   <div>
    //     <p className="text-5xl font-bold">Modern Oak Villa</p>
    //     <p className="text-primary font-medium text-xl">
    //       123 Greenway Drive, Austin, TX 78701
    //     </p>
    //     <div className="space-y-4">
    //       <h3 className="text-xl font-bold">About this property</h3>
    //       <p className="text-base font-normal text-primary w-150">
    //         Experience luxury living in the heart of Austin at the Modern Oak
    //         Villa. This architectural masterpiece seamlessly blends contemporary
    //         design with natural elements, featuring floor-to-ceiling windows
    //         that flood the home with Texas sunlight.
    //       </p>
    //       <p className="text-base font-normal text-primary w-150">
    //         The open-concept floor plan is perfect for entertaining, with a
    //         chef-grade kitchen that features custom oak cabinetry, quartz
    //         countertops, and professional-grade appliances. The primary suite
    //         offers a private sanctuary with a spa-like bathroom and views of the
    //         surrounding green belt.
    //       </p>
    //       <span className="text-xl font-bold text-primary">Show more</span>
    //     </div>
    //     <div>
    //       <p className="text-xl font-bold">Location</p>
    //       <img src="" alt="" />
    //     </div>
    //   </div>
    // </div>
  );
}

export default ModernOakVilla
