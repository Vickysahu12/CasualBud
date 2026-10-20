// Media manifest. Product photos are 3:4 and live in public/media/products as <id>.webp at the
// client's original 360 x 480 (one file serves every slot). `-1` is the full look, `-2` a close
// crop of the collar and fabric. tones.json holds each photo's average colour as a placeholder.
import tones from './tones.json'

export const imageSet = (id) => ({
  id,
  src: `/media/products/${id}.webp`,
  srcSm: `/media/products/${id}.webp`,
  tone: tones[id] ?? 'var(--color-sand)',
})
