import { useState } from "react"
function App() {
  const [color,setColor]=useState("black")
  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2">
          <div className="flex flex-wrap shadow-lg bg-white justify-center gap-3 px-3 py-2 rounded-3xl">
            <button onClick={()=>{setColor("black")}}  className="px-4 py-1 rounded-full" style={{backgroundColor:"black", color: "white"}}>BLACK</button>
          </div>
          <div className="flex flex-wrap shadow-lg bg-white justify-center gap-3 px-3 py-2 rounded-3xl">
            <button onClick={()=>{setColor("olive")}} className="px-4 py-1 rounded-full" style={{backgroundColor:"olive", color: "white"}}>OLIVE</button>
          </div>
          <div className="flex flex-wrap shadow-lg bg-white justify-center gap-3 px-3 py-2 rounded-3xl">
            <button onClick={()=>{setColor("blue")}} className="px-4 py-1 rounded-full" style={{backgroundColor:"blue", color: "white"}}>BLUE</button>
          </div>
          <div className="flex flex-wrap shadow-lg bg-white justify-center gap-3 px-3 py-2 rounded-3xl">
            <button onClick={()=>{setColor("green")}} className="px-4 py-1 rounded-full" style={{backgroundColor:"green", color: "white"}}>GREEN</button>
          </div>
          <div className="flex flex-wrap shadow-lg bg-white justify-center gap-3 px-3 py-2 rounded-3xl">
            <button onClick={()=>{setColor("purple")}} className="px-4 py-1 rounded-full" style={{backgroundColor:"purple", color: "white"}}>PURPLE</button>
          </div>
          <div className="flex flex-wrap shadow-lg bg-white justify-center gap-3 px-3 py-2 rounded-3xl">
            <button onClick={()=>{setColor("pink")}} className="px-4 py-1 rounded-full" style={{backgroundColor:"pink", color: "black"}}>PINK</button>
          </div>
          <div className="flex flex-wrap shadow-lg bg-white justify-center gap-3 px-3 py-2 rounded-3xl">
            <button onClick={()=>{setColor("orange")}} className="px-4 py-1 rounded-full" style={{backgroundColor:"orange", color: "white"}}>ORANGE</button>
          </div>
          <div className="flex flex-wrap shadow-lg bg-white justify-center gap-3 px-3 py-2 rounded-3xl">
            <button onClick={()=>{setColor("wheat")}} className="px-4 py-1 rounded-full" style={{backgroundColor:"wheat", color: "black"}}>WHEAT</button>
          </div>
          <div className="flex flex-wrap shadow-lg bg-white justify-center gap-3 px-3 py-2 rounded-3xl">
            <button onClick={()=>{setColor("cyan")}} className="px-4 py-1 rounded-full" style={{backgroundColor:"cyan", color: "black"}}>CYAN</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
