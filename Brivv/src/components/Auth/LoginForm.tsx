import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { BsEye } from "react-icons/bs";
import { useAuth } from "../../Contexts/AuthContext";
import { useNavigate } from "react-router";
import { ClipLoader } from "react-spinners";

interface LoginData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<LoginData>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { loading, signInUser } = useAuth();

  // HANDLE INPUT CHANGE
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // HANDLE SUBMIT (just to access data)
  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = formData;
    const result = await signInUser(email, password);

    if (result.success) {
      navigate("/properties");
      return;
    }

    alert(result.message);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* EMAIL */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="irorerejuliet@gmail.com"
          className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
        />
      </div>

      {/* PASSWORD */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium text-gray-700">Password</label>
          <p className="text-sm text-green-600 font-medium cursor-pointer">
            Forgot password?
          </p>
        </div>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Min. 8 characters"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 pr-10 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
          />
          <BsEye
            size={18}
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
          />
        </div>
      </div>

      {/* SUBMIT */}
      <button
        type="submit"
        className="w-full rounded-lg bg-green-700 py-3 text-sm font-semibold text-white hover:bg-green-800 transition cursor-pointer"
      >
        {loading ? <ClipLoader size={16} color="#fff" /> : "Sign in"}
      </button>
    </form>
  );
};

export default LoginForm;
