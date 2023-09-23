import { useEffect, useState } from "react"
import { ThemeProvider } from "./Context/Context"
import Card from "./Components/Card"
import ThemeBtn from "./Components/ThemeBtn"

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
    
  }

  useEffect(() => {
    const x = document.querySelector('html').classList.remove("light", "dark" , "white")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center bg-gray-400">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
              <input className="sr-only peer" type="checkbox" name="" id="" />
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App