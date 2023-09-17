import React , {useContext} from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {

    const {user} = useContext(UserContext)

    if(!user){
        return (<div>Please Login</div>)
    }
    return (
      <div>
        Welcome {user.username}
        {console.log("welcome")}
      </div>
    )
    
    
}

export default Profile
