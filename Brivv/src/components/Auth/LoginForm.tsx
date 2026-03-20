import { BsEye } from "react-icons/bs";

const LoginForm = () => {
  return (
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
          <label className="text-sm font-medium text-gray-700">Password</label>
          <p className="text-sm text-green-600 font-medium cursor-pointer">
            Forgot password?
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
  );
};

export default LoginForm;
