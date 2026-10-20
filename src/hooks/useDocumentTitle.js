import { useEffect } from 'react'
import { site } from '../config/site'

/** Sets the tab title: "Page | CasualBud", or the brand line on the home page. */
export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${site.name}` : `${site.name} | Dress Your Mood`
  }, [title])
}
