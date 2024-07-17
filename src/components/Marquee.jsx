import { motion } from "framer-motion"
import React from 'react'

function Marquee() {
  return (
    <div data-scroll
    data-scroll-section
    data-scroll-speed=".1"
    className='w-full py-12 rounded-tl-2xl rounded-tr-2xl bg-[#004D43] text-[#F1F1F1]'>
        <div className='text border-t-2 border-b-2 border-[#F1F1F1] font-["Founder"] flex whitespace-nowrap overflow-hidden'>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[25vw] uppercase leading-none pr-10'>we are ochi</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[25vw] uppercase leading-none pr-10'>we are ochi</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[25vw] uppercase leading-none pr-10'>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee