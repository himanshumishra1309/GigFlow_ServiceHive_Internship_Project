const MyBids = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-royal-blue to-royal-blue/90 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-bone mb-4">My Bids</h1>
          <p className="text-xl text-powder-blue">
            Track all your submitted bids and their status
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 bg-bone py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="flex space-x-4 mb-8 border-b-2 border-powder-blue">
            <button className="px-6 py-3 text-royal-blue font-bold border-b-4 border-royal-blue -mb-0.5">
              All Bids (12)
            </button>
            <button className="px-6 py-3 text-royal-blue opacity-70 hover:opacity-100 transition-opacity">
              Pending (8)
            </button>
            <button className="px-6 py-3 text-royal-blue opacity-70 hover:opacity-100 transition-opacity">
              Hired (3)
            </button>
            <button className="px-6 py-3 text-royal-blue opacity-70 hover:opacity-100 transition-opacity">
              Rejected (1)
            </button>
          </div>

          {/* Bid Items */}
          <div className="space-y-6">
            {/* Bid Item 1 - Hired */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-green-200 hover:border-green-400 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold">
                      ✓ Hired
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-royal-blue mb-2">
                    Full Stack Web Application Development
                  </h3>
                  <p className="text-royal-blue opacity-70 mb-3">
                    Client: John Smith • Bid submitted 3 days ago
                  </p>
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 mb-3">
                    <p className="text-green-700 font-bold mb-2">🎉 Congratulations! You've been hired!</p>
                    <p className="text-green-600 text-sm">
                      The client has selected you for this project. Get started and deliver amazing work!
                    </p>
                  </div>
                </div>
                <div className="text-right ml-6">
                  <p className="text-3xl font-bold text-royal-blue mb-1">$4,500</p>
                  <p className="text-sm text-royal-blue opacity-70">Your Bid</p>
                  <p className="text-xs text-green-600 mt-2">vs $5,000 budget</p>
                </div>
              </div>
              <div className="pt-4 border-t-2 border-powder-blue">
                <p className="text-royal-blue text-sm mb-3">
                  <strong>Your Proposal:</strong> I have over 5 years of experience in full stack development...
                </p>
                <div className="flex items-center space-x-3">
                  <a href="/gigs/123" className="flex-1">
                    <button className="w-full bg-royal-blue text-bone py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200">
                      View Project Details
                    </button>
                  </a>
                  <button className="flex-1 border-2 border-royal-blue text-royal-blue py-3 rounded-lg font-semibold hover:bg-powder-blue transition-all duration-200">
                    Message Client
                  </button>
                </div>
              </div>
            </div>

            {/* Bid Item 2 - Pending */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-powder-blue hover:border-royal-blue transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="bg-bone text-royal-blue px-4 py-2 rounded-full text-sm font-bold">
                      Pending
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-royal-blue mb-2">
                    Mobile App UI/UX Design
                  </h3>
                  <p className="text-royal-blue opacity-70 mb-3">
                    Client: Sarah Johnson • Bid submitted 1 day ago
                  </p>
                </div>
                <div className="text-right ml-6">
                  <p className="text-3xl font-bold text-royal-blue mb-1">$2,800</p>
                  <p className="text-sm text-royal-blue opacity-70">Your Bid</p>
                  <p className="text-xs text-royal-blue opacity-60 mt-2">vs $3,000 budget</p>
                </div>
              </div>
              <div className="pt-4 border-t-2 border-powder-blue">
                <p className="text-royal-blue text-sm mb-3">
                  <strong>Your Proposal:</strong> As a UI/UX designer with 7+ years of experience, I specialize in creating intuitive...
                </p>
                <div className="flex items-center space-x-3">
                  <a href="/gigs/124" className="flex-1">
                    <button className="w-full bg-royal-blue text-bone py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200">
                      View Project Details
                    </button>
                  </a>
                  <button className="flex-1 border-2 border-royal-blue text-royal-blue py-3 rounded-lg font-semibold hover:bg-powder-blue transition-all duration-200">
                    Edit Bid
                  </button>
                </div>
              </div>
            </div>

            {/* Bid Item 3 - Rejected */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-red-200 hover:border-red-300 transition-all duration-300 opacity-75">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold">
                      Rejected
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-royal-blue mb-2">
                    SEO Optimization for E-commerce
                  </h3>
                  <p className="text-royal-blue opacity-70 mb-3">
                    Client: Mike Davis • Bid submitted 1 week ago
                  </p>
                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-3 mb-3">
                    <p className="text-red-600 text-sm">
                      The client has selected another freelancer for this project.
                    </p>
                  </div>
                </div>
                <div className="text-right ml-6">
                  <p className="text-3xl font-bold text-royal-blue mb-1">$1,200</p>
                  <p className="text-sm text-royal-blue opacity-70">Your Bid</p>
                  <p className="text-xs text-royal-blue opacity-60 mt-2">vs $1,500 budget</p>
                </div>
              </div>
              <div className="pt-4 border-t-2 border-powder-blue">
                <p className="text-royal-blue text-sm mb-3">
                  <strong>Your Proposal:</strong> With expertise in technical and on-page SEO, I can help improve...
                </p>
                <a href="/gigs/125">
                  <button className="w-full border-2 border-royal-blue text-royal-blue py-3 rounded-lg font-semibold hover:bg-powder-blue transition-all duration-200">
                    View Project Details
                  </button>
                </a>
              </div>
            </div>

            {/* Bid Item 4 - Pending */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-powder-blue hover:border-royal-blue transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="bg-bone text-royal-blue px-4 py-2 rounded-full text-sm font-bold">
                      Pending
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-royal-blue mb-2">
                    WordPress Plugin Development
                  </h3>
                  <p className="text-royal-blue opacity-70 mb-3">
                    Client: Emily Chen • Bid submitted 4 hours ago
                  </p>
                </div>
                <div className="text-right ml-6">
                  <p className="text-3xl font-bold text-royal-blue mb-1">$800</p>
                  <p className="text-sm text-royal-blue opacity-70">Your Bid</p>
                  <p className="text-xs text-royal-blue opacity-60 mt-2">vs $1,000 budget</p>
                </div>
              </div>
              <div className="pt-4 border-t-2 border-powder-blue">
                <p className="text-royal-blue text-sm mb-3">
                  <strong>Your Proposal:</strong> I'm a WordPress expert with 4+ years developing custom plugins...
                </p>
                <div className="flex items-center space-x-3">
                  <a href="/gigs/126" className="flex-1">
                    <button className="w-full bg-royal-blue text-bone py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200">
                      View Project Details
                    </button>
                  </a>
                  <button className="flex-1 border-2 border-royal-blue text-royal-blue py-3 rounded-lg font-semibold hover:bg-powder-blue transition-all duration-200">
                    Edit Bid
                  </button>
                </div>
              </div>
            </div>

            {/* Bid Item 5 - Hired */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-green-200 hover:border-green-400 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold">
                      ✓ Hired
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-royal-blue mb-2">
                    React Native Mobile App
                  </h3>
                  <p className="text-royal-blue opacity-70 mb-3">
                    Client: Tom Wilson • Bid submitted 2 weeks ago
                  </p>
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 mb-3">
                    <p className="text-green-700 font-bold mb-2">🎉 Congratulations! You've been hired!</p>
                    <p className="text-green-600 text-sm">
                      Project is in progress. Keep up the great work!
                    </p>
                  </div>
                </div>
                <div className="text-right ml-6">
                  <p className="text-3xl font-bold text-royal-blue mb-1">$6,500</p>
                  <p className="text-sm text-royal-blue opacity-70">Your Bid</p>
                  <p className="text-xs text-green-600 mt-2">vs $7,000 budget</p>
                </div>
              </div>
              <div className="pt-4 border-t-2 border-powder-blue">
                <p className="text-royal-blue text-sm mb-3">
                  <strong>Your Proposal:</strong> Mobile app development is my specialty. With React Native expertise...
                </p>
                <div className="flex items-center space-x-3">
                  <a href="/gigs/127" className="flex-1">
                    <button className="w-full bg-royal-blue text-bone py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200">
                      View Project Details
                    </button>
                  </a>
                  <button className="flex-1 border-2 border-royal-blue text-royal-blue py-3 rounded-lg font-semibold hover:bg-powder-blue transition-all duration-200">
                    Message Client
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Empty State (Show when no bids) */}
          {/* <div className="text-center py-20">
            <div className="w-24 h-24 bg-powder-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-royal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-royal-blue mb-3">No bids submitted yet</h3>
            <p className="text-royal-blue opacity-70 mb-6">
              Start bidding on projects that match your skills and expertise
            </p>
            <a href="/gigs">
              <button className="bg-royal-blue text-bone px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all duration-200">
                Browse Available Gigs
              </button>
            </a>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default MyBids;
