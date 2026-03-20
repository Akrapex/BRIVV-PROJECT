type Props = {
  active: "login" | "register";
  setActive: (val: "login" | "register") => void;
};

const AuthTabs = ({ active, setActive }: Props) => {
  return (
    <div className="flex justify-center space-x-6">
      <button
        onClick={() => setActive("login")}
        className={`pb-2 text-sm font-medium border-b-2 cursor-pointer ${
          active === "login"
            ? "border-green-600 text-green-700"
            : "border-transparent text-gray-500"
        }`}
      >
        Login
      </button>

      <button
        onClick={() => setActive("register")}
        className={`pb-2 text-sm font-medium border-b-2 cursor-pointer ${
          active === "register"
            ? "border-green-600 text-green-700"
            : "border-transparent text-gray-500"
        }`}
      >
        Create Account
      </button>
    </div>
  );
};

export default AuthTabs;
