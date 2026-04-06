import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { BsEye } from "react-icons/bs";
import { useAuth } from "../../Contexts/AuthContext";
import { useNavigate } from "react-router";
import { ClipLoader } from "react-spinners";

interface FormData {
  fullName: string;
  email: string;
  password: string;
}

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { session, loading, signUpUser } = useAuth();

  // HANDLE INPUT CHANGE
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { fullName, email, password } = formData;

    const result = await signUpUser(fullName, email, password);
    if (result.success) {
      navigate("confirm-email", { state: { email } });
    } else {
      console.log(result.message);
      console.log(session?.user);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* FULL NAME */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="John Doe"
          className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
        />
      </div>

      {/* EMAIL */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@gmail.com"
          className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
        />
      </div>

      {/* PASSWORD */}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Create password"
          className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 pr-10 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
        />
        <BsEye
          size={18}
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
        />
      </div>

      {/* SUBMIT */}
      <button
        type="submit"
        className="w-full rounded-lg bg-green-700 py-3 text-sm font-semibold text-white hover:bg-green-800 transition cursor-pointer"
      >
        {loading ? <ClipLoader size={16} color="#fff" /> : "Create Account"}
      </button>
    </form>
  );
};

export default RegisterForm;
