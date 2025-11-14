import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Interface néon',
    desc: 'Jeu de lumières, défilements parallaxes et modales cinématiques.',
    img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Dashboard 3D',
    desc: 'Composants volumétriques avec états animés et perspectives dynamiques.',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Motion System',
    desc: 'Design system animé, transitions page-à-page orchestrées.',
    img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop'
  }
]

export default function Showcase() {
  return (
    <section id="showcase" className="relative bg-[#0B0B12] text-white py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold tracking-tight">
          Démonstrations visuelles
        </motion.h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="relative h-56">
                <img src={p.img} alt="" className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B12] via-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
