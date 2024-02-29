import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
const LandingPage = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-[0.1px]'>
            <div className="textStructre mt-40 px-20">
                {["We Create","Eye Opening","Presentation"].map((item,index) => {
                    return (   
                     <div className="masker"> 
                       <div className="w-fit flex">
                        {index === 1 && (
                        <div className="mr-3 rounded-md w-[9vw] h-[11vh]  relative -top-[-1.1vw] bg-red-500"></div>
                        )}
                        <h1 className="flex items-center uppercase text-[7.8vw] leading-[7vw]  font-['Founders_Grotesk X-Condensed'] font-bold">
                        {item}
                    </h1>
                  </div>
                </div>
             );   
            })}

            </div>
            <div className="border-t-[1px] border-zinc-800 mt-[120px] flex justify-between items-center py-4 px-20">
                {["For public and private companies","From the first pitch to IPO"].map((item,index) => (
                    <p className="text-md font-light tyracking-tight leading-none">{item}</p>
                ))}
                <div className="start flex items-center gap-4 ">
                    <div className="px-5 py-2 border-[2px] border-zinc-600 font-light text-md uppercase rounded-full">Start the project</div>
                    <div className="w-10 h-10 flex items-center justify-center border-zinc-600 rounded-full">
                    <span className="rotate-[45deg]">                    
                        <FaArrowUpLong />
                    </span>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default LandingPage
