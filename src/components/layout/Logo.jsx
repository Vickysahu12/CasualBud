import { Link } from 'react-router'
import { site } from '../../config/site'
import { cn } from '../../lib/cn'

// The client's logo (public/brand), in its own off-white for the dark ground. In the header
// the winged B sits beside the wordmark and the wing gives a small forward flick on hover;
// `full` shows the stacked lockup with "Dress your mood" (footer).
export function Logo({ className, full, size = 'md' }) {
  if (full) {
    return (
      <Link to="/" aria-label={`${site.name} home`} className={cn('press group inline-flex flex-col items-center gap-4', className)}>
        <img src="/brand/mark.png" alt="" width={204} height={104} draggable={false} className="h-14 w-auto transition-transform duration-500 ease-[var(--ease-out)] group-hover:translate-x-1.5" />
        <img src="/brand/wordmark-tagline.png" alt={site.name} width={424} height={66} draggable={false} className="h-12 w-auto" />
      </Link>
    )
  }
  return (
    <Link to="/" aria-label={`${site.name} home`} className={cn('press group inline-flex items-center gap-3', className)}>
      <img src="/brand/mark.png" alt="" width={204} height={104} draggable={false} className={cn('w-auto transition-transform duration-500 ease-[var(--ease-out)] group-hover:translate-x-1', size === 'sm' ? 'h-6' : 'h-7')} />
      <img src="/brand/wordmark.png" alt={site.name} width={424} height={35} draggable={false} className={cn('w-auto', size === 'sm' ? 'h-3' : 'h-3.5')} />
    </Link>
  )
}
