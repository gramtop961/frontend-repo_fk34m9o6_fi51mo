import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Služby', href: '#services' },
    { label: 'O nás', href: '#about' },
    { label: 'Kontakt', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-violet-500 to-cyan-400" />
          <span className="text-white font-semibold tracking-wide">NextFrame Studio</span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-zinc-300 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center rounded-md bg-white/10 text-white px-4 py-2 text-sm font-medium hover:bg-white/20 transition-colors">
            Kontaktovat
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white" aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-zinc-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-md bg-white/10 text-white px-4 py-2 text-sm font-medium hover:bg-white/20 transition-colors">
              Kontaktovat
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
