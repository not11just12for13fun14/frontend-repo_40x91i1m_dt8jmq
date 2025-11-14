import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#features', label: 'Fonctionnalités' },
    { href: '#showcase', label: 'Showcase' },
    { href: '#testimonials', label: 'Avis' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 grid place-content-center ring-1 ring-white/20">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-white font-semibold tracking-tight">FLAMES.BLUE</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-white/80 hover:text-white transition">
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transition">
                Démarrer
              </a>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white/80 hover:text-white">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden px-4 sm:px-6 pb-4"
              >
                <div className="grid gap-2">
                  {links.map((l, i) => (
                    <motion.a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2 text-white/80 hover:text-white hover:bg-white/5"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      {l.label}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
