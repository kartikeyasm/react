import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/card.jsx"


function App() {
  const [count, setCount] = useState(0)
  const obj1={
    name: "KSM",
    age: 20
  };
  const obj2={
    name: "KSM",
    age: 19
  };
  const arr=[1,2,3,4,5];
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
    
      <Card userName="KSM" imgAdd="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600" someObj={obj1} l={arr}/>
      <Card userName="VSM" imgAdd="https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=600" someObj={obj2} l={arr}/>


    </>
  )
}

export default App
