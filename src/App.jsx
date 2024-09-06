import { useState } from 'react'
import './App.css'
import Nav from './components/navbar'
import Hello from './components/hello'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-black bg-cover bg-center w-full h-screen">
        <Nav />
        <Hello />    
      </div>
    </>
  )
}

export default App
