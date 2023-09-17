import Login from "./Component/Login"
import Profile from "./Component/Profile"
import UserContextProvider from "./Context/UserContextProvider"

function App() {

  return (
    <UserContextProvider>
      <div className="bg-slate-900 w-screen h-screen text-teal-300 flex flex-col justify-center items-center">
        
        <Login />
        <Profile />
        
      </div> 
    </UserContextProvider>
  )
}

export default App
