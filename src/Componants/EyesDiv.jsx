// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'

const EyesDiv = () => {

    const [Rotate, setRotate] = useState(0)
    useEffect(()=>{
        window.addEventListener('mousemove',(e)=>{
          let mouseX = e.clientX;
          let mouseY = e.clientY;



          let DeltaX = mouseX - window.innerWidth/2;
          let DeltaY = mouseY - window.innerWidth/2;


          var Angle = Math.atan2(DeltaY,DeltaX) * (180/Math.PI)
          setRotate(Angle-180);
        })
    })
    return (
        <div className='w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-speed="-.7" className=' relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
                <div className='absolute flex justify-center gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-1/2  '>
                    <div className='h-[30vmin] w-[30vmin] flex justify-center items-center bg-white rounded-full'>
                        <div className='relative h-[15vmin] w-[15vmin]  bg-black rounded-full'>
                            <div style={{transform:`translate(-50%,-50%) rotate(${Rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y[50%]  h-[4vmin] w-full rotate-45'>

                                <div className='h-[4vmin] w-[4vmin] bg-white rounded-full'></div>

                            </div>
                        </div>
                    </div>
                    <div className='h-[30vmin] w-[30vmin] flex justify-center items-center bg-white rounded-full'>
                        <div className='relative h-[15vmin] w-[15vmin]  bg-black rounded-full'>
                            <div style={{transform:`translate(-50%,-50%) rotate(${Rotate}deg)`}}  className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y[50%]  h-[4vmin] w-full rotate-45'>

                                <div className='h-[4vmin] w-[4vmin] bg-white rounded-full'></div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EyesDiv