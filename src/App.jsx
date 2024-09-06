import { useState } from 'react'
import './App.css'
import Nav from './components/navbar'
import Hello from './components/hello'
import About from './components/about'
import Skills from './components/skills'
import Footer from './components/footer'
import Project from './components/project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-black bg-cover bg-center w-full h-screen">
        <Nav />
        <Hello />
        <About />
        <Skills />
        <Project />
        <Footer />
      </div>
    </>
  )
}

export default App
