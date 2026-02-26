const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-16 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm text-gray-600">
        <div>
          <h4 className="font-bold mb-2">PropMarket</h4>
          <p>Making home finding a joyful experience.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Discover</h4>
          <ul className="space-y-1">
            <li>Miami Real Estate</li>
            <li>New York Apartments</li>
            <li>Austin Condos</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <ul className="space-y-1">
            <li>Buyer's Guide</li>
            <li>Mortgage Calculator</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Subscribe</h4>
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-2 border rounded mb-2"
          />
          <button className="bg-green-600 text-white w-full py-2 rounded">
            Sign Up
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
