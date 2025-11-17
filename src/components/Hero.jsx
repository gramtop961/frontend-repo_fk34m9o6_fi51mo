import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/95" />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 sm:pt-40 sm:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 backdrop-blur">
              Moderní AI studio • Prémiová kvalita
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
              NextFrame Studio
            </h1>
            <p className="mt-4 text-lg text-zinc-300">
              Ukazujeme vizuální sílu AI. Interaktivní transformace, které mění obyčejné snímky v prémiové výstupy.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="pointer-events-auto inline-flex items-center rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-zinc-100 transition-colors">
                Objevit služby
              </a>
              <a href="#contact" className="pointer-events-auto inline-flex items-center rounded-md bg-white/10 text-white px-5 py-3 text-sm font-medium hover:bg-white/20 transition-colors">
                Nezávazná poptávka
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
