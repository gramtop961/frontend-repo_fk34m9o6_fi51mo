import { useState } from 'react'

export default function BeforeAfter({ before, after, labelBefore = 'Před', labelAfter = 'Po' }) {
  const [pos, setPos] = useState(50)

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
      <div className="relative aspect-[16/9] w-full select-none">
        <img src={after} alt={labelAfter} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <img src={before} alt={labelBefore} className="h-full w-full object-cover" />
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
          aria-label="Before after slider"
        />
        <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
          <div className="-ml-0.5 h-full w-1 bg-white/80 shadow-[0_0_0_1px_rgba(0,0,0,0.2)]" />
        </div>
        <div className="pointer-events-none absolute bottom-3 left-3 rounded-md bg-black/60 px-2 py-1 text-xs text-white">{labelBefore}</div>
        <div className="pointer-events-none absolute bottom-3 right-3 rounded-md bg-black/60 px-2 py-1 text-xs text-white">{labelAfter}</div>
      </div>
    </div>
  )
}
