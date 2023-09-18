import React, { useState } from 'react'
import UseContext from '../Context/UserContext'

const Login = () => {

  const [username , setUsername] = useState("")
  const [paasword , setPaasword] = useState("")
  const {setUser} = UseContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username , paasword})
  }

  return (
    <div className='flex flex-col gap-3'>
      <input 
      className='p-2 bg-gray-200 outline-none rounded-md text-black'
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      type="text" 
      />

      <input 
      value={paasword}
      onChange={(e) => setPaasword(e.target.value)}
      className='p-2 bg-gray-200 outline-none rounded-md text-black'
      type="text" 
      />
      
      <button 
      onClick={handleSubmit}
      className='p-2 font-bold text-md bg-green-500 rounded-md text-black'>Login</button>
    </div>
  )
}

export default Login
