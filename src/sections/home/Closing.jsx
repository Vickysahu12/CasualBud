import { Link } from 'react-router'
import { perks, testimonials, offers } from '../../data/content'
import { getProductSync } from '../../services/catalog'
import { useReveal } from '../../hooks/useReveal'
import { Img } from '../../components/ui/Img'
import { Icon } from '../../components/ui/Icon'
import { CopyCode } from '../../components/ui/CopyCode'

/**
 * The close: four promises on hairlines, customer notes (sample content) as quiet quotes
 * with the piece beside them, the codes,.
 */
export function Closing() {
  const ref = useReveal()
  return (
    <section ref={ref} className="pt-20 lg:pt-28" aria-labelledby="notes-title">
      <ul className="shell grid grid-cols-2 border-y border-line lg:grid-cols-4">
        {perks.map((p, i) => (
          <li key={p.title} className={i ? 'border-line max-lg:odd:border-l-0 lg:border-l' : ''}>
            <div className="group flex items-center gap-3.5 px-2 py-6 sm:px-6 lg:justify-center">
              <Icon name={p.icon} size={26} className="shrink-0 transition-transform duration-500 ease-[var(--ease-out)] group-hover:-translate-y-0.5 group-hover:-rotate-6" />
              <span>
                <span className="caps block text-[9.5px] text-ink">{p.title}</span>
                <span className="mt-0.5 block text-[13px] text-ink-soft">{p.body}</span>
              </span>
            </div>
          </li>
        ))}
      </ul>

      <div className="shell pt-20 lg:pt-28">
        <h2 id="notes-title" className="display text-center text-[30px] sm:text-[40px]">
          Worn by <span className="hand">the crew</span>
        </h2>
        <ul className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-2">
          {testimonials.map((t, i) => {
            const p = getProductSync(t.productId)
            return (
              <li key={t.name} className="group flex gap-5 border-t border-line pt-6" data-reveal style={{ '--reveal-delay': `${i * 70}ms` }}>
                <Link to={`/product/${p.slug}`} className="shrink-0 overflow-hidden" aria-label={p.name}>
                  <Img id={p.images[0]} alt="" sizes="96px" className="aspect-[3/4] w-24 rounded-[4px]" position="50% 25%" imgClassName="transition-transform duration-700 group-hover:scale-105" />
                </Link>
                <figure className="min-w-0">
                  <span className="flex" aria-label={`${t.rating} out of 5`}>
                    {Array.from({ length: 5 }, (_, k) => (
                      <Icon key={k} name="star" size={13} weight={k < t.rating ? 'fill' : 'regular'} />
                    ))}
                  </span>
                  <blockquote className="mt-3 text-[17px] leading-snug text-ink">“{t.text}”</blockquote>
                  <figcaption className="caps mt-4 text-[9.5px] text-ink-soft">
                    {t.name}, {t.city} · <Link to={`/product/${p.slug}`} className="link-line text-ink">{p.name}</Link>
                  </figcaption>
                </figure>
              </li>
            )
          })}
        </ul>

        <ul className="mt-16 grid gap-3 sm:grid-cols-3">
          {offers.map((o) => (
            <li key={o.code} className="flex items-center justify-between gap-3 rounded-[4px] border border-dashed border-line-strong bg-paper px-5 py-4">
              <p className="text-[14px] text-ink">{o.title}</p>
              <CopyCode code={o.code} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
