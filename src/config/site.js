// Brand-level settings. Change the name, offers, fees or contact details here, not in components.
export const site = {
  name: 'CasualBud',
  tagline: 'Dress your mood',
  currency: 'INR',
  locale: 'en-IN',
  freeShippingOver: 1499,
  shippingFee: 79,
  codFee: 49,
  stitchFee: 0,
  orderPrefix: 'CB',
  instagram: '@casualbud',
  phone: '+91 98200 61734',
  email: 'hello@casualbud.in',

  announcements: ['Free shipping on orders above ₹1,499', 'Shirt + trouser? 10% off the fit with code FIT10', 'New: the unstructured blazer in butter'],

  // Coupon codes accepted at bag / checkout (demo).
  coupons: {
    MOOD10: { type: 'percent', value: 10, label: '10% off everything' },
    FIT10: { type: 'percent', value: 10, label: '10% off a shirt and trouser fit', min: 2499 },
    LAYER500: { type: 'flat', value: 500, label: '₹500 off orders above ₹3,999', min: 3999 },
  },

  footer: {
    blurb: 'Shirts, trousers, knits and layers for men who dress by mood. Easy on Sunday, sharp on Monday.',
    columns: [
      {
        title: 'Shop',
        links: [
          { label: 'Shirts', to: '/shop/shirts' },
          { label: 'Polos', to: '/shop/polos' },
          { label: 'Trousers', to: '/shop/trousers' },
          { label: 'Jackets', to: '/shop/jackets' },
          { label: 'Blazers', to: '/shop/blazers' },
        ],
      },
      {
        title: 'Help',
        links: [
          { label: 'Size guide', to: '/help#sizing' },
          { label: 'Shipping', to: '/help#shipping' },
          { label: 'Returns', to: '/help#returns' },
          { label: 'Track order', to: '/account' },
          { label: 'Contact', to: '/help#contact' },
        ],
      },
      {
        title: 'CasualBud',
        links: [
          { label: 'About us', to: '/about' },
          { label: 'Build your fit', to: '/#fit' },
          { label: 'Wishlist', to: '/wishlist' },
          { label: 'Privacy', to: '/help#privacy' },
        ],
      },
    ],
    social: [
      { label: 'Instagram', icon: 'instagram', href: 'https://instagram.com' },
      { label: 'Facebook', icon: 'facebook', href: 'https://facebook.com' },
      { label: 'Pinterest', icon: 'pinterest', href: 'https://pinterest.com' },
      { label: 'YouTube', icon: 'youtube', href: 'https://youtube.com' },
    ],
  },
}
