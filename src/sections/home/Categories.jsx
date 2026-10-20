import { Link } from 'react-router'
import { categories } from '../../data/content'
import { products } from '../../data/products'
import { useReveal } from '../../hooks/useReveal'
import { Img } from '../../components/ui/Img'
import { Icon } from '../../components/ui/Icon'

const count = (id) => products.filter((p) => p.category === id).length

// Shop by category: five portraits; on hover the photo eases in and the arrow tilts toward you.
export function Categories() {
  const ref = useReveal()
  return (
    <section ref={ref} className="shell pt-20 lg:pt-28" aria-labelledby="cat-title">
      <h2 id="cat-title" className="display text-center text-[18px] sm:text-[22px]">
        Shop by category
      </h2>
      <ul className="no-scrollbar -mx-4 mt-8 flex snap-x scroll-px-4 gap-3 overflow-x-auto px-4 sm:mx-0 sm:grid sm:grid-cols-5 sm:gap-4 sm:overflow-visible sm:px-0">
        {categories.map((c, i) => (
          <li key={c.id} className="w-[44vw] shrink-0 snap-start sm:w-auto" data-reveal style={{ '--reveal-delay': `${i * 70}ms` }}>
            <Link to={c.to} className="group block">
              <span className="relative block overflow-hidden rounded-[4px] bg-sand">
                <Img id={c.image} alt="" sizes="(min-width: 640px) 19vw, 44vw" className="aspect-[3/4]" position="50% 25%" imgClassName="transition-transform duration-[1200ms] ease-[var(--ease-out)] group-hover:scale-[1.05]" />
              </span>
              <span className="mt-3 flex items-center justify-between gap-2">
                <span className="caps text-[10.5px] text-ink">{c.label}</span>
                <span className="flex items-center gap-2 text-[12.5px] text-ink-soft">
                  {count(c.id)}
                  <Icon name="arrow" size={15} className="text-mood transition-transform duration-300 group-hover:-rotate-45" />
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
