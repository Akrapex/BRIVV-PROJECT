const amenities = [
  "Fiber Internet",
  "Private Pool",
  "3-Car Garage",
  "Smart Fireplace",
  "EV Charging",
  "Solar Panels",
];

const Amenities = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Amenities</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-[600px]">
        {amenities.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 bg-gray-100 p-3 rounded-lg w-[184px]"
          >
            <span className="text-green-600">✔</span>
            {item}
          </div>
        ))}
      </div>

      <button className="mt-4 border border-green-600 text-green-600 px-4 py-2 rounded-lg">
        Show all 24 amenities
      </button>
    </div>
  );
};

export default Amenities;
