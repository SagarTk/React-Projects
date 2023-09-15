import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex flex-row justify-center items-center py-2 border-2 border-gray-200'>
    
        <div className='flex justify-between w-[80%] items-center'>

            
                <Link to="/">
                    <div className='font-bold text-2xl'>        
                        My <span className='text-orange-500'>logo</span>
                    </div>
                </Link>
            
        
            <div className='flex text-md font-normal'> 
                <ul className='flex justify-between gap-5'>
                    <li className='text-gray-500 font-medium'>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    
                    <li className='text-gray-500 font-medium'>
                        <NavLink to="/about">
                            About
                        </NavLink>
                    </li>
                    
                    <li className='text-gray-500 font-medium'>
                        <NavLink to="/contact">
                            Contact
                        </NavLink>
                    </li>
                    
                    <li className='text-gray-500 font-medium'>
                        <NavLink to="/github">
                            Github
                        </NavLink>
                    </li>
                </ul>
            </div>
            
            <div className='flex justify-between gap-2 text-sm font-medium'>
                <Link className='border-2 border-gray-200 px-2 py-1 flex justify-center items-center rounded-md'>
                    Log In
                </Link>

                <Link className='bg-orange-500 px-2 py-1 rounded-md flex justify-center items-center'>
                    Get Started
                </Link>
            </div>
        </div>
      
    </header>
  )
}

export default Header
