import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative bg-[#0B0B12] text-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,197,94,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold tracking-tight">
          Prêt à créer quelque chose de spectaculaire ?
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-4 text-white/70">
          Dites-nous votre vision. Nous la transformons en une expérience mémorable.
        </motion.p>
        <motion.form initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="mx-auto mt-10 grid gap-4 sm:max-w-md">
          <input placeholder="Votre email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/40" />
          <button type="button" className="rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 px-6 py-3 text-base font-semibold text-white shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/40 transition">
            Envoyer
          </button>
        </motion.form>
        <p className="mt-6 text-xs text-white/50">Nous répondons sous 24h.</p>
      </div>
    </section>
  )
}
