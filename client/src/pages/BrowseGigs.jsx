import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SearchBar from '../components/SearchBar';
import GigCard from '../components/GigCard';

const BrowseGigs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-royal-blue to-royal-blue/90 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-bone mb-4">Browse Gigs</h1>
          <p className="text-xl text-powder-blue">
            Find your next opportunity from hundreds of available projects
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 bg-bone py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="mb-12">
            <SearchBar />
          </div>

          {/* Results Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-royal-blue">Available Gigs</h2>
              <p className="text-royal-blue opacity-70">Showing 24 results</p>
            </div>
            <select className="px-4 py-2 border-2 border-powder-blue rounded-lg focus:border-royal-blue focus:outline-none text-royal-blue bg-white">
              <option>Most Recent</option>
              <option>Budget: High to Low</option>
              <option>Budget: Low to High</option>
            </select>
          </div>

          {/* Gig Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2">
            <button className="px-4 py-2 border-2 border-powder-blue rounded-lg text-royal-blue hover:bg-powder-blue transition-all duration-200">
              Previous
            </button>
            <button className="px-4 py-2 bg-royal-blue text-bone rounded-lg font-semibold">
              1
            </button>
            <button className="px-4 py-2 border-2 border-powder-blue rounded-lg text-royal-blue hover:bg-powder-blue transition-all duration-200">
              2
            </button>
            <button className="px-4 py-2 border-2 border-powder-blue rounded-lg text-royal-blue hover:bg-powder-blue transition-all duration-200">
              3
            </button>
            <button className="px-4 py-2 border-2 border-powder-blue rounded-lg text-royal-blue hover:bg-powder-blue transition-all duration-200">
              Next
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrowseGigs;
