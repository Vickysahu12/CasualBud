import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { carousels } from '../data/content'
import { HeroMood } from '../sections/home/HeroMood'
import { Carousel } from '../sections/home/Carousel'
import { Editorial } from '../sections/home/Editorial'
import { BuildFit } from '../sections/home/BuildFit'
import { Categories } from '../sections/home/Categories'
import { Closing } from '../sections/home/Closing'

export function HomePage() {
  useDocumentTitle()
  return (
    <>
      <HeroMood />
      <Carousel id="linen-title" {...carousels.linen} />
      <Editorial />
      <BuildFit />
      <Carousel id="sharp-title" {...carousels.sharp} />
      <Categories />
      <Closing />
    </>
  )
}
