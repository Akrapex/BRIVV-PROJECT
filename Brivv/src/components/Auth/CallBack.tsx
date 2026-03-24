import { useEffect, useState } from "react";
import { TbRosetteDiscountCheck } from "react-icons/tb";
import { TbCircleDashedCheck } from "react-icons/tb";
import supabase from "../../../utils/supabaseClient";

function CallBack() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    const handleAuth = async () => {
      const { error } = await supabase.auth.getSession();

      if (error) {
        setLoading(false);
        setSuccess(false);
        setError(error.message);
      }
      setSuccess(true);
      setLoading(false);
    };
    handleAuth();
  }, []);

  return (
    <section>
      {error ? (
        <div>{error}</div>
      ) : (
        <div>
          <span className="flex items-center gap-2 w-fit mb-2 rounded-full py-1 px-3 bg-[#DCE8B2] font-medium text-[#414B22]s">
            {loading ? <TbCircleDashedCheck /> : <TbRosetteDiscountCheck />}
            {loading ? "Verifying email address" : "AUTHENTICATION COMPLETE"}
          </span>

          <h1 className="lg:text-[60px] text-2xl text-[#283300] font-black leading-15 mb-8">
            Welcome to <span className="text-[#4E6400]">Akrapex.</span>
          </h1>

          {success && (
            <div>
              <p className="text-[18px] text-[#454839] mb-6">
                Your account is now fully active. You're ready to start curating
                your dream estate with our bespoke collection of premium
                properties.
              </p>
              <button className="button">Go to login</button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default CallBack;
