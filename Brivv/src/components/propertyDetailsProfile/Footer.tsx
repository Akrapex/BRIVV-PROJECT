const Footer = () => {
  return (
    <footer className="bg-white  py-10">
      <div className="wrapper mx-auto px-6 flex justify-between items-center gap-8 text-sm text-gray-600">
        <div>
          <img src="/images/property-logo.svg" alt="" className="w-[312px]" />
          <p className="leading-[23px] w-[316px] text-base text-[#64748B] pt-4 text-primary">
            Empowering property owners and seekers with flow-based management
            tools.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <h4 className="font-bold text-base mb-2 text-[#9CA3AF]">Company</h4>
            <ul className="space-y-1 pt-4">
              <li>About</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base mb-2 text-[#9CA3AF]">EXPLORE</h4>
            <ul className="space-y-1 pt-4 text-base font-medium">
              <li>Properties</li>
              <li>Articles</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-base mb-2 text-[#9CA3AF]">LEGAL</h4>
            <ul className="space-y-1 pt-4">
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
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
