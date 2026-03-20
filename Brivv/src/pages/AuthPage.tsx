import { useState } from "react";
import AuthLayout from "../components/Auth/AuthLayout";
import AuthTabs from "../components/Auth/AuthTabs";
import SocialAuth from "../components/Auth/SocialAuth";
import LoginForm from "../components/Auth/LoginForm";
import RegisterForm from "../components/Auth/RegisterForm";

const AuthPage = () => {
  const [active, setActive] = useState<"login" | "register">("login");

  return (
    <AuthLayout>
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold">
          {active === "login" ? "Welcome back" : "Create account"}
        </h2>
        <p className="text-sm text-gray-500 mt-2">Real estate made simple.</p>
      </div>

      <AuthTabs active={active} setActive={setActive} />

      <div className="flex items-center gap-3 text-xs text-gray-400">
        <div className="flex-1 h-px bg-gray-200" />
        or continue with email
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      <SocialAuth />

      {active === "login" ? <LoginForm /> : <RegisterForm />}

      <p className="text-xs text-center text-gray-400">
        By continuing, you agree to Terms & Privacy Policy
      </p>
    </AuthLayout>
  );
};

export default AuthPage;
