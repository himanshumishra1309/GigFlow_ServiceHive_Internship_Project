import GigCard from '../components/GigCard';

const MyGigs = () => {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Page Header */}
      <section className="bg-gradient-to-r from-royal-blue to-royal-blue/90 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-bone mb-4">My Gigs</h1>
              <p className="text-xl text-powder-blue">
                Manage all jobs you've posted
              </p>
            </div>
            <a href="/create-gig">
              <button className="bg-bone text-royal-blue px-6 py-3 rounded-lg font-bold hover:bg-powder-blue transition-all duration-200 shadow-lg cursor-pointer">
                + Post New Job
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 bg-bone py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="flex space-x-4 mb-8 border-b-2 border-powder-blue">
            <button className="px-6 py-3 text-royal-blue font-bold border-b-4 border-royal-blue -mb-0.5 cursor-pointer">
              All Gigs (8)
            </button>
            <button className="px-6 py-3 text-royal-blue opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
              Open (5)
            </button>
            <button className="px-6 py-3 text-royal-blue opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
              Assigned (3)
            </button>
          </div>

          {/* Gig Cards */}
          <div className="space-y-6">
            {/* Gig Item 1 - Open */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-powder-blue hover:border-royal-blue transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="bg-powder-blue text-royal-blue px-3 py-1 rounded-full text-xs font-semibold">
                      Open
                    </span>
                    <span className="bg-bone text-royal-blue px-3 py-1 rounded-full text-xs font-semibold">
                      5 Bids
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-royal-blue mb-2">
                    Full Stack Web Application Development
                  </h3>
                  <p className="text-royal-blue opacity-70 mb-3">Posted 2 days ago</p>
                  <p className="text-royal-blue line-clamp-2">
                    Looking for an experienced full stack developer to build a modern e-commerce platform...
                  </p>
                </div>
                <div className="text-right ml-6">
                  <p className="text-3xl font-bold text-royal-blue">$5,000</p>
                  <p className="text-sm text-royal-blue opacity-70">Budget</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 pt-4 border-t-2 border-powder-blue">
                <a href="/gigs/123/bids" className="flex-1">
                  <button className="w-full bg-royal-blue text-bone py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200">
                    View Bids (5)
                  </button>
                </a>
                <button className="flex-1 border-2 border-royal-blue text-royal-blue py-3 rounded-lg font-semibold hover:bg-powder-blue transition-all duration-200">
                  Edit Gig
                </button>
                <button className="px-6 py-3 border-2 border-red-500 text-red-500 rounded-lg font-semibold hover:bg-red-50 transition-all duration-200">
                  Delete
                </button>
              </div>
            </div>

            {/* Gig Item 2 - Assigned */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-powder-blue hover:border-royal-blue transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                      Assigned
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-royal-blue mb-2">
                    Mobile App UI/UX Design
                  </h3>
                  <p className="text-royal-blue opacity-70 mb-3">Posted 1 week ago</p>
                  <p className="text-royal-blue line-clamp-2">
                    Need a talented designer to create modern UI/UX for our mobile application...
                  </p>
                  <div className="mt-4 bg-green-50 border-2 border-green-200 rounded-lg p-3 flex items-center">
                    <div className="w-10 h-10 bg-powder-blue rounded-full flex items-center justify-center mr-3">
                      <span className="text-royal-blue font-bold">JS</span>
                    </div>
                    <div>
                      <p className="text-sm text-green-700 font-semibold">Hired: Jane Smith</p>
                      <p className="text-xs text-green-600">Working on project</p>
                    </div>
                  </div>
                </div>
                <div className="text-right ml-6">
                  <p className="text-3xl font-bold text-royal-blue">$3,000</p>
                  <p className="text-sm text-royal-blue opacity-70">Budget</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 pt-4 border-t-2 border-powder-blue">
                <a href="/gigs/124" className="flex-1">
                  <button className="w-full bg-royal-blue text-bone py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200">
                    View Details
                  </button>
                </a>
                <button className="flex-1 border-2 border-royal-blue text-royal-blue py-3 rounded-lg font-semibold hover:bg-powder-blue transition-all duration-200">
                  Message Freelancer
                </button>
              </div>
            </div>

            {/* Gig Item 3 - Open */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-powder-blue hover:border-royal-blue transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="bg-powder-blue text-royal-blue px-3 py-1 rounded-full text-xs font-semibold">
                      Open
                    </span>
                    <span className="bg-bone text-royal-blue px-3 py-1 rounded-full text-xs font-semibold">
                      2 Bids
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-royal-blue mb-2">
                    SEO Optimization for E-commerce Site
                  </h3>
                  <p className="text-royal-blue opacity-70 mb-3">Posted 3 days ago</p>
                  <p className="text-royal-blue line-clamp-2">
                    Looking for an SEO expert to improve our e-commerce site's search rankings...
                  </p>
                </div>
                <div className="text-right ml-6">
                  <p className="text-3xl font-bold text-royal-blue">$1,500</p>
                  <p className="text-sm text-royal-blue opacity-70">Budget</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 pt-4 border-t-2 border-powder-blue">
                <a href="/gigs/125/bids" className="flex-1">
                  <button className="w-full bg-royal-blue text-bone py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200">
                    View Bids (2)
                  </button>
                </a>
                <button className="flex-1 border-2 border-royal-blue text-royal-blue py-3 rounded-lg font-semibold hover:bg-powder-blue transition-all duration-200">
                  Edit Gig
                </button>
                <button className="px-6 py-3 border-2 border-red-500 text-red-500 rounded-lg font-semibold hover:bg-red-50 transition-all duration-200">
                  Delete
                </button>
              </div>
            </div>
          </div>

          {/* Empty State (Show when no gigs) */}
          {/* <div className="text-center py-20">
            <div className="w-24 h-24 bg-powder-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-royal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-royal-blue mb-3">No gigs posted yet</h3>
            <p className="text-royal-blue opacity-70 mb-6">
              Start by posting your first job and connect with talented freelancers
            </p>
            <a href="/create-gig">
              <button className="bg-royal-blue text-bone px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all duration-200 cursor-pointer">
                Post Your First Job
              </button>
            </a>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default MyGigs;
