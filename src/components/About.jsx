import React from 'react'

function About() {
  return (
    <div
    className='w-full py-20 bg-[#cdea68] rounded-tl-2xl rounded-tr-2xl font-["Neue"]'>
      <div className='w-full border-b-[1px] border-[#99AD52] pb-12'>
        <h1 className='font-["Neue"] text-[3.8vw] w-11/12 leading-[3.5vw] px-16'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      </div>
      <div className='w-full border-b-[1px] border-[#99AD52] h-[50vh] px-16 py-4 flex items-start'>
        <div className='w-1/2'>
          <h6>What you can expect:</h6>
        </div>
        <div className='w-1/2 flex'>
        <div className='flex flex-col gap-8 w-[45%]'>
          <p>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.</p>

          <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
        </div>
          <div className='flex flex-col ml-28 mt-24'>
            <h5>S:</h5>
            <a href="#">Instagram</a>
            <a href="#">Behance</a>
            <a href="#">Facebook</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className='w-full flex gap-5 px-16 pt-4'>
        <div className='w-1/2'>
          <h1 className='text-[3.5vw]'>Our approach:</h1>
          <button className='flex items-center gap-8 px-6 py-4 mt-4 bg-zinc-900 uppercase text-white rounded-full'>Read More
            <div className='w-2 h-2 rounded-full bg-zinc-100'></div>
          </button>
        </div>
        <div className='w-1/2 h-[65vh] bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg")] rounded-xl'></div>
      </div>
    </div>
  )
}

export default About