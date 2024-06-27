import { useState, useCallback } from 'react'

function App() {
  const [length, setLength]= useState(8)
  const [numberAllowed, setNumberAllowed]= useState(false)
  const [charAllowed, setCharAllowed]= useState(false)
  const [password, setPassword]= useState(" ")

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(numberAllowed){
      str+="1234567890"
    }
    if(charAllowed){
      str+="!@#$%^&*()_-+=~`{}[]<>?,./'\"|\\"
    }
    for(let i=0;i<str.length;i++){
      let char = Math.floor(Math.random*(str.length+1))
      pass=str[char]
      setPassword(pass)
    }
  },[length,numberAllowed,charAllowed, setPassword])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-4xl text-center text-white'>Password Generator</h1>
        <div>
          <input type="text"  className='outline-none w-full py-1 px-3 bg-gray-100' value={password} placeholder='password' readOnly/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>COPY</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" onChange={(e)=>{setLength(e.target.value)}} min={6} max={100} value={length} className='cursor-ponter'/>
            <label htmlFor="">Length {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllowed} onChange={()=>{setNumberAllowed((prev)=>!prev)}} id="numberInput"/>
            <label htmlFor="">NUMBERS</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} onChange={()=>{setNumberAllowed((prev)=>!prev)}} id="charInput"/>
            <label htmlFor="">Special Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
