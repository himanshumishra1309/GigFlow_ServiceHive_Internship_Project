const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-powder-blue to-bone flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="bg-royal-blue rounded-lg px-6 py-3 inline-block mb-4">
            <span className="text-3xl font-bold text-bone">GigFlow</span>
          </div>
          <h1 className="text-3xl font-bold text-royal-blue mb-2">Welcome Back</h1>
          <p className="text-royal-blue opacity-80">Sign in to continue to your account</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form className="space-y-6">
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

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-royal-blue border-powder-blue rounded focus:ring-royal-blue"
                />
                <span className="ml-2 text-royal-blue text-sm">Remember me</span>
              </label>
              <a href="#" className="text-royal-blue text-sm font-semibold hover:text-powder-blue transition-colors">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-royal-blue text-bone py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Sign In
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

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-royal-blue">
              Don't have an account?{' '}
              <a href="/register" className="font-bold hover:text-powder-blue transition-colors">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
