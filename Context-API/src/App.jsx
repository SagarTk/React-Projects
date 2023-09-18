import { useState } from "react"
import Login from "./Component/Login"
import Profile from "./Component/Profile"
import { UserContextProvider } from "./Context/UserContext"

function App() {

  const [user , setUser] = useState("")

  return (
    
    <UserContextProvider value={{user , setUser}}>
      <div className="bg-slate-900 w-screen h-screen text-teal-300 flex flex-col justify-center items-center">
        
        <Login />
        <Profile />
        
      </div> 
    </UserContextProvider>
    
  )
}

export default App
