import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4vw]">
        Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>
        <div className="w-full flex gap-5 border-t-[1px] pt-5 mt-10 border-[#0d0d0d]">
          <div className="w-1/2">
            <h1 className='text-6xl'>Our approch:</h1>
            <button className='flex uppercase gap-10 items-center px-10 py-6  bg-zinc-900 mt-10 rounded-full text-white'>Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div></button>
          </div>
          <div className="w-1/2 h-[60vh] rounded-2xl bg-blue-800">
            <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" srcset="" />
          </div>
        </div>
      
    </div>
  )
}

export default About
