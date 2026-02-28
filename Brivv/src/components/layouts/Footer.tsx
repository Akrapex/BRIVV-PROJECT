const Footer = () => {
  return (
    <footer className="bg-white  py-10">
      <div className="wrapper mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm text-gray-600">
        <div>
          <img src="/images/Logo-.png" alt="" className="w-[216px]" />
          <p className="leading-[23px] w-[216px] text-sm text-[#64748B] pt-4">
            Making home finding a joyful experience for everyone, everywhere.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-base mb-2">Discover</h4>
          <ul className="space-y-1 pt-4">
            <li>Miami Real Estate</li>
            <li>New York Apartments</li>
            <li>Austin Condos</li>
            <li>Los Angeles Houses</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-base mb-2">Resources</h4>
          <ul className="space-y-1 pt-4">
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
            className="w-full py-3 px-4 bg-[#F1F5F9] rounded-xl mb-2 mt-4 text-sm font-medium" 
          />
          <button className="bg-primary text-white w-full py-3 rounded-xl text-sm font-base">
            Sign Up
          </button>
        </div>
      </div>
      <div className="wrapper  flex justify-between py-20 text-[#94A3B8] text-sm">
        <p>© 2024 PropMarket Inc. All rights reserved.</p>
        <div className="flex items-center gap-4 ">
          <p>Privacy</p>
          <p>Terms of Service</p>
          <p>Cooky Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
