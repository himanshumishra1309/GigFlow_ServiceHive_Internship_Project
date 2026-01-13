const Navbar = () => {
  return (
    <nav className="bg-royal-blue shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-powder-blue rounded-lg px-4 py-2">
              <span className="text-2xl font-bold text-royal-blue">GigFlow</span>
            </div>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-bone hover:text-powder-blue transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="/gigs" className="text-bone hover:text-powder-blue transition-colors duration-200 font-medium">
              Browse Gigs
            </a>
            <a href="/create-gig" className="text-bone hover:text-powder-blue transition-colors duration-200 font-medium">
              Post a Job
            </a>
            <a href="/my-gigs" className="text-bone hover:text-powder-blue transition-colors duration-200 font-medium">
              My Gigs
            </a>
            <a href="/my-bids" className="text-bone hover:text-powder-blue transition-colors duration-200 font-medium">
              My Bids
            </a>
          </div>

          {/* Auth Buttons / User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {/* When NOT logged in */}
            <a href="/login">
              <button className="px-6 py-2 text-royal-blue bg-bone hover:bg-powder-blue transition-colors duration-200 rounded-lg font-medium">
                Login
              </button>
            </a>
            <a href="/register">
              <button className="px-6 py-2 bg-powder-blue text-royal-blue hover:bg-bone transition-colors duration-200 rounded-lg font-medium">
                Sign Up
              </button>
            </a>

            {/* When logged in - User Menu (Hidden by default, show when authenticated) */}
            {/* <div className="relative">
              <button className="flex items-center space-x-2 text-bone hover:text-powder-blue transition-colors duration-200">
                <div className="w-10 h-10 bg-powder-blue rounded-full flex items-center justify-center">
                  <span className="text-royal-blue font-bold text-lg">JD</span>
                </div>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 hidden">
                <a href="/profile" className="block px-4 py-2 text-royal-blue hover:bg-powder-blue transition-colors">
                  Profile
                </a>
                <a href="/my-gigs" className="block px-4 py-2 text-royal-blue hover:bg-powder-blue transition-colors">
                  My Gigs
                </a>
                <a href="/my-bids" className="block px-4 py-2 text-royal-blue hover:bg-powder-blue transition-colors">
                  My Bids
                </a>
                <hr className="my-2 border-powder-blue" />
                <button className="w-full text-left px-4 py-2 text-red-600 hover:bg-powder-blue transition-colors">
                  Logout
                </button>
              </div>
            </div> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-bone hover:text-powder-blue transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Hidden by default */}
        {/* <div className="md:hidden mt-4 pb-4 hidden">
          <div className="flex flex-col space-y-3">
            <a href="/" className="text-bone hover:text-powder-blue transition-colors py-2">
              Home
            </a>
            <a href="/gigs" className="text-bone hover:text-powder-blue transition-colors py-2">
              Browse Gigs
            </a>
            <a href="/create-gig" className="text-bone hover:text-powder-blue transition-colors py-2">
              Post a Job
            </a>
            <a href="/my-gigs" className="text-bone hover:text-powder-blue transition-colors py-2">
              My Gigs
            </a>
            <a href="/my-bids" className="text-bone hover:text-powder-blue transition-colors py-2">
              My Bids
            </a>
            <hr className="border-powder-blue my-2" />
            <a href="/login" className="text-bone hover:text-powder-blue transition-colors py-2">
              Login
            </a>
            <a href="/register" className="text-bone hover:text-powder-blue transition-colors py-2">
              Sign Up
            </a>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
