import { useEffect, useState } from 'react'
import './App.css'
import {ThemeProvider} from './contexts/theme.js'
import ThemeBtn from './components/ThemeBtn.jsx'
import Card from './components/Card.jsx'

//To toggle we need to configure tailwind beyond its original boilerplate config and we have to add '''darkMode: "class",''' into tailwind.config.js 

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme=()=>{
    setThemeMode("light")
  }
  const darkTheme=()=>{
    setThemeMode("dark")
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                { <ThemeBtn/>}
            </div>

            <div className="w-full max-w-sm mx-auto">
                { <Card/>}
            </div>
        </div>
      </div>
    </ThemeProvider>

  )
}

export default App
