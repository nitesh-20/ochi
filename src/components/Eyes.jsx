import React from 'react'

const Eyes = () => {
  return (
    <div className='eyes w-full h-screen overflow-hidden'>
        <div className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
           <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
            <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
                 <div className="w-2/3 h-2/3 rounded-full flex items-center justify-center bg-zinc-900">
                    <div className="line w-full bg-red-600 h-10 ">
                    <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                    </div>
                 </div>
             </div>
               <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
               <div className="w-2/3 h-2/3 rounded-full flex items-center justify-center bg-zinc-900">
               <div className="line w-full bg-red-600 h-10 ">
                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
             </div>
             </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Eyes
