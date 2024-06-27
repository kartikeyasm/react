import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter]=useState(0)   // let [variable, function]=useState(defaultVariable)

  //let counter=5
  function add(){
    if(counter>=20){
      setCounter(20)
      return
    }
    setCounter(++counter)
  }
  function dec(){
    if(counter<=0){
      setCounter(0)
      return
    }
    setCounter(--counter)
  }
  

  return (
    <>
      <h1>Hello</h1> 
      <h2>Counter Value: <b>{counter}</b> </h2>
      <button onClick={add}>Add Value</button>
      <button onClick={dec}>Decrease Value</button>
      <h1>{counter}</h1>
    </>
  )
}

export default App
