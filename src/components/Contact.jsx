import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitted')
  }

  return (
    <section id="contact" className="relative bg-black text-white py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Kontakt</h2>
          <p className="mt-3 text-zinc-300">Napište nám krátkou zprávu – ozveme se do 24 hodin.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input className="rounded-md bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="Jméno" required />
            <input type="email" className="rounded-md bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="E‑mail" required />
          </div>
          <input className="rounded-md bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="Firma (volitelné)" />
          <textarea rows="5" className="rounded-md bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="Vaše zpráva" required />
          <div className="flex items-center justify-between">
            <p className="text-sm text-zinc-400">Nebojte, žádný spam. Pouze jasná odpověď.</p>
            <button type="submit" className="inline-flex items-center rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-zinc-100 transition-colors">Odeslat</button>
          </div>
          {status === 'submitted' && (
            <p className="text-sm text-emerald-400">Děkujeme! Brzy se ozveme.</p>
          )}
        </form>
      </div>
    </section>
  )
}
