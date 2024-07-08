
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { GoDotFill } from "react-icons/go";


const Features = () => {
    return (
        <div className='h-auto w-[100vw] bg-zinc-950'>
            <h1 className='text-[7vmin] p-6 border-b-2 border-zinc-700'>Featured projects</h1>

            <div className=' h-auto flex gap-7 bg-red-40000 p-14' >

                <div className='h-[70%] w-1/2'>
                    <h4 className='flex items-center gap-3'><GoDotFill />FYDE</h4>
                    <div className='relative p-11 h-[65vmin] w-full bg-cover bg-center rounded-xl bg-[url(https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png)]'>
                    <h1 className='absolute top-1/2 left-full z-[9] -translate-x-1/2 -translate-y-1/2 text-[10vmin]'>FYDE</h1>

                    </div>


                 <div className='h-auto p-2 flex gap-6 items-center '>
                 {["AUDIT","COPYWRITING","SALES DECK", "SLIDES DESIGN"].map((items,index)=>{
                    return(
                       <p key={index} className='p-4 py-2 bg-zinc-900 border-zinc-600 border rounded-full'>{items}</p>
                    )
                 })}
                 </div>
                 

                </div>
                <div className='h-[70%] w-1/2'>
                    <h4 className='flex items-center gap-3'><GoDotFill />VISE</h4>
                    <div className='relative p-11 h-[65vmin] w-full bg-cover bg-center rounded-xl bg-[url(https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg)]'>
                    <h1 className='absolute top-1/2 right-full z-[9] -translate-x-1/2 -translate-y-1/2 text-[10vmin]'>FYDE</h1>

                    </div>


                 <div className='h-auto p-2 flex gap-6 items-center '>
                 {["AGENCY","COMPANY PRESENTATION"].map((items,index)=>{
                    return(
                       <p key={index} className='p-4 py-2 bg-zinc-900 border-zinc-600 border rounded-full'>{items}</p>
                    )
                 })}
                 </div>
                 

                </div>
                

            </div>
        </div>
    )
}

export default Features