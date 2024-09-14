// eslint-disable-next-line no-unused-vars
import React from 'react'
import { GoDotFill } from "react-icons/go";

const About = () => {
  return (
    <div className='w-full py-10 bg-[#CDEA68] rounded-tl-lg text-black'>

        <h1 className='md:text-6xl p-11'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>

        <div className='w-full bg-[#CDEA68] border-t-[1px] flex flex-col justify-end md:flex-row gap-7   border-[#8a975a] '>
<div className=' w-auto md:w-1/2 flex flex-col justify-center items-center md:pt-10 md:pl-7'>
  <h1 className='text-[5vmin]'>Our approch:</h1>
  <button className='bg-zinc-900 p-2 md:px-7 md:py-6 text-white rounded-full flex items-center justify-center gap-6'>Read more <GoDotFill />
  </button>
</div>
<div className='w-full md:w-1/2 h-[60vh] bg-center bg-cover bg-[url(https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg)] mt-4 mr-10 rounded-lg'></div>
        </div>
    </div>
  )
}

export default About