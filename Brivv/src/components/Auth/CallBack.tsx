import { useEffect, useState } from "react";
import { PiSealCheckFill } from "react-icons/pi";
import { TbCircleDashedCheck } from "react-icons/tb";
import supabase from "../../../utils/supabaseClient";
import { useNavigate } from "react-router";
import { useAuth } from "../../Contexts/AuthContext";

function CallBack() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  const { session } = useAuth();

  useEffect(() => {
    const handleAuth = async () => {
      const { error } = await supabase.auth.getSession();
      const hasHash = window.location.href.includes("#");

      if (error) {
        setLoading(false);
        setSuccess(false);
        setError(error.message);
        return;
      }

      if (hasHash) {
        if (session?.user) {
          setSuccess(true);
          setLoading(false);
          setTimeout(() => {
            navigate("/dashboard", { replace: true });
          }, 3000);
          return;
        }
        navigate("/auth", { replace: true });
      } else {
        navigate("/auth", { replace: true });
      }
    };
    handleAuth();
  }, [navigate]);

  const handleNavigate = () => {
    navigate("/dashboard", { replace: true });
  };

  return (
    <section>
      {error ? (
        <div>{error}</div>
      ) : (
        <div>
          <span className="flex items-center gap-2 w-fit mb-2 rounded-full py-1 px-3 bg-[#DCE8B2] font-medium text-[#414B22]s">
            {loading ? <TbCircleDashedCheck /> : <PiSealCheckFill />}
            {loading ? "Verifying email address" : "AUTHENTICATION COMPLETE"}
          </span>

          <h1 className="lg:text-[60px] text-2xl text-[#283300] font-black leading-15 mb-8">
            Welcome to <span className="text-[#4E6400]">Akrapex.</span>
          </h1>

          {success && (
            <div>
              <p className="text-[14px] text-[#454839] mb-6">
                Your account is now fully active. You're ready to start curating
                your dream estate with our bespoke collection of premium
                properties.
              </p>

              <p className="text-[#36382c] mb-4 font-medium">
                You'd be redirected to dashboard shortly. If not, click the
                button below.
              </p>
              <button onClick={handleNavigate} className="button">
                Go to dashboard
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default CallBack;
