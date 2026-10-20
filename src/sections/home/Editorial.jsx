import { editorial } from '../../data/content'
import { useReveal } from '../../hooks/useReveal'
import { Img } from '../../components/ui/Img'
import { Button } from '../../components/ui/Button'

/**
 * The editorial banner (ref: "Zanerobe & Friends"): words on the left, three portraits fanned
 * on the right at their native size. On hover the fan opens a little.
 */
export function Editorial() {
  const ref = useReveal()
  return (
    <section ref={ref} className="mt-20 border-y border-line bg-paper lg:mt-28" aria-labelledby="ed-title">
      <div className="shell grid items-center gap-12 py-16 lg:grid-cols-[1fr_1.1fr] lg:py-20">
        <div data-reveal>
          <p className="caps ruled-label max-w-[320px] text-[10px] text-ink-soft">{editorial.kicker}</p>
          <h2 id="ed-title" className="display mt-6 text-[30px] sm:text-[44px]">
            The linen <span className="hand">capsule</span>
          </h2>
          <p className="mt-5 max-w-[44ch] text-[16.5px] leading-relaxed text-ink-soft">{editorial.body}</p>
          <Button to={editorial.to} className="mt-8" arrow>
            Explore the edit
          </Button>
        </div>
        <div className="group relative mx-auto flex h-[420px] w-full max-w-[600px] items-center justify-center sm:h-[480px]">
          {editorial.images.map((id, k) => (
            <div
              key={id}
              className="absolute w-[44%] max-w-[260px] overflow-hidden rounded-[4px] shadow-lift transition-transform duration-700 ease-[var(--ease-out)] [transform:translateX(var(--x))_rotate(var(--r))] group-hover:[transform:translateX(calc(var(--x)*1.25))_rotate(calc(var(--r)*1.4))]"
              style={{ '--x': `${(k - 1) * 62}%`, '--r': `${(k - 1) * 5}deg`, zIndex: k === 1 ? 2 : 1 }}
              data-reveal-frame
            >
              <Img id={id} alt="" sizes="260px" className="aspect-[3/4]" position="50% 20%" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
