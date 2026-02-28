import { BsEye } from "react-icons/bs";


const LoginAndRegistration = () => {
  return (
    <div className="wrapper flex my-20">
      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 relative">
        <img
          src="/images/estate-image.png"
          alt="Estate"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 p-12 flex flex-col justify-end text-white">
          <div className="mb-6 text-2xl font-semibold tracking-tight">
            ESTATEPRO
          </div>

          <h1 className="text-4xl font-bold leading-tight mb-4">
            Find your place in the world.
          </h1>

          <p className="text-gray-200 max-w-md text-sm">
            Join over 2 milloin users findung thier dream homes and expanding
            thier property investment portfolio
          </p>
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="flex flex-1 items-center justify-center bg-gray-50 px-6 py-12">
        <div className="w-full max-w-md space-y-6">
          {/* Header */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
            <p className="text-sm  text-[#4c739a] dark:text-slate-400 font-normal mt-2">
              The most trusted platform for buying, renting and propert
              education.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex space-x-6 border-b">
            <button className="pb-2 text-sm font-medium border-b-2 border-green-600 text-gray-500">
              Login
            </button>
            <button className="pb-2 text-sm font-medium  text-green-700">
              Create Account
            </button>
          </div>

          {/* Social Buttons */}
          <div className="space-y-3">
            <div>
              <button className="w-full rounded-lg border border-gray-300 bg-white py-3 text-sm font-medium hover:bg-gray-100 transition flex justify-center items-center">
                <img
                  src="/images/google-logo.png"
                  alt="google-logo"
                  className="w-8"
                />
                Continue with Google
              </button>
            </div>

            <button className="w-full rounded-lg border border-gray-300 bg-white py-3 text-sm font-medium hover:bg-gray-100 transition flex justify-center items-center gap-1">
              <span className="text-xs font-extrabold font-serif">iOS</span>
              Continue with Apple
            </button>
          </div>

          <div className="flex items-center gap-3 text-xs text-gray-400">
            <div className="flex-1 h-px bg-gray-200" />
            or register with email
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="text"
                placeholder="irorerejuliet@gmail.com"
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <p className="text-sm text-green-600 font-medium">
                  Forget password?
                </p>
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Min. 8 characters"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 pr-10 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />
                <BsEye
                  size={18}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>

            <button
              type="button"
              className="w-full rounded-lg bg-green-700 py-3 text-sm font-semibold text-white hover:bg-green-800 transition"
            >
              Sign in
            </button>
          </form>
          <p className="text-xs text-gray-400 text-center">
            By creating an account, you agree to our{" "}
            <span className="underline cursor-pointer">Terms of Service</span>{" "}
            and <span className="underline cursor-pointer">Privacy Policy</span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginAndRegistration
