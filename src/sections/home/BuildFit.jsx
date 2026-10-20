import { useState } from 'react'
import { Link } from 'react-router'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { fitBuilder } from '../../data/content'
import { getProductSync } from '../../services/catalog'
import { useCart } from '../../features/cart/CartContext'
import { useToast } from '../../features/toast/Toast'
import { formatPrice } from '../../lib/format'
import { Img } from '../../components/ui/Img'
import { Icon } from '../../components/ui/Icon'
import { Button } from '../../components/ui/Button'
import { CopyCode } from '../../components/ui/CopyCode'
import { cn } from '../../lib/cn'

const tops = fitBuilder.tops.map(getProductSync)
const bottoms = fitBuilder.bottoms.map(getProductSync)

/** One half of the fit: a framed crop of the photo with arrows either side and a swatch row. */
function Picker({ list, index, setIndex, part, size, setSize, sizes }) {
  const reduce = useReducedMotion()
  const [dir, setDir] = useState(1)
  const p = list[index]
  const go = (d) => {
    setDir(d)
    setIndex((index + d + list.length) % list.length)
  }
  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 sm:gap-5">
      <button type="button" onClick={() => go(-1)} aria-label={`Previous ${part}`} className="press grid size-11 place-items-center rounded-full border border-line-strong text-ink transition-colors hover:border-mood hover:bg-mood hover:text-bone">
        <Icon name="caret-left" size={16} weight="bold" />
      </button>
      <div className={cn('relative mx-auto aspect-[3/2] w-full max-w-[300px] overflow-hidden bg-sand', part === 'top' ? 'rounded-t-[4px]' : 'rounded-b-[4px]')}>
        <AnimatePresence initial={false} custom={dir}>
          <motion.div
            key={p.id}
            className="absolute inset-0"
            initial={reduce ? { opacity: 0 } : { x: `${dir * 100}%` }}
            animate={reduce ? { opacity: 1 } : { x: '0%' }}
            exit={reduce ? { opacity: 0 } : { x: `${dir * -100}%` }}
            transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
          >
            <Img id={p.images[0]} alt={p.name} sizes="300px" className="h-full w-full" position={part === 'top' ? '50% 28%' : '50% 78%'} />
          </motion.div>
        </AnimatePresence>
      </div>
      <button type="button" onClick={() => go(1)} aria-label={`Next ${part}`} className="press grid size-11 place-items-center rounded-full border border-line-strong text-ink transition-colors hover:border-mood hover:bg-mood hover:text-bone">
        <Icon name="caret-right" size={16} weight="bold" />
      </button>
      <div className="col-span-3 mt-1 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        <Link to={`/product/${p.slug}`} className="link-line text-[14px] text-ink">
          {p.name}
        </Link>
        <span className="text-[14px] font-semibold text-ink tabular-nums">{formatPrice(p.price)}</span>
        <label className="flex items-center gap-2 text-[13px] text-ink-soft">
          {part === 'top' ? 'Size' : 'Waist'}
          <select value={size} onChange={(e) => setSize(e.target.value)} className="h-8 rounded-[4px] border border-line-strong bg-paper px-2 text-[13px] font-semibold text-ink outline-none focus:border-mood">
            {sizes.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
      </div>
    </div>
  )
}

/**
 * Build your fit: pick a shirt and a trouser and see them stacked as one outfit, the top
 * cropped to the shirt and the bottom to the trouser. Arrows (or the dots) swap each half
 * with a slide. The total updates, and "Add the fit" puts both in the bag; FIT10 takes 10% off.
 */
export function BuildFit() {
  const [ti, setTi] = useState(0)
  const [bi, setBi] = useState(0)
  const [topSize, setTopSize] = useState('M')
  const [waist, setWaist] = useState('32')
  const { add, setOpen } = useCart()
  const { show } = useToast()
  const top = tops[ti]
  const bottom = bottoms[bi]
  const total = top.price + bottom.price

  const shuffle = () => {
    setTi(Math.floor(Math.random() * tops.length))
    setBi(Math.floor(Math.random() * bottoms.length))
  }
  const addFit = () => {
    add(top.id, topSize)
    add(bottom.id, waist)
    show({ title: 'Your fit is in the bag', body: `Use ${fitBuilder.code} for 10% off`, image: top.images[0], action: { label: 'View bag', onClick: () => setOpen(true) } })
  }

  return (
    <section id="fit" className="shell scroll-mt-28 pt-20 lg:pt-28" aria-labelledby="fit-title">
      <div className="grid items-center gap-12 rounded-[6px] border border-line bg-paper p-5 sm:p-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16 lg:p-14">
        <div>
          <p className="caps ruled-label max-w-[280px] text-[10px] text-ink-soft">Shirt + trouser</p>
          <h2 id="fit-title" className="display mt-6 text-[30px] sm:text-[44px]">
            Build your <span className="hand">fit</span>
          </h2>
          <p className="mt-4 max-w-[42ch] text-[16px] leading-relaxed text-ink-soft">Flick through shirts and trousers until the outfit clicks. Add both in one go and take 10% off the fit.</p>
          <div className="mt-8 rounded-[4px] border border-line p-5">
            <p className="flex items-baseline justify-between text-[14px] text-ink-soft">
              The fit
              <span key={total} className="anim-fade-in text-[26px] font-semibold text-ink tabular-nums">
                {formatPrice(total)}
              </span>
            </p>
            <p className="mt-1 text-right text-[13px] text-mood">{formatPrice(Math.round(total * 0.9))} with {fitBuilder.code}</p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Button onClick={addFit} arrow className="flex-1">
                Add the fit
              </Button>
              <CopyCode code={fitBuilder.code} />
            </div>
            <button type="button" onClick={shuffle} className="caps press mt-4 flex items-center gap-2 text-[10px] text-ink-soft transition-colors hover:text-mood">
              <Icon name="shuffle" size={16} /> Surprise me
            </button>
          </div>
        </div>

        <div className="space-y-1">
          <Picker list={tops} index={ti} setIndex={setTi} part="top" size={topSize} setSize={setTopSize} sizes={tops[0].sizes} />
          <div className="h-3" />
          <Picker list={bottoms} index={bi} setIndex={setBi} part="bottom" size={waist} setSize={setWaist} sizes={bottoms[0].sizes} />
        </div>
      </div>
    </section>
  )
}
