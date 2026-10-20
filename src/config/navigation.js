// Navigation content: the mega-menu panels (desktop), menu tabs (phone) and quick chips.

export const megaMenus = [
  {
    id: 'shop',
    label: 'Shop',
    to: '/shop',
    columns: [
      {
        title: 'Categories',
        items: [
          { label: 'Shirts', desc: 'Prints, linens, oxfords', image: 'b05-1', to: '/shop/shirts' },
          { label: 'Trousers', desc: 'Tailored to relaxed', image: 'b43-1', to: '/shop/trousers' },
          { label: 'Polos', desc: 'Knit and tipped', image: 'b54-1', to: '/shop/polos' },
          { label: 'Jackets', desc: 'Leather, suede, utility', image: 'b22-1', to: '/shop/jackets' },
          { label: 'Blazers', desc: 'Unstructured, unlined', image: 'b27-1', to: '/shop/blazers' },
        ],
      },
    ],
    feature: { image: 'b02-1', title: 'The Suede Sherpa Jacket', to: '/product/suede-sherpa-jacket' },
  },
  {
    id: 'mood',
    label: 'Moods',
    to: '/shop',
    columns: [
      {
        title: 'Dress your mood',
        items: [
          { label: 'Easy', desc: 'Linen, camp collars, cream', image: 'b08-1', to: '/shop?occasion=easy' },
          { label: 'Bold', desc: 'Prints, satin, velvet', image: 'b39-1', to: '/shop?occasion=bold' },
          { label: 'Sharp', desc: 'Blazers and pleats', image: 'b27-1', to: '/shop?occasion=sharp' },
          { label: 'Rugged', desc: 'Leather, checks, cargos', image: 'b24-1', to: '/shop?occasion=rugged' },
          { label: 'Bestsellers', desc: 'Most reordered', image: 'b40-1', to: '/shop?bestseller=1' },
        ],
      },
    ],
    feature: { image: 'b12-1', title: 'The Black Mandarin Linen Shirt', to: '/product/black-mandarin-linen-shirt' },
  },
]

export const navLinks = [
  { label: 'New in', to: '/shop?sort=new' },
  { label: 'Build your fit', to: '/#fit' },
  { label: 'Sale', to: '/shop?sale=1', accent: true },
]

export const quickChips = [
  { label: 'New in', to: '/shop?sort=new' },
  { label: 'Shirts', to: '/shop/shirts' },
  { label: 'Trousers', to: '/shop/trousers' },
  { label: 'Polos', to: '/shop/polos' },
  { label: 'Jackets', to: '/shop/jackets' },
  { label: 'Blazers', to: '/shop/blazers' },
  { label: 'Sale', to: '/shop?sale=1', accent: true },
]
