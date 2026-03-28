const Header = () => {
  return (
    <header>
      <nav className="text-xs font-bold text-slate-400 mb-5 flex items-center gap-2">
        <span>Dashboard</span> <span>/</span>
        <span>Settings</span> <span>/</span>
        <span className="text-slate-900">Personal Information</span>
      </nav>

      <div className="flex flex-col md:flex-row md:items-center justify-between my-8 gap-4">
        <div>
          <h1 className="text-[32px] font-extrabold leading-10 text-[#0D1B0D]">
            Personal Information
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Update your contact details and residency information.
          </p>
        </div>
        <button className="button">Save Changes</button>
      </div>
    </header>
  );
};

export default Header;
