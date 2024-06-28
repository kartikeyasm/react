import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [len, setLen] = useState(8)
  const [numAllowed, setNum] = useState(false)
  const [charAllowed, setChar] = useState(false)
  const [password, setPassword] = useState('')


  //useCallBack() hook  [Used to optimize the code by caching the function defination between re-renders]
  const passwordGenerator= useCallback(()=>{
    let pass=""
    let str="qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM"
    if(numAllowed){
      str+="1234567890"
    }
    if(charAllowed){
      str+="`~!@#$%^&*()_-+={}[]:;'\"<>.,?/\\|"
    }
    let lenStr=str.length
    for(let i=0; i<len;i++){
      pass+=str[Math.floor(Math.random()*(lenStr+1))]
    }
    setPassword(pass)
  }, [len, numAllowed, charAllowed, setPassword])       // function= useCallback(function, [dependency1,dependency2,dependency_n])
  


  //useEffect Hook [used to run the prog as soon as there our page gets loaded or if there is any change in its dependencies]
  useEffect(()=>{passwordGenerator()}, [len, numAllowed, charAllowed, passwordGenerator])
  

  //useRef is used to take reference of any element on the web page and can be manipulated easily
  const passwordRef= useRef(null)

  const copyPasswordToClipborad= useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)   //Used to access clipboard [can be done without useRef byt useRef increases the UI experience]
  },[password])

  return (
    <>
      <div className='text-center w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-4xl text-center text-white my-3' >Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text" 
            value={password} 
            className='outline-none w-full py-1 px-3 my-5' 
            placeholder='Password' 
            readOnly
            ref={passwordRef}/>
          <button 
            id='btn'
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyPasswordToClipborad}>
            COPY
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1' >
            <input type="range" min={8} max={100} value={len} className='cursor-pointer' onChange={(e)=>{setLen(e.target.value)}}/>
            <label>Length {len}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox" defaultChecked={numAllowed} id="numberAllowed" onChange={()=>{
              setNum((prev)=>!prev)
            }}/>
            <label htmlFor="numberAllowed">Numbers</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox" defaultChecked={numAllowed} id="charAllowed" onChange={()=>{
              setChar((prev)=>!prev)
            }}/>
            <label htmlFor="charAllowed">Special Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
