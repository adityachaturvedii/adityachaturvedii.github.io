import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Achievements } from './components/Achievements'
import { Portfolio } from './components/Portfolio'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className='bg-black'>
      <Navbar />
      <Hero />
      <About />
      <Achievements />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
