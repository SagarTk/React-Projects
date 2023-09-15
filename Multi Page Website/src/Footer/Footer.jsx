import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center py-4'>

        <div className='flex flex-row justify-between w-[80%]'>

            <div className=' font-bold text-2xl '>
                <Link to="/">
                    My <span className='text-orange-500'>logo</span>
                </Link>
            </div>        

            <div className='flex justify-between text-md w-[60%] '>

                <div className=' flex flex-col gap-3'>
                    <div className='font-medium'>RESOURCES</div>
                    <div className='text-gray-500'>Home</div>
                    <div className='text-gray-500'>About</div>
                </div> 
 
                <div className=' flex flex-col gap-3'>
                    <div className='font-medium'>FOLLOW US</div>
                    <div className='text-gray-500'>Github</div>
                    <div className='text-gray-500'>Discord</div>
                </div> 
                
                <div className=' flex flex-col gap-3'>
                    <div className='font-medium'>LEGAL</div>
                    <div className='text-gray-500'>Privacy Policy</div>
                    <div className='text-gray-500'>Terms & Coditions</div>
                </div>

            </div>

        </div>

        <div className='text-sm text-gray-500 font-bold mt-5 flex justify-center w-[100%] border-t-2 border-gray-300'>
            <div className='mt-2'>© 2023sagar.All Rights Reserved.</div>
        </div>

    </div>
  )
}

export default Footer
