import './App.css'
import UserContextProvider from './context/UserContextProvider.jsx'
import {Login, Profile} from './components/index.js'
function App() {


  return (
    <UserContextProvider>
      <h1>Hello KSM</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
