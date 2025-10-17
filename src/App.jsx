
import './App.css'
import Navbar from './Components/Navbar'
import Hero from "./Components/Hero"
import Sobre from './Components/Sobre'
import Animais from './Components/Animais'

function App() {
  return (
    <div>
      {/* Navbardisney

      */}
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* Animais */}
      <Animais/>
      {/* Sobre/about*/}
      <Sobre/>
    </div>
  )
}

export default App
