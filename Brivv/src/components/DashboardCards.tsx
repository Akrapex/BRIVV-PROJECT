interface Stats {
    text: string;
    count: number;
    plusSign?: string;
    rate: number;
    indicator?: string;
    icon?: React.ReactNode;
}

function DashboardCards({text, count, icon, plusSign, rate, indicator}: Stats) {
  return (
    <article className="bg-white p-6 w-55 border border-[#CFDBE7] rounded-xl grow">
        <p className="font-medium text-[14px] leading-5 text-[#4C739A]">{text}</p>
        <div className="flex justify-between">
        <p className="text-[24px] font-bold leading-8 text-[#0D141B]">{count}</p> <span className={`flex items-center text-[14px] font-semibold leading-5 ${rate > 0 ? "text-[#078838]" : "text-[#4C739A]"}`}>{icon}{plusSign}{rate}{indicator}</span>
        </div>
    </article>
  )
}

export default DashboardCards