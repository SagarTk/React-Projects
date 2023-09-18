import React from 'react'
import UseContext from '../Context/UserContext'

const Profile = () => {
  const {user} = UseContext()
  
      if(!user.username){
        return <div>Please Login</div>
      }
      else{
        return <div>Welcome {user.username}</div>
      }
    
  
}

export default Profile
