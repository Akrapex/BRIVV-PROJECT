

const Herosection = () => {
  return (
    <section className="wrapper">
      <div className=" flex items-center gap-6 text-lg font-medium py-10">
        <p className="text-primary">Real Estate /</p>
        <p className="text-primary">Vilias</p>
        <p>Modern Oak Vlla</p>
      </div>
      <div className="flex items-start gap-16">
        <img
          src="/images/property-details-background.svg"
          alt="herobachround"
          className="w-162.5"
        />

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          <img
            src="/images/propert-1.svg"
            alt="property"
            className="w-77.5"
          />
          <img
            src="/images/property-2.svg"
            alt="property"
            className="w-77.5"
          />
          <img
            src="/images/proper-3.svg"
            alt="property"
            className="w-77.5"
          />
          <img
            src="/images/property-4.svg"
            alt="property"
            className="w-77.5"
          />
        </div>
      </div>
    </section>
  );
}

export default Herosection
