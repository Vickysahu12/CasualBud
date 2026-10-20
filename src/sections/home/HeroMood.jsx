import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { moods } from '../../data/content'
import { products } from '../../data/products'
import { formatPrice } from '../../lib/format'
import { Img } from '../../components/ui/Img'
import { Button } from '../../components/ui/Button'
import { cn } from '../../lib/cn'

const DURATION = 6500
const ease = [0.23, 1, 0.32, 1]
const byImage = Object.fromEntries(products.map((p) => [p.images[0], p]))
const OFFSET = ['lg:mt-0', 'lg:mt-14', 'lg:mt-6', 'lg:mt-20']

/**
 * Dress your mood. The tagline, set wide like the wordmark, with the mood written into it in
 * its own colour. Four moods (Easy, Bold, Sharp, Rugged) each bring four looks and repaint the
 * page accent, so buttons, underlines and the italic word all follow the mood. The looks rise
 * in one after another on a staggered baseline; each names its piece on hover. Moods advance
 * on a timer until he picks one.
 */
export function HeroMood() {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState(false)
  const mood = moods[index]

  // The mood colours the whole page.
  useEffect(() => {
    document.documentElement.style.setProperty('--color-mood', mood.accent)
  }, [mood.accent])

  const choose = (i) => {
    setPicked(true)
    setIndex(i)
  }

  return (
    <section className="group/hero relative overflow-hidden" aria-labelledby="hero-title">
      <img src="/brand/mark.png" alt="" aria-hidden="true" className="pointer-events-none absolute top-10 -right-24 w-[720px] max-w-none opacity-[0.035]" />

      <div className="shell relative pt-10 pb-14 lg:pt-14 lg:pb-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="caps ruled-label max-w-[320px] text-[10px] text-ink-soft">The new season</p>
            <h1 id="hero-title" className="display mt-6 text-[34px] sm:text-[52px] lg:text-[clamp(52px,5.2vw,78px)]">
              Dress your
              <span className="relative ml-[0.3em] inline-flex h-[1.15em] overflow-hidden align-bottom" aria-live="polite">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={mood.id}
                    className="hand block pr-[0.1em] text-[1.18em] leading-[1]"
                    initial={reduce ? { opacity: 0 } : { y: '100%' }}
                    animate={reduce ? { opacity: 1 } : { y: '0%' }}
                    exit={reduce ? { opacity: 0 } : { y: '-100%' }}
                    transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
                  >
                    {mood.label.toLowerCase()}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
            <AnimatePresence mode="wait" initial={false}>
              <motion.p key={mood.id} className="mt-4 max-w-[46ch] text-[17px] text-ink-soft" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
                {mood.line}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Mood picker */}
          <div className="flex flex-col gap-4 lg:items-end">
            <div role="radiogroup" aria-label="Pick a mood" className="grid grid-cols-4 gap-1 rounded-[6px] border border-line p-1">
              {moods.map((m, i) => {
                const on = i === index
                return (
                  <button
                    key={m.id}
                    type="button"
                    role="radio"
                    aria-checked={on}
                    onClick={() => choose(i)}
                    className={cn('relative isolate flex h-11 items-center justify-center gap-2 overflow-hidden rounded-[4px] px-4 text-[14px] font-semibold transition-colors duration-300 sm:px-6', on ? 'text-bone' : 'text-ink-soft hover:text-ink')}
                  >
                    {on && <motion.span layoutId="mood-pill" className="absolute inset-0 -z-10 rounded-[4px] bg-ink" transition={reduce ? { duration: 0 } : { type: 'spring', duration: 0.45, bounce: 0.12 }} />}
                    <span className="size-2 rounded-full transition-colors" style={{ backgroundColor: m.accent }} />
                    {m.label}
                    {on && !picked && (
                      <span
                        key={`${m.id}-${index}`}
                        aria-hidden="true"
                        className="absolute inset-x-2 bottom-1 h-0.5 origin-left rounded-full group-hover/hero:[animation-play-state:paused]"
                        style={{ backgroundColor: m.accent, ...(reduce ? { transform: 'scaleX(1)' } : { animation: `progress ${DURATION}ms linear forwards` }) }}
                        onAnimationEnd={() => setIndex((index + 1) % moods.length)}
                      />
                    )}
                  </button>
                )
              })}
            </div>
            <Button to={mood.to} arrow>
              Shop {mood.label.toLowerCase()}
            </Button>
          </div>
        </div>

        {/* The looks */}
        <ul className="no-scrollbar -mx-4 mt-10 flex snap-x scroll-px-4 gap-3 overflow-x-auto px-4 sm:mx-0 sm:grid sm:grid-cols-4 sm:overflow-visible sm:px-0 lg:mt-12 lg:gap-5">
          {mood.images.map((id, k) => {
            const p = byImage[id]
            return (
              <li key={k} className={cn('w-[62vw] shrink-0 snap-start sm:w-auto', OFFSET[k])}>
                <Link to={`/product/${p.slug}`} className="group relative block overflow-hidden rounded-[4px] bg-sand" aria-label={p.name}>
                  <div className="relative aspect-[3/4]">
                    <AnimatePresence initial={false}>
                      <motion.div
                        key={`${mood.id}-${id}`}
                        className="absolute inset-0"
                        initial={reduce ? { opacity: 0 } : { opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
                        animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
                        exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.4 } }}
                        transition={{ duration: 0.85, ease, delay: reduce ? 0 : k * 0.09 }}
                      >
                        <Img id={id} alt="" sizes="(min-width: 640px) 24vw, 62vw" priority className="h-full w-full" position="50% 20%" imgClassName="transition-transform duration-[1200ms] ease-[var(--ease-out)] group-hover:scale-[1.04]" />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <span className="absolute inset-x-3 bottom-3 flex translate-y-2 items-center justify-between gap-3 rounded-[4px] bg-bone/85 px-3 py-2 opacity-0 backdrop-blur-md transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100 max-sm:translate-y-0 max-sm:opacity-100">
                    <span className="truncate text-[13px] text-ink">{p.name}</span>
                    <span className="shrink-0 text-[13px] font-semibold text-ink tabular-nums">{formatPrice(p.price)}</span>
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
