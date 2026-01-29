import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Logo from './components/Logo'
import Hero from './components/Landing_page/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Hero/>
    </>
  )
}

export default App
