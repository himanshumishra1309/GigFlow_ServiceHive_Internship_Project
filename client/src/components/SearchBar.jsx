const SearchBar = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-powder-blue">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Input */}
        <div className="flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for gigs by title..."
              className="w-full px-5 py-3 pl-12 border-2 border-powder-blue rounded-lg focus:border-royal-blue focus:outline-none transition-colors duration-200 text-royal-blue"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-royal-blue opacity-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Filter Button */}
        <button className="bg-royal-blue text-bone px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 flex items-center justify-center space-x-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          <span>Filters</span>
        </button>

        {/* Search Button */}
        <button className="bg-powder-blue text-royal-blue px-8 py-3 rounded-lg font-semibold hover:bg-bone transition-all duration-200">
          Search
        </button>
      </div>

      {/* Advanced Filters (Hidden by default) */}
      {/* <div className="mt-6 pt-6 border-t-2 border-powder-blue grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-royal-blue font-semibold mb-2 text-sm">
            Min Budget
          </label>
          <input
            type="number"
            placeholder="$0"
            className="w-full px-4 py-2 border-2 border-powder-blue rounded-lg focus:border-royal-blue focus:outline-none transition-colors duration-200 text-royal-blue"
          />
        </div>
        
        <div>
          <label className="block text-royal-blue font-semibold mb-2 text-sm">
            Max Budget
          </label>
          <input
            type="number"
            placeholder="$10,000"
            className="w-full px-4 py-2 border-2 border-powder-blue rounded-lg focus:border-royal-blue focus:outline-none transition-colors duration-200 text-royal-blue"
          />
        </div>

        <div>
          <label className="block text-royal-blue font-semibold mb-2 text-sm">
            Status
          </label>
          <select className="w-full px-4 py-2 border-2 border-powder-blue rounded-lg focus:border-royal-blue focus:outline-none transition-colors duration-200 text-royal-blue">
            <option>All</option>
            <option>Open</option>
            <option>Assigned</option>
          </select>
        </div>
      </div> */}
    </div>
  );
};

export default SearchBar;
