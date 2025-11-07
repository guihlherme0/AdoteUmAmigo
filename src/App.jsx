
import './App.css'
import Navbar from './Components/Navbar'
import Hero from "./Components/Hero"
import Sobre from './Components/Sobre'
import Animais from './Components/Animais'
import Contato from './Components/Contato'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* Animais */}
      <Animais/>
      {/* Sobre/about*/}
      <Sobre/>
      {/* Contato */}
      <Contato/>
      <Footer/>
    </div>
  )
}

export default App
