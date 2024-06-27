import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]=useState(5)   //useState Hook=>   const[variable, updater]=useState(default value)

  //let counter=5
  function add(){
    if(counter<20){
      setCounter(counter+1)
    }
    //counter+=1
    //console.log("Value Added, new value",counter)
  }
  function remove(){
    if(counter>0){
      setCounter(counter-1)
    }
    
  }
  return (
    <>
      <h1>HELLO</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={add}>Add</button>
      <button onClick={remove}>Remove</button>
    </>
  )
}

export default App
