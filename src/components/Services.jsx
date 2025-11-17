import { Camera, Home, Video } from 'lucide-react'
import BeforeAfter from './BeforeAfter'

const demos = {
  product: {
    before: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1600&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop',
  },
  staging: {
    before: 'https://images.unsplash.com/photo-1521783988139-893ce4a69d48?q=80&w=1600&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop',
  },
  video: {
    before: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600&auto=format&fit=crop',
  },
}

const cards = [
  {
    icon: Camera,
    title: 'AI Produktová Fotografie',
    desc: 'Pro e‑shopy: proměníme obyčejné fotky v prémiové produktové vizuály připravené k prodeji.',
    demo: demos.product,
  },
  {
    icon: Home,
    title: 'AI Virtuální Staging',
    desc: 'Pro realitní makléře: prázdný byt během chvíle zařídíme a prodáme emoci, ne metr čtvereční.',
    demo: demos.staging,
  },
  {
    icon: Video,
    title: 'AI Tvorba Videa',
    desc: 'Pro sociální sítě: krátká, dynamická videa, která budují značku a přivádí pozornost.',
    demo: demos.video,
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-black text-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Služby</h2>
          <p className="mt-3 text-zinc-300">Tři oblasti, jedna kvalita. Prémiové výstupy připravené k použití.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((c, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <c.icon className="text-cyan-300" />
                <h3 className="text-xl font-medium">{c.title}</h3>
              </div>
              <p className="mt-2 text-zinc-300">
                {c.desc}
              </p>
              <div className="mt-4">
                <BeforeAfter before={c.demo.before} after={c.demo.after} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
