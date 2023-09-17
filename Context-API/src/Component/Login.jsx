import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../Context/UserContext'

const Login = () => {
    const [username , setUsername] = useState("")
    const [paasword , setPaasword] = useState("")
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username , paasword})
    }

  return (
    <div className='flex flex-col gap-2 text-black'>
        <input 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text" 
        placeholder='username'
        />
        <input 
        value={paasword}
        onChange={(e) => setPaasword(e.target.value)}
        type="text" 
        placeholder='paasword'
        />
        <button className='bg-green-500 text-black px-1' onClick={handleSubmit}>Submit</button>
    </div>
  )
}
export default Login