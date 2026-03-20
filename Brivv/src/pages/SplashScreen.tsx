import { useEffect, useState } from "react"
import { useNavigate } from "react-router";



const SplashScreen = () => {
  
  let [navigateTo, setNavigateTo] = useState(false);

  let navigator = useNavigate();

  function navigateScreen() {
    setNavigateTo(true)
    navigator("/properties")
    return null
  }


  useEffect(() => {
    setTimeout(navigateScreen, 3000);
  },[])

  if(navigateTo) return navigateScreen

  return (
    <div className="min-h-screen bg-[url('/images/slash-screen.svg')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
      <div className="w-md h-342px] text-center backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-10 shadow-2xl">
        <img
          src="/images/logo.png"
          alt="logo"
          className="bg-[#39E0794D] w-9 p-5 rounded-xl border border-[#39E0794D] mx-auto text-center"
        />
        <p className="text-[32px] font-bold text-white">
          BRIVV
        </p>

        <p className="text-white/80 leading-5 tracking-[0.35em] uppercase mt-2 text-sm">
          Buy • Rent • Lease • Learn
        </p>

        <div className="flex items-center gap-2 mt-4 text-xs text-white/80">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-lg leading-4 ">
            Creating exclusive experience...
          </span>
          <span className="ml-auto">74%</span>
        </div>

        {/* Progress Bar */}
        <div className="mt-2 w-full h-1.5 bg-white/20 rounded-full overflow-hidden ">
          <div className="h-full w-[74%] bg-emerald-400 animate-ping"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
