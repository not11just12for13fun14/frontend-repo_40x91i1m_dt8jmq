import { motion } from 'framer-motion'

const quotes = [
  {
    name: 'Eliott, Directeur Produit',
    text: 'Une sensation de douceur et de contrôle. On dirait une interface vivante.'
  },
  {
    name: 'Lina, Designer',
    text: 'Le souci du détail dans les micro-interactions est remarquable.'
  },
  {
    name: 'Malo, CTO',
    text: 'Des perfs au top avec une vraie identité visuelle.'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-[#0B0B12] text-white py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold tracking-tight">
          Ils en parlent mieux que nous
        </motion.h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={q.name}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <p className="text-white/80">“{q.text}”</p>
              <footer className="mt-4 text-sm text-white/60">{q.name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
