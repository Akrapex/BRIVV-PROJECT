import { useEffect, useState } from "react";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { useLocation, useNavigate } from "react-router";
import supabase from "../../../utils/supabaseClient";
import { useAuth } from "../../Contexts/AuthContext";

const ConfirmEmail = () => {
  const [resending, setResending] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  const userMail = location.state?.email;

  const { session } = useAuth();

  if (!userMail) navigate("/auth");

  useEffect(() => {
    if (session?.user) {
      navigate("/profile");
    } else {
      navigate("/auth");
    }
  }, [session, navigate]);

  const handleGoToInbox = () => {
    const domain = userMail.split("@")[1];

    let url = "https://mail.google.com";

    if (domain.includes("gmail")) {
      url = "https://mail.google.com";
    } else if (domain.includes("yahoo")) {
      url = "https://mail.yahoo.com";
    } else if (domain.includes("outlook") || domain.includes("hotmail")) {
      url = "https://outlook.live.com";
    }

    window.open(url, "_blank");
  };

  const handleResend = async () => {
    if (!userMail) return;

    setResending(true);
    const { error } = await supabase.auth.resend({
      type: "signup",
      email: userMail,
    });

    setResending(false);

    if (error) {
      console.log("An error occured resending mail!");
    } else alert("Email resent sucessfully");
  };

  return (
    <section className="bg-[#fafaed] flex justify-center items-center">
      <div className="flex flex-col text-center items-center gap-3">
        <span className="w-20 h-20 bg-white flex items-center justify-center rounded-full">
          <MdOutlineMarkEmailRead size={35} color="#516d1a" />
        </span>
        <h1 className="text-2xl lg:text-[45px] text-[#0D141B] font-extrabold">
          Check your email!
        </h1>
        <p className="text-[#454839] text-[18px]">
          We've sent a confirmation link to your inbox. Please click the link to
          verify your account and start exploring properties.
        </p>

        <button onClick={handleGoToInbox} className="button mt-2">
          Go to Inbox
        </button>
        <p className="text-[14px] text-[#454839] mt-2">
          Didn't receive the email?
        </p>

        <h3
          onClick={handleResend}
          className="text-[#4E6400] font-semibold cursor-pointer"
        >
          {resending ? "Resending" : "Resend link"}
        </h3>
      </div>
    </section>
  );
};

export default ConfirmEmail;
