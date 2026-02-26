const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-16 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm text-gray-600">
        <div>
          <img src="/images/Logo-.png" alt="" className="w-[216px]" />
          <p className="leading-[23px] w-[216px] text-sm text-[#64748B] pt-4">
            Making home finding a joyful experience for everyone, everywhere.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-base mb-2">Discover</h4>
          <ul className="space-y-1 text-sm text-[#64748B] pt-4">
            <li>Miami Real Estate</li>
            <li>New York Apartments</li>
            <li>Austin Condos</li>
            <li>Los Angeles Houses</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-base mb-2">Resources</h4>
          <ul className="space-y-1  text-sm text-[#64748B] pt-4">
            <li>Buyer's Guide</li>
            <li>Renter's Handbook</li>
            <li>Market Reports</li>
            <li>Mortgage Calculator</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-base mb-2">Subscribe</h4>
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-2 border rounded mb-2 text-sm text-[#64748B] mt-4"
          />
          <button className="bg-[#6B8E23] text-white w-full py-2 rounded">
            Sign Up
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
