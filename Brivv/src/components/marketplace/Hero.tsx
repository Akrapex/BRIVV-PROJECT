

const Hero = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-2">Find your dream home</h2>
        <p className="text-gray-500 mb-6">
          Explore 24,000+ properties for sale and rent
        </p>

        <div className="flex bg-white rounded-lg shadow-sm overflow-hidden">
          <input
            type="text"
            placeholder="Search by city, neighborhood, or ZIP"
            className="flex-1 px-4 py-3 outline-none"
          />
          <button className="bg-green-600 text-white px-6">Search</button>
        </div>
      </div>
    </section>
  );
}

export default Hero
