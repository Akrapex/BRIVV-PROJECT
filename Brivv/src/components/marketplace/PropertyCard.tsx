import type { Property } from "../constant/properties";

interface Props {
  property: Property;
}

const PropertyCard = ({ property }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="h-[324px] w-full object-cover"
        />

        {property.tag && (
          <span className="absolute top-3 left-3 bg-[#6B8E23] text-white text-xs px-3 py-1 rounded-full">
            {property.tag}
          </span>
        )}

        <button className="absolute top-3 right-3 w-7 h-7 rounded-full border  shadow flex items-center justify-center text-white bg-white/20">
          ♡
        </button>
      </div>

      <div className="p-4 w-[197px] h-[205px] space-y-4">
        <h4 className="text-2xl font-bold text-[#6B8E23]">{property.price}</h4>
        <p className="text-lg font-bold">{property.title}</p>
        <p className="text-sm text-[#64748B] mb-3 ">{property.location}</p>

        <div className="text-sm text-gray-500 flex gap-4">
          <span>🛏 {property.beds}</span>
          <span>🛁 {property.baths}</span>
          <span>{property.size}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
