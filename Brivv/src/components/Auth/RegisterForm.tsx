import { BsEye } from "react-icons/bs";

const RegisterForm = () => {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Full Name</label>
        <input
          type="text"
          placeholder="John Doe"
          className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          placeholder="example@gmail.com"
          className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
        />
      </div>

      <div className="relative">
        <input
          type="password"
          placeholder="Create password"
          className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 pr-10 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
        />
        <BsEye
          size={18}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>

      <button
        type="button"
        className="w-full rounded-lg bg-green-700 py-3 text-sm font-semibold text-white hover:bg-green-800 transition"
      >
        Create Account
      </button>
    </form>
  );
};

export default RegisterForm;
