import { Link } from "react-router";


const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-600">PropMarket</h1>

        <nav className="hidden md:flex gap-8 text-gray-600 font-medium">
          <Link to="/buy">Buy</Link>
          <Link to="/rent">Rent</Link>
          <Link to="/lease">Lease</Link>
          <Link to="/education">Education</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-gray-600">♡</button>
          <img
            src="https://i.pravatar.cc/40"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </header>
  );
}

export default Header
