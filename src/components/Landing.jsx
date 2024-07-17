import { motion } from 'framer-motion'
import React from 'react'
import { FaArrowUp } from "react-icons/fa6"

function Landing() {
    return (
        <div data-scroll
        data-scroll-section
        data-scroll-speed="-.3" 
        className='w-full h-screen bg-[#F1F1F1] pt-2 text-[#212121]'>
            <div className='textstructure mt-32 px-14'>
                {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
                    return (
                        <div className='masker'>
                            <div className='w-fit flex items-center'>
                                {index === 1 && (<motion.div 
                                initial={{width : 0}} 
                                animate={{width : "9vw"}} 
                                transition={{ease : [0.76,0,0.24,1], duration : 1}}
                                className='w-[9vw] h-[5.5vw] relative top-[0.5vw] bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")] bg-cover bg-center rounded-md mr-2'></motion.div>)}
                                <h1 className='flex items-center text-[9vw] leading-[7vw] h-full font-["Founder"]'>{item}</h1>
                            </div>
                        </div>)
                })}
            </div>
            <div className='border-t-[1px] border-zinc-400 mt-24 flex justify-between items-center py-5 px-8'>
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) =>
                    <p className='text-md tracking-light font-["Neue"]'>{item}</p>
                )}
                <div className='start flex items-center gap-3'>
                    <div className='px-4 py-1 border-[1px] border-zinc-600 rounded-full uppercase text-sm'>
                        start the project
                    </div>
                    <div className='h-8 w-8 flex items-center justify-center border-[1px] border-zinc-600 rounded-full text-sm'>
                        <span className='rotate-[45deg]'>
                            <FaArrowUp />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing