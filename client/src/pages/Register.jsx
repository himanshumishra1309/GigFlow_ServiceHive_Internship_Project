const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-powder-blue to-bone flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="bg-royal-blue rounded-lg px-6 py-3 inline-block mb-4">
            <span className="text-3xl font-bold text-bone">GigFlow</span>
          </div>
          <h1 className="text-3xl font-bold text-royal-blue mb-2">Create Account</h1>
          <p className="text-royal-blue opacity-80">Join GigFlow and start your journey</p>
        </div>

        {/* Register Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form className="space-y-5">
            {/* Full Name Field */}
            <div>
              <label htmlFor="name" className="block text-royal-blue font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="w-full px-4 py-3 border-2 border-powder-blue rounded-lg focus:border-royal-blue focus:outline-none transition-colors duration-200 text-royal-blue"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-royal-blue font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 border-2 border-powder-blue rounded-lg focus:border-royal-blue focus:outline-none transition-colors duration-200 text-royal-blue"
              />
            </div>

            {/* Username Field */}
            <div>
              <label htmlFor="username" className="block text-royal-blue font-semibold mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="johndoe"
                className="w-full px-4 py-3 border-2 border-powder-blue rounded-lg focus:border-royal-blue focus:outline-none transition-colors duration-200 text-royal-blue"
              />
            </div>

            {/* Contact Number Field */}
            <div>
              <label htmlFor="contact_no" className="block text-royal-blue font-semibold mb-2">
                Contact Number
              </label>
              <input
                type="tel"
                id="contact_no"
                placeholder="+1 234 567 8900"
                className="w-full px-4 py-3 border-2 border-powder-blue rounded-lg focus:border-royal-blue focus:outline-none transition-colors duration-200 text-royal-blue"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-royal-blue font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 border-2 border-powder-blue rounded-lg focus:border-royal-blue focus:outline-none transition-colors duration-200 text-royal-blue"
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-royal-blue text-bone py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl mt-6 cursor-pointer"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-powder-blue"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-royal-blue">OR</span>
            </div>
          </div>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-royal-blue">
              Already have an account?{' '}
              <a href="/login" className="font-bold hover:text-powder-blue transition-colors">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
