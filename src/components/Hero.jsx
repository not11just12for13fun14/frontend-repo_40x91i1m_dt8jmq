import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0B0B12] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#0B0B12]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500 animate-pulse" /> Nouvelle ère d'expériences web
          </span>
          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
            Le futur est interactif, fluide et en 3D
          </h1>
          <p className="mt-6 text-white/70 text-lg">
            Un mélange d'animations subtiles, de transitions soyeuses et d'interactions 3D en temps réel. Tout est conçu pour vous époustoufler.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#showcase" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 px-6 py-3 text-base font-semibold text-white shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/40 transition">
              Voir la démo
            </a>
            <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white/90 hover:bg-white/10 transition">
              Explorer les fonctionnalités
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
