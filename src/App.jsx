import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

function Footer() {
  return (
    <footer className="bg-black text-zinc-400 py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} NextFrame Studio. Všechna práva vyhrazena.</p>
        <div className="text-sm">Dark mode • Prémiové AI studio</div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      {/* Wow efekt Před/Po je součástí karet služeb níže */}
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
