import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B12]">
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <Testimonials />
      <CTA />
      <footer className="bg-[#0B0B12] border-t border-white/10 text-center text-white/50 py-10">
        Conçu avec amour par Flames.Blue — 2025
      </footer>
    </div>
  )
}

export default App
