const Pagination = () => {
  return (
    <div className="flex justify-center mt-10 gap-2">
      <button className="px-3 py-1 border border-[#E2E8F0] rounded">
        <img src="/images/lesserThan.svg" alt="lessthan-icon" />
      </button>
      <button className="px-3 py-1 border border-[#E2E8F0] rounded">1</button>
      <button className="px-3 py-1 border border-[#E2E8F0] rounded">2</button>
      <button className="px-3 py-1 border border-[#E2E8F0] rounded">3</button>
      <p>...</p>
      <button className="px-3 py-1 border  border-[#E2E8F0] rounded">24</button>
      <button className="px-3 py-1 border border-[#E2E8F0] rounded">
        <img src="/images/greaterthan-icon.svg" alt="greaterthan-icon" />
      </button>
    </div>
  );
};

export default Pagination;
