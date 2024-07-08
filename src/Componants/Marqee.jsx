// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
// eslint-disable-next-line no-unused-vars
import React from 'react'

const Marqee = () => {
    
  return (
    <div className='w-full py-20 rounded-t-3xl  bg-[#004D43]'>

        <div className='Text-div border-t-2 border-b-2 flex border-zinc-300 whitespace-nowrap'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='text-[16vw] font-semibold uppercase leading-none'>We Are Ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='text-[16vw] font-semibold uppercase leading-none'>We Are Ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='text-[16vw] font-semibold uppercase leading-none'>We Are Ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marqee