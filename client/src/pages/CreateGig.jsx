const CreateGig = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-royal-blue to-royal-blue/90 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-bone mb-4">Post a New Job</h1>
          <p className="text-xl text-powder-blue">
            Find the perfect freelancer for your project
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 bg-bone py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-powder-blue">
            <form className="space-y-8">
              {/* Job Title */}
              <div>
                <label htmlFor="title" className="block text-royal-blue font-bold text-lg mb-3">
                  Job Title <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="e.g. Full Stack Web Application Development"
                  className="w-full px-4 py-3 border-2 border-powder-blue rounded-lg focus:border-royal-blue focus:outline-none transition-colors duration-200 text-royal-blue"
                />
                <p className="text-sm text-royal-blue opacity-70 mt-2">
                  Write a clear, descriptive title for your project
                </p>
              </div>

              {/* Job Description */}
              <div>
                <label htmlFor="description" className="block text-royal-blue font-bold text-lg mb-3">
                  Project Description <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="description"
                  rows="10"
                  placeholder="Describe your project in detail. Include requirements, skills needed, deliverables, timeline, and any other relevant information..."
                  className="w-full px-4 py-3 border-2 border-powder-blue rounded-lg focus:border-royal-blue focus:outline-none transition-colors duration-200 text-royal-blue resize-none"
                ></textarea>
                <p className="text-sm text-royal-blue opacity-70 mt-2">
                  Minimum 200 characters. Be as detailed as possible to attract the right talent.
                </p>
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="budget" className="block text-royal-blue font-bold text-lg mb-3">
                  Budget (USD) <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-royal-blue font-bold text-xl">
                    $
                  </span>
                  <input
                    type="number"
                    id="budget"
                    placeholder="5000"
                    className="w-full pl-10 pr-4 py-3 border-2 border-powder-blue rounded-lg focus:border-royal-blue focus:outline-none transition-colors duration-200 text-royal-blue text-xl"
                  />
                </div>
                <p className="text-sm text-royal-blue opacity-70 mt-2">
                  Set a realistic budget for your project
                </p>
              </div>

              {/* Additional Info Box */}
              <div className="bg-powder-blue rounded-lg p-6">
                <h3 className="text-royal-blue font-bold text-lg mb-3">Tips for posting a great job:</h3>
                <ul className="space-y-2 text-royal-blue">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Be clear about what you need and what you expect</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>List all required skills and technologies</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Include your timeline and project milestones</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Set a fair and competitive budget</span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  type="submit"
                  className="bg-royal-blue text-bone px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all duration-200 shadow-lg cursor-pointer"
                >
                  Post Job
                </button>
                <a href="/gigs" className="flex-1">
                  <button
                    type="button"
                    className="border-2 border-powder-blue text-royal-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-powder-blue transition-all duration-200 cursor-pointer"
                  >
                    Cancel
                  </button>
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateGig;
