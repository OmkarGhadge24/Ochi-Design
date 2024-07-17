import React, { useEffect, useState } from "react";

function Eyes() {
    const [rotate, setRotate] = useState(0);
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            let angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
            setRotate(angle-180);
        })
    })
  return (
    <div className="w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.6" className='relative w-full h-full bg-cover bg-center bg-[url("./assets/main.jpg")]'>
        <div className="absolute flex gap-8 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[14vw] h-[14vw] flex items-center justify-center bg-zinc-100 rounded-full">
            <div className="relative w-4/6 h-4/6 bg-[#212121] rounded-full">
              <div style={{transform : `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute w-full h-6 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <div className="w-6 h-6 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[14vw] h-[14vw] flex items-center justify-center bg-zinc-100 rounded-full">
            <div className="relative w-4/6 h-4/6 bg-[#212121] rounded-full">
              <div style={{transform : `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute w-full h-6 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <div className="w-6 h-6 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
