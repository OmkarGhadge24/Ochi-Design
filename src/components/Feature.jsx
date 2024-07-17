import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import { Power4 } from "gsap/all";
function Feature() {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-10 ">
      <div className="w-full px-16 border-b-[1px] border-zinc-400 pb-12">
        <h1 className='text-[55px] font-["Neue"] tracking-tight'>
          Featured projects
        </h1>
      </div>
      <div className="px-16">
        <div className="cards w-full mt-10 flex gap-6">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="container relative w-1/2 h-[75vh]"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-black rounded-full"></div> FYDE
            </div>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className='absolute flex text-[#CDEA68] overflow-hidden left-full -translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] text-9xl leading-none font-["Founder"]'>
                {"FYDE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="container relative w-1/2 h-[75vh]"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-black rounded-full"></div> VISE
            </div>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] text-9xl leading-none font-["Founder"]'>
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>

        <div className="cards w-full mt-16 flex gap-6">
          <motion.div
            onHoverStart={() => handleHover(2)}
            onHoverEnd={() => handleHoverEnd(2)}
            className="container relative w-1/2 h-[75vh]"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-black rounded-full"></div> TRAWA
            </div>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className='absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] text-9xl leading-none font-["Founder"]'>
                {"TRAWA".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[2]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(3)}
            onHoverEnd={() => handleHoverEnd(3)}
            className="container relative w-1/2 h-[75vh]"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-black rounded-full"></div> PREMIUM
              BLEND
            </div>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] text-9xl leading-none font-["Founder"]'>
                {"PREMIUM".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[3]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
