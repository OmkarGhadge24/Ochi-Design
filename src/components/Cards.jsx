import React from 'react'

function Cards() {
    return (
        <div className='w-full h-screen flex gap-4 px-16 items-center'>
            <div className='cards h-[60vh] w-1/2'>
                <div className='card relative rounded-lg w-full h-full bg-[#004D43] flex items-center justify-center'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute left-8 bottom-8 border-[1px] border-[#CDEA68] py-1 px-3 rounded-full text-[#CDEA68] text-sm'>@2019-2022</button>
                </div>
            </div>
            <div className='cards h-[60vh] flex gap-4 w-1/2'>
                <div className='card relative rounded-lg w-1/2 h-full bg-[#212121] flex items-center justify-center'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className='absolute left-8 bottom-8 border-[1px] border-[#F1F1F1] py-1 px-3 rounded-full text-[#F1F1F1] text-sm'>RATING 5.0 ON CLUTCH</button>
                </div>
                <div className='card relative rounded-lg w-1/2 h-full bg-[#212121] flex items-center justify-center'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className='absolute left-8 bottom-8 border-[1px] border-[#F1F1F1] py-1 px-3 rounded-full text-[#F1F1F1] text-sm'>BUSINESS BOOTCAMP ALUMNI</button>
                </div>
            </div>
        </div>
    )
}

export default Cards