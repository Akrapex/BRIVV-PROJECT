import { IoMdTime } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function UpcomingViewings() {
  return (
    <article className="bg-white border border-[#CFDBE7] rounded-xl grow">
        <div className="p-6 border-b border-[#CFDBE7]">
            <h1 className="font-bold text-[18px]">Upcoming Viewings</h1>
        </div>

        <div className="p-4">
            <div className="flex items-center h-22.5 gap-2 pr-2 mb-5 bg-[#F8FAFC] hover:bg-[#ececec] rounded-lg before:content-[''] before:w-1.5 before:block before:h-full before:bg-[#6B8E23] overflow-hidden cursor-pointer transition duration-400">
                <div className="bg-white py-2 mx-1.5 px-2.75 w-fit rounded-md">
                    <p className="text-[12px] font-bold text-[#4C739A] leading-4">OCT</p>
                    <h4 className="text-[20px] font-black text-[#0D141B]">12</h4>
                </div>

                <div>
                    <h3 className="text-[14px] font-bold">Modern Penthou…</h3>
                    <p className="flex items-center gap-1 text-[12px] text-[#4C739A]"><IoMdTime /> 10:30 AM</p>
                </div>

                <MdOutlineKeyboardArrowRight size={25} className="ml-auto" />
            </div>

            <div className="flex items-center h-22.5 gap-2 p-2 mb-5 hover:bg-[#F8FAFC] rounded-lg  cursor-pointer transition duration-400">
                <div className="bg-white py-2 mx-1.5 px-2.75 w-fit rounded-md">
                    <p className="text-[12px] font-bold text-[#4C739A] leading-4">OCT</p>
                    <h4 className="text-[20px] font-black text-[#0D141B]">14</h4>
                </div>

                <div>
                    <h3 className="text-[14px] font-bold">Modern Penthou…</h3>
                    <p className="flex items-center gap-1 text-[12px] text-[#4C739A]"><IoMdTime /> 10:30 AM</p>
                </div>

                <MdOutlineKeyboardArrowRight size={25} className="ml-auto" />
            </div>

            <div className="flex items-center h-22.5 gap-2 p-2 hover:bg-[#F8FAFC] rounded-lg  cursor-pointer transition duration-400">
                <div className="bg-white py-2 mx-1.5 px-2.75 w-fit rounded-md">
                    <p className="text-[12px] font-bold text-[#4C739A] leading-4">OCT</p>
                    <h4 className="text-[20px] font-black text-[#0D141B]">15</h4>
                </div>

                <div>
                    <h3 className="text-[14px] font-bold">Modern Penthou…</h3>
                    <p className="flex items-center gap-1 text-[12px] text-[#4C739A]"><IoMdTime /> 10:30 AM</p>
                </div>

                <MdOutlineKeyboardArrowRight size={25} className="ml-auto" />
            </div>

            
        </div>
    </article>
  )
}

export default UpcomingViewings