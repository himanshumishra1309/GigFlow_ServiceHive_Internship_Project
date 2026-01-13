import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import BidCard from '../components/BidCard';

const GigBids = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-royal-blue to-royal-blue/90 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <a href="/my-gigs" className="inline-flex items-center text-bone hover:text-powder-blue mb-6 font-semibold">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to My Gigs
          </a>
          <h1 className="text-4xl md:text-5xl font-bold text-bone mb-4">
            Bids for: Full Stack Web Application Development
          </h1>
          <div className="flex items-center space-x-6 text-powder-blue">
            <span className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>5 Bids Received</span>
            </span>
            <span className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Budget: $5,000</span>
            </span>
            <span className="bg-powder-blue text-royal-blue px-3 py-1 rounded-full text-sm font-semibold">
              Open
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 bg-bone py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Gig Info Summary */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border-2 border-powder-blue">
            <h2 className="text-xl font-bold text-royal-blue mb-3">Project Overview</h2>
            <p className="text-royal-blue line-clamp-3">
              Looking for an experienced full stack developer to build a modern e-commerce platform. 
              Must have expertise in React, Node.js, and MongoDB. Project duration is 2-3 months.
            </p>
            <a href="/gigs/123" className="text-royal-blue font-semibold hover:underline mt-2 inline-block">
              View Full Details →
            </a>
          </div>

          {/* Filter and Sort */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-royal-blue text-bone rounded-lg font-semibold">
                All Bids (5)
              </button>
              <button className="px-4 py-2 text-royal-blue hover:bg-powder-blue rounded-lg transition-colors">
                Pending (3)
              </button>
              <button className="px-4 py-2 text-royal-blue hover:bg-powder-blue rounded-lg transition-colors">
                Hired (1)
              </button>
              <button className="px-4 py-2 text-royal-blue hover:bg-powder-blue rounded-lg transition-colors">
                Rejected (1)
              </button>
            </div>
            <select className="px-4 py-2 border-2 border-powder-blue rounded-lg focus:border-royal-blue focus:outline-none text-royal-blue bg-white">
              <option>Sort by Date</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          {/* Bid Cards */}
          <div className="space-y-6">
            <BidCard />
            <BidCard />
            <BidCard />
            <BidCard />
            <BidCard />
          </div>

          {/* Hire Confirmation Modal (Hidden by default) */}
          {/* <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 border-2 border-powder-blue">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-powder-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-royal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-royal-blue mb-2">Confirm Hiring</h3>
                <p className="text-royal-blue">
                  Are you sure you want to hire <strong>Jane Smith</strong> for this project?
                </p>
              </div>
              
              <div className="bg-powder-blue rounded-lg p-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-royal-blue">Freelancer:</span>
                  <span className="text-royal-blue font-bold">Jane Smith</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-royal-blue">Bid Amount:</span>
                  <span className="text-royal-blue font-bold">$4,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-royal-blue">Status:</span>
                  <span className="text-royal-blue font-bold">Will be marked as Hired</span>
                </div>
              </div>

              <div className="bg-bone rounded-lg p-4 mb-6">
                <p className="text-royal-blue text-sm">
                  <strong>Note:</strong> Once you hire this freelancer, all other bids will be 
                  automatically rejected and this gig will be marked as assigned.
                </p>
              </div>

              <div className="flex space-x-3">
                <button className="flex-1 bg-royal-blue text-bone py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all duration-200">
                  Confirm Hire
                </button>
                <button className="flex-1 border-2 border-royal-blue text-royal-blue py-3 rounded-lg font-bold hover:bg-powder-blue transition-all duration-200">
                  Cancel
                </button>
              </div>
            </div>
          </div> */}

          {/* Empty State (Show when no bids) */}
          {/* <div className="text-center py-20">
            <div className="w-24 h-24 bg-powder-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-royal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-royal-blue mb-3">No bids received yet</h3>
            <p className="text-royal-blue opacity-70">
              Freelancers haven't submitted any bids for this gig yet. Check back later!
            </p>
          </div> */}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GigBids;
