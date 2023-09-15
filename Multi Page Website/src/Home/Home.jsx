import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col items-center py-8'>

      <div className='flex justify-between w-[80%] mb-12'>
      
        <div>
          <img className='w-[70%] h-full' src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="" />
        </div>

        <div className='flex flex-col justify-center w-[35%]'>
          <div className='text-4xl font-bold self-end'>Download Now</div>
          <div className='text-3xl font-bold self-end'>Lorem Ipsum</div>
          <button className='bg-orange-600 text-white w-fit self-end font-medium px-3 py-1 rounded-md mt-4 '>Download now</button>
        </div>
      
      </div>

      <div className='flex justify-center items-center my-10'>
        <img className='w-[70%] h-full' src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="" />
      </div>

    </div>
  )
}

export default Home
