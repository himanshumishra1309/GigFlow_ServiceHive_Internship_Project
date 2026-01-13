const GigDetails = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <section className="flex-1 bg-bone py-12 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <a href="/gigs" className="inline-flex items-center text-royal-blue hover:text-powder-blue mb-6 font-semibold">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Browse
          </a>

          {/* Gig Header */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-powder-blue">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <span className="bg-powder-blue text-royal-blue px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                  Open
                </span>
                <h1 className="text-4xl font-bold text-royal-blue mb-4">
                  Full Stack Web Application Development
                </h1>
                <div className="flex items-center space-x-4 text-royal-blue opacity-80">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Posted by <strong>John Smith</strong></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Posted 2 days ago</span>
                  </div>
                </div>
              </div>
              <div className="bg-powder-blue rounded-xl p-6 text-center">
                <p className="text-sm text-royal-blue opacity-80 mb-2">Budget</p>
                <p className="text-4xl font-bold text-royal-blue">$5,000</p>
              </div>
            </div>

            {/* Description */}
            <div className="border-t-2 border-powder-blue pt-6">
              <h2 className="text-2xl font-bold text-royal-blue mb-4">Project Description</h2>
              <div className="text-royal-blue leading-relaxed space-y-4">
                <p>
                  We are looking for an experienced full stack developer to build a modern e-commerce 
                  platform from scratch. The project will include user authentication, product catalog, 
                  shopping cart, payment integration, and admin dashboard.
                </p>
                <p>
                  <strong>Required Skills:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>React.js and modern JavaScript (ES6+)</li>
                  <li>Node.js and Express.js</li>
                  <li>MongoDB and Mongoose</li>
                  <li>RESTful API development</li>
                  <li>Payment gateway integration (Stripe/PayPal)</li>
                  <li>Responsive design with CSS/Tailwind</li>
                </ul>
                <p>
                  <strong>Project Timeline:</strong> 2-3 months
                </p>
                <p>
                  <strong>Deliverables:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fully functional web application</li>
                  <li>Clean, documented code</li>
                  <li>Deployment to production server</li>
                  <li>2 weeks of post-launch support</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Submit Bid Form (Only shown if user is NOT the owner) */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-powder-blue">
            <h2 className="text-2xl font-bold text-royal-blue mb-6">Submit Your Bid</h2>
            <form className="space-y-6">
              {/* Proposed Price */}
              <div>
                <label htmlFor="bidAmount" className="block text-royal-blue font-semibold mb-2">
                  Your Proposed Price
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-royal-blue font-bold text-xl">
                    $
                  </span>
                  <input
                    type="number"
                    id="bidAmount"
                    placeholder="4500"
                    className="w-full pl-10 pr-4 py-3 border-2 border-powder-blue rounded-lg focus:border-royal-blue focus:outline-none transition-colors duration-200 text-royal-blue text-xl"
                  />
                </div>
              </div>

              {/* Cover Letter */}
              <div>
                <label htmlFor="coverLetter" className="block text-royal-blue font-semibold mb-2">
                  Cover Letter
                </label>
                <textarea
                  id="coverLetter"
                  rows="8"
                  placeholder="Tell the client why you're the best fit for this project. Include your relevant experience, skills, and approach..."
                  className="w-full px-4 py-3 border-2 border-powder-blue rounded-lg focus:border-royal-blue focus:outline-none transition-colors duration-200 text-royal-blue resize-none"
                ></textarea>
                <p className="text-sm text-royal-blue opacity-70 mt-2">
                  Minimum 100 characters
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-royal-blue text-bone py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
              >
                Submit Bid
              </button>
            </form>
          </div>

          {/* View Bids Button (Only shown if user IS the owner) */}
          {/* <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-powder-blue text-center">
            <h2 className="text-2xl font-bold text-royal-blue mb-4">
              This is your gig
            </h2>
            <p className="text-royal-blue mb-6">
              Review and manage all bids submitted for this project
            </p>
            <a href="/gigs/123/bids">
              <button className="bg-royal-blue text-bone px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all duration-200 shadow-lg">
                View All Bids (5)
              </button>
            </a>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default GigDetails;
