import { createContext, useContext } from "react"

export const UserContext = createContext()

export const UserContextProvider = UserContext.Provider ;

const UseContext = () => {
    return useContext(UserContext)
}

export default UseContext
