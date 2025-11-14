import { motion } from 'framer-motion'
import { Sparkles, Zap, Box, Cpu, Infinity, Fingerprint } from 'lucide-react'

const items = [
  {
    icon: Sparkles,
    title: 'Micro-interactions raffinées',
    desc: 'Animations contextuelles et feedbacks tactiles pour une sensation de fluidité irréprochable.'
  },
  {
    icon: Zap,
    title: 'Transitions soyeuses',
    desc: 'Timing précis, easing naturels et orchestrations chorégraphiées pour guider l’attention.'
  },
  {
    icon: Box,
    title: '3D en temps réel',
    desc: 'Intégration Spline avec une scène immersive et interactive, optimisée pour la performance.'
  },
  {
    icon: Cpu,
    title: 'Architecture moderne',
    desc: 'React + Tailwind + Framer Motion. Composants accessibles, responsives et élégants.'
  },
  {
    icon: Infinity,
    title: 'Fluidité partout',
    desc: 'Animations GPU-friendly, layout adaptatif, 120fps sur les devices compatibles.'
  },
  {
    icon: Fingerprint,
    title: 'Identité forte',
    desc: 'Esthétique cyber-futuriste, contrastes maîtrisés et typographies expressives.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative bg-[#0B0B12] text-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold tracking-tight">
          Ce que vous allez ressentir
        </motion.h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl group-hover:bg-fuchsia-500/20 transition" />
              <it.icon className="h-6 w-6 text-fuchsia-400" />
              <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-white/70">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
