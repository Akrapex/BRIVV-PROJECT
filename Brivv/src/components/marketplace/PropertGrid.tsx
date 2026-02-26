
import { properties } from "../constant/properties";
import PropertyCard from "./PropertyCard";

const PropertyGrid = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyGrid;
