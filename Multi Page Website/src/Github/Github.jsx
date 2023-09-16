import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

  const data = useLoaderData()
  // const [data , setData] = useState("")

  // useEffect(() => {

  //   fetch('https://api.github.com/users/SagarTk')
  //   .then((res) => res.json())
  //   .then((res) => setData(res))
    
  // } , [])

  return (
    <div className='flex items-center justify-center w-[100%] h-[100%] my-3'>
      
      <div className='flex items-center justify-between w-[80%] rounded-md bg-green-400 p-4'>

        <div className=' flex items-center w-[70%] h-[60%]'>
          <img className='w-[40%] h-[40%] rounded-md' src={data.avatar_url} alt="" />
        </div>

        <div className='flex flex-col w-[30%] gap-2'>
          <div className='text-lg font-medium'>Name: {data.name}</div>
          <div className='text-lg font-medium'>Username: {data.login}</div>
          <div className='text-lg font-medium'>Followers: {data.following}</div>
          <div className='text-lg font-medium'>Repository: {data.public_repos}</div>
        </div>

      </div>

    </div>
  )
}

export default Github

export const githubInfo = async () => {

  const response = await fetch("https://api.github.com/users/SagarTk")
  return response.json()

}