function PropertiesHeader() {
  return (
    <header className="px-30 py-2 flex items-center gap-6 bg-white border-b border-tertiary">
      <img src="/images/logo.png" alt="" className="w-18    " />

      <nav className="ml-auto flex gap-4">
        <a className="text-[14px] font-semibold cursor-pointer">Dashboard</a>
        <a className="text-[14px] font-semibold cursor-pointer text-[#6B8E23]">
          Listing
        </a>
        <a className="text-[14px] font-semibold cursor-pointer">Education</a>
        <a className="text-[14px] font-semibold cursor-pointer">Account</a>
      </nav>

      <button className="py-3 px-4 border border-[#6B8E23] text[14px] font-bold text-[#6B8E23] rounded-lg cursor-pointer">
        Save as Draft
      </button>
    </header>
  );
}

export default PropertiesHeader;
