import React from 'react'

const LandingPage = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-[0.1px]'>
            <div className="textStructre mt-52 px-20">
                {["We Create","Eye Opening","Presentation"].map((item,index) => {
                    return     <div className="masker"> 
                    <h1 className="uppercase text-[7.5vw] leading-[6vw] tracking-tighter font-['Founders_Grotesk X-Cond'] font-medium">
                        {item}
                    </h1>
                </div>
                })}
            
            </div>
            <div className="border-t-[1px] border-zinc-800 mt-[55px] flex justify-between items-center py-4 px-20">
                {["For public and private companies","From the first pitch to IPO"].map((item,index) => (
                    <p className="text-md font-light tyracking-tight leading-none">{item}</p>
                ))}
                <div className="start">
                    <div className="px-5 py-2 border-[2px] border-zinc-600 font-light text-sm capitalize rounded-full">Start the project</div>
                </div>
            </div>
    </div>
  )
}

export default LandingPage
