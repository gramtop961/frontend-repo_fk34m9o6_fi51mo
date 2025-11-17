export default function About() {
  return (
    <section id="about" className="relative bg-gradient-to-b from-black to-zinc-950 text-white py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">O nás</h2>
            <p className="mt-4 text-zinc-300">
              Jsme kreativní AI studio, které spojuje design, technologií a výkon. Stavíme
              vizuály, které prodávají. Od produktových fotografií přes virtuální staging
              po krátká videa – vše rychle, konzistentně a ve špičkové kvalitě.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-zinc-300">
              <li className="rounded-md bg-black/40 border border-white/10 p-4">Prémiová kvalita</li>
              <li className="rounded-md bg-black/40 border border-white/10 p-4">Rychlá realizace</li>
              <li className="rounded-md bg-black/40 border border-white/10 p-4">Jasná komunikace</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
