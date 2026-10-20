// Demo catalogue built from the client's photos (public/media/products/bNN-1 / bNN-2).
// `n` is the source photo number (src/assets/image/ImgNN); every photo is 360 x 480.
// `moods` drive the "Dress your mood" picker: easy, bold, sharp, rugged.
// Shape mirrors what a products API would return, so services/catalog.js can switch to fetch() later.
// Prices sit between ₹999 and ₹4,999; ratings and copy are sample data.

const TOPS = ['S', 'M', 'L', 'XL', 'XXL']
const WAIST = ['28', '30', '32', '34', '36', '38']

const CATEGORY = {
  shirts: { sizes: TOPS, includes: 'One shirt', care: ['Machine wash cold, inside out', 'Do not tumble dry', 'Iron on medium'] },
  polos: { sizes: TOPS, includes: 'One polo', care: ['Machine wash cold', 'Dry flat to keep the collar crisp', 'Iron on low'] },
  jackets: { sizes: TOPS, includes: 'One jacket', care: ['Dry clean or wipe clean', 'Store on a broad hanger', 'Keep away from direct heat'] },
  blazers: { sizes: TOPS, includes: 'One unstructured blazer', care: ['Dry clean only', 'Steam to refresh', 'Store on a broad hanger'] },
  trousers: { sizes: WAIST, includes: 'One pair of trousers', care: ['Machine wash cold', 'Hang to dry', 'Iron on medium along the crease'] },
}

const item = (category) => (p) => ({ category, ...CATEGORY[category], ...p, occasions: p.moods })
const shirt = item('shirts')
const polo = item('polos')
const jacket = item('jackets')
const blazer = item('blazers')
const trouser = item('trousers')

const raw = [
  trouser({ n: 1, name: 'Washed Relaxed Jeans', fabric: 'Denim', fit: 'Relaxed', color: 'Light Wash', hex: '#c9cfd0', moods: ['easy', 'rugged'], price: 1899, rating: 4.6, reviews: 132, blurb: 'Light-wash denim in a relaxed, tapered cut. Stacks neatly over white sneakers.' }),
  jacket({ n: 2, name: 'Suede Sherpa Jacket', fabric: 'Faux Suede', fit: 'Regular', color: 'Tan', hex: '#8a5634', moods: ['rugged'], price: 3999, compareAt: 4999, rating: 4.8, reviews: 96, bestseller: true, badge: 'Bestseller', blurb: 'Brushed faux suede with a sherpa collar and a two-way zip. Winter, solved.' }),
  shirt({ n: 3, name: 'Mint Jacquard Overshirt', fabric: 'Cotton Jacquard', fit: 'Relaxed', color: 'Mint', hex: '#cfd8c4', moods: ['easy'], price: 1699, rating: 4.6, reviews: 58, blurb: 'A mint jacquard overshirt to wear open over a black tee.' }),
  shirt({ n: 4, name: 'Monsoon Floral Shirt', fabric: 'Viscose', fit: 'Regular', color: 'Rust', hex: '#7a5a3a', moods: ['bold'], price: 1599, rating: 4.7, reviews: 84, family: 'floral', blurb: 'Big rust and teal blooms on a fluid viscose shirt.' }),
  shirt({ n: 5, name: 'Night Bloom Shirt', fabric: 'Viscose', fit: 'Regular', color: 'Black', hex: '#2d241f', moods: ['bold', 'sharp'], price: 1599, rating: 4.7, reviews: 112, family: 'floral', bestseller: true, blurb: 'Tan florals on black. The going-out shirt that works with chinos.' }),
  shirt({ n: 6, name: 'Patchwork Shirt', fabric: 'Cotton', fit: 'Relaxed', color: 'Multi', hex: '#5a5560', moods: ['bold'], price: 1799, rating: 4.5, reviews: 47, isNew: true, badge: 'New', blurb: 'Panels of check, print and solid stitched into one relaxed shirt.' }),
  shirt({ n: 7, name: 'Teal Buffalo Overshirt', fabric: 'Brushed Cotton', fit: 'Relaxed', color: 'Teal', hex: '#1d7b7f', moods: ['rugged', 'easy'], price: 1899, rating: 4.7, reviews: 73, family: 'check', blurb: 'A brushed buffalo check in teal and navy, heavy enough to layer.' }),
  shirt({ n: 8, name: 'Sky Camp Collar Shirt', fabric: 'Linen Blend', fit: 'Boxy', color: 'Sky', hex: '#b8cfe6', moods: ['easy'], price: 1299, rating: 4.6, reviews: 91, family: 'camp', blurb: 'A boxy half-sleeve camp collar in breezy sky linen.' }),
  shirt({ n: 9, name: 'Ash Jacquard Camp Shirt', fabric: 'Cotton Jacquard', fit: 'Boxy', color: 'Grey', hex: '#a7a7aa', moods: ['easy'], price: 1399, rating: 4.5, reviews: 52, family: 'camp', blurb: 'Tonal jacquard leaves on a pale grey camp collar shirt.' }),
  shirt({ n: 10, name: 'Shadow Floral Camp Shirt', fabric: 'Viscose', fit: 'Boxy', color: 'Black', hex: '#2a2a2c', moods: ['bold'], price: 1399, rating: 4.7, reviews: 88, family: 'camp', blurb: 'Grey florals on black, half sleeves, a relaxed camp collar.' }),
  shirt({ n: 11, name: 'Cocoa Floral Camp Shirt', fabric: 'Viscose', fit: 'Boxy', color: 'Cocoa', hex: '#6d5a52', moods: ['bold', 'easy'], price: 1399, rating: 4.6, reviews: 64, family: 'camp', blurb: 'Muted cocoa florals for days that need a print, not a statement.' }),
  shirt({ n: 12, name: 'Black Mandarin Linen Shirt', fabric: 'Linen', fit: 'Regular', color: 'Black', hex: '#1d1d1f', moods: ['sharp', 'easy'], price: 1599, rating: 4.8, reviews: 143, family: 'mandarin', bestseller: true, badge: 'Bestseller', blurb: 'A clean mandarin collar in black linen. Pair with ivory trousers.' }),
  shirt({ n: 13, name: 'Olive Mandarin Linen Shirt', fabric: 'Linen', fit: 'Regular', color: 'Olive', hex: '#4b4a33', moods: ['easy', 'rugged'], price: 1599, rating: 4.7, reviews: 77, family: 'mandarin', blurb: 'The mandarin linen shirt in deep olive.' }),
  shirt({ n: 14, name: 'Teal Mandarin Linen Shirt', fabric: 'Linen', fit: 'Regular', color: 'Teal', hex: '#3d5c66', moods: ['easy', 'sharp'], price: 1599, rating: 4.6, reviews: 59, family: 'mandarin', blurb: 'The mandarin linen shirt in a dusty teal.' }),
  shirt({ n: 15, name: 'Indigo Fade Shirt', fabric: 'Cotton', fit: 'Regular', color: 'Indigo', hex: '#4b5f9a', moods: ['bold', 'easy'], price: 1499, rating: 4.6, reviews: 61, blurb: 'An indigo ombre that fades from shoulder to hem.' }),
  shirt({ n: 16, name: 'Sky Paisley Shirt', fabric: 'Cotton', fit: 'Regular', color: 'Sky', hex: '#86a8d0', moods: ['easy'], price: 1399, rating: 4.5, reviews: 44, blurb: 'Faint paisleys on a washed sky blue cotton.' }),
  shirt({ n: 17, name: 'Sage Oxford Shirt', fabric: 'Cotton Oxford', fit: 'Slim', color: 'Sage', hex: '#9d9f8c', moods: ['sharp', 'easy'], price: 1499, rating: 4.7, reviews: 102, family: 'oxford', blurb: 'A slim sage oxford that looks pressed even when it is not.' }),
  shirt({ n: 18, name: 'Peach Oxford Shirt', fabric: 'Cotton Oxford', fit: 'Slim', color: 'Peach', hex: '#d9a083', moods: ['easy'], price: 1499, rating: 4.6, reviews: 68, family: 'oxford', blurb: 'The oxford in a warm peach. Good with beige or navy.' }),
  shirt({ n: 19, name: 'Ivory Oxford Shirt', fabric: 'Cotton Oxford', fit: 'Slim', color: 'Ivory', hex: '#ece3d0', moods: ['sharp', 'easy'], price: 1499, rating: 4.7, reviews: 117, family: 'oxford', blurb: 'The ivory oxford. The shirt everything else pairs with.' }),
  polo({ n: 20, name: 'Navy Stripe Knit Polo', fabric: 'Cotton Knit', fit: 'Regular', color: 'Navy', hex: '#3d4f86', moods: ['sharp', 'easy'], price: 1299, rating: 4.6, reviews: 71, family: 'knit-polo', blurb: 'A textured stripe knit with a contrast collar.' }),
  polo({ n: 21, name: 'Sage Tipped Knit Polo', fabric: 'Cotton Knit', fit: 'Regular', color: 'Sage', hex: '#8ea08d', moods: ['bold', 'easy'], price: 1299, rating: 4.5, reviews: 39, family: 'knit-polo', blurb: 'Sage stripes with a yellow-tipped collar and cuffs.' }),
  jacket({ n: 22, name: 'Mocha Leather Jacket', fabric: 'Faux Leather', fit: 'Regular', color: 'Mocha', hex: '#4a3a33', moods: ['rugged'], price: 4499, rating: 4.8, reviews: 63, family: 'leather', blurb: 'A soft faux leather trucker in deep mocha with chest pockets.' }),
  jacket({ n: 23, name: 'Olive Utility Jacket', fabric: 'Cotton Twill', fit: 'Regular', color: 'Olive', hex: '#6d6c4c', moods: ['rugged'], price: 2999, rating: 4.7, reviews: 55, blurb: 'A stand-collar utility jacket with four flap pockets.' }),
  jacket({ n: 24, name: 'Forest Leather Bomber', fabric: 'Faux Leather', fit: 'Regular', color: 'Forest', hex: '#2f3a24', moods: ['rugged', 'bold'], price: 4499, rating: 4.8, reviews: 48, family: 'leather', isNew: true, badge: 'New', blurb: 'A forest green bomber in supple faux leather with rib cuffs.' }),
  blazer({ n: 25, name: 'Olive Unstructured Blazer', fabric: 'Linen Blend', fit: 'Tailored', color: 'Olive', hex: '#454734', moods: ['sharp'], price: 3999, rating: 4.7, reviews: 52, family: 'blazer', blurb: 'No shoulder pads, no lining, all shape. Wear it over a tee.' }),
  blazer({ n: 26, name: 'Mint Unstructured Blazer', fabric: 'Linen Blend', fit: 'Tailored', color: 'Mint', hex: '#a9c2a0', moods: ['sharp', 'bold'], price: 3999, rating: 4.6, reviews: 37, family: 'blazer', blurb: 'The unstructured blazer in a fresh mint for summer weddings.' }),
  blazer({ n: 27, name: 'Bone Unstructured Blazer', fabric: 'Linen Blend', fit: 'Tailored', color: 'Bone', hex: '#e7e2d6', moods: ['sharp'], price: 3999, rating: 4.8, reviews: 66, family: 'blazer', bestseller: true, blurb: 'The bone blazer with a pocket square slot. Black tee, done.' }),
  blazer({ n: 28, name: 'Sand Unstructured Blazer', fabric: 'Linen Blend', fit: 'Tailored', color: 'Sand', hex: '#d2bb94', moods: ['sharp', 'easy'], price: 3999, rating: 4.7, reviews: 49, family: 'blazer', blurb: 'Warm sand linen with patch pockets.' }),
  trouser({ n: 29, name: 'Cream Parachute Cargos', fabric: 'Nylon Blend', fit: 'Relaxed', color: 'Cream', hex: '#ece5d4', moods: ['easy', 'rugged'], price: 1999, rating: 4.6, reviews: 88, isNew: true, badge: 'New', blurb: 'Lightweight cream cargos with toggle hems.' }),
  trouser({ n: 30, name: 'Black Wide Pleated Trousers', fabric: 'Poly Viscose', fit: 'Wide', color: 'Black', hex: '#232325', moods: ['sharp'], price: 1999, rating: 4.7, reviews: 74, blurb: 'A wide black pleated trouser that drapes and moves.' }),
  shirt({ n: 31, name: 'Rust Check Overshirt', fabric: 'Brushed Cotton', fit: 'Relaxed', color: 'Rust', hex: '#8a6650', moods: ['rugged'], price: 1899, rating: 4.6, reviews: 57, family: 'check', blurb: 'Rust and powder blue check in a heavy brushed cotton.' }),
  shirt({ n: 32, name: 'Ecru Linen Shirt', fabric: 'Linen', fit: 'Relaxed', color: 'Ecru', hex: '#e2dacb', moods: ['easy'], price: 1699, rating: 4.7, reviews: 83, blurb: 'Washed ecru linen with a soft collar and contrast cuffs.' }),
  shirt({ n: 33, name: 'Champagne Satin Shirt', fabric: 'Satin', fit: 'Regular', color: 'Champagne', hex: '#b7a487', moods: ['bold', 'sharp'], price: 1799, rating: 4.6, reviews: 66, blurb: 'Liquid champagne satin for the nights that need a little shine.' }),
  shirt({ n: 34, name: 'Slate Check Shirt', fabric: 'Cotton', fit: 'Regular', color: 'Slate', hex: '#7f8287', moods: ['rugged', 'sharp'], price: 1599, rating: 4.6, reviews: 51, family: 'check', blurb: 'A slate and white check that works under a jacket.' }),
  shirt({ n: 35, name: 'Navy Gingham Shirt', fabric: 'Cotton', fit: 'Regular', color: 'Navy', hex: '#3b4466', moods: ['easy', 'rugged'], price: 1599, rating: 4.7, reviews: 72, family: 'check', blurb: 'Navy and cream gingham, sleeves made to roll.' }),
  shirt({ n: 36, name: 'Sand Stripe Shirt', fabric: 'Cotton', fit: 'Relaxed', color: 'Sand', hex: '#b39f86', moods: ['easy'], price: 1499, rating: 4.5, reviews: 43, blurb: 'Fine sand stripes on a relaxed shirt. Wear it open.' }),
  shirt({ n: 37, name: 'Rose Velvet Shirt', fabric: 'Crushed Velvet', fit: 'Regular', color: 'Rose', hex: '#d3a2a2', moods: ['bold'], price: 1999, rating: 4.6, reviews: 38, blurb: 'Crushed rose velvet for parties you will talk about.' }),
  shirt({ n: 38, name: 'Plum Solid Shirt', fabric: 'Cotton', fit: 'Slim', color: 'Plum', hex: '#4a2b3c', moods: ['sharp'], price: 1499, rating: 4.6, reviews: 56, blurb: 'A deep plum shirt with a sharp collar.' }),
  shirt({ n: 39, name: 'Red Leaf Print Shirt', fabric: 'Viscose', fit: 'Regular', color: 'Red', hex: '#9b2f2b', moods: ['bold'], price: 1599, rating: 4.7, reviews: 61, family: 'floral', blurb: 'Bold red and cream leaves. Not for quiet days.' }),
  shirt({ n: 40, name: 'Black Essential Shirt', fabric: 'Cotton', fit: 'Slim', color: 'Black', hex: '#141416', moods: ['sharp'], price: 1299, rating: 4.8, reviews: 168, bestseller: true, badge: 'Bestseller', blurb: 'The black shirt. Slim, crisp, and right for everything.' }),
  trouser({ n: 41, name: 'Navy Tailored Trousers', fabric: 'Poly Viscose', fit: 'Straight', color: 'Navy', hex: '#24345a', moods: ['sharp'], price: 1799, rating: 4.7, reviews: 92, family: 'tailored', blurb: 'Straight-leg navy trousers with a clean front.' }),
  trouser({ n: 42, name: 'Plum Tailored Trousers', fabric: 'Poly Viscose', fit: 'Straight', color: 'Plum', hex: '#552232', moods: ['bold', 'sharp'], price: 1799, rating: 4.6, reviews: 41, family: 'tailored', blurb: 'The tailored trouser in a rich plum. Try it with a cream shirt.' }),
  trouser({ n: 43, name: 'Black Tailored Trousers', fabric: 'Poly Viscose', fit: 'Straight', color: 'Black', hex: '#1b1b1d', moods: ['sharp'], price: 1799, rating: 4.8, reviews: 134, family: 'tailored', bestseller: true, blurb: 'The black tailored trouser. Office, dinner, everything.' }),
  trouser({ n: 44, name: 'Slate Wide Trousers', fabric: 'Poly Viscose', fit: 'Wide', color: 'Slate', hex: '#6c7385', moods: ['sharp', 'easy'], price: 1899, rating: 4.6, reviews: 48, blurb: 'A slate blue wide trouser that breaks softly over loafers.' }),
  trouser({ n: 45, name: 'Black Pleated Trousers', fabric: 'Poly Viscose', fit: 'Relaxed', color: 'Black', hex: '#1f1f21', moods: ['sharp'], price: 1899, rating: 4.7, reviews: 63, family: 'pleated', blurb: 'Double pleats, a relaxed leg and a sharp crease.' }),
  trouser({ n: 46, name: 'Beige Tailored Trousers', fabric: 'Poly Viscose', fit: 'Straight', color: 'Beige', hex: '#c9bba1', moods: ['easy', 'sharp'], price: 1799, rating: 4.7, reviews: 77, family: 'tailored', blurb: 'The tailored trouser in beige, for linen-shirt days.' }),
  trouser({ n: 47, name: 'Off-White Tailored Trousers', fabric: 'Poly Viscose', fit: 'Straight', color: 'Off-White', hex: '#e6e1d8', moods: ['easy', 'sharp'], price: 1799, rating: 4.6, reviews: 58, family: 'tailored', blurb: 'Off-white trousers that make every shirt look better.' }),
  trouser({ n: 48, name: 'Grey Tailored Trousers', fabric: 'Poly Viscose', fit: 'Straight', color: 'Grey', hex: '#7c7d80', moods: ['sharp'], price: 1799, rating: 4.6, reviews: 66, family: 'tailored', blurb: 'Mid-grey trousers with a soft drape.' }),
  trouser({ n: 49, name: 'Olive Tailored Trousers', fabric: 'Poly Viscose', fit: 'Slim', color: 'Olive', hex: '#4f5244', moods: ['sharp', 'rugged'], price: 1799, rating: 4.6, reviews: 52, family: 'tailored', blurb: 'Slim olive trousers that sit just above the ankle.' }),
  trouser({ n: 50, name: 'Cream Tailored Trousers', fabric: 'Poly Viscose', fit: 'Straight', color: 'Cream', hex: '#d9cbb0', moods: ['easy'], price: 1799, rating: 4.7, reviews: 45, family: 'tailored', blurb: 'Cream trousers for summer, holidays and every linen shirt you own.' }),
  trouser({ n: 51, name: 'Khaki Pleated Trousers', fabric: 'Poly Viscose', fit: 'Relaxed', color: 'Khaki', hex: '#a39a7e', moods: ['easy', 'sharp'], price: 1899, rating: 4.6, reviews: 39, family: 'pleated', blurb: 'Khaki with front pleats and a relaxed leg.' }),
  trouser({ n: 52, name: 'Black Relaxed Trousers', fabric: 'Cotton Twill', fit: 'Relaxed', color: 'Black', hex: '#1e1e20', moods: ['easy', 'rugged'], price: 1599, rating: 4.5, reviews: 57, blurb: 'Easy black trousers with a drawcord, for sneakers.' }),
  trouser({ n: 53, name: 'Ivory Pleated Trousers', fabric: 'Poly Viscose', fit: 'Relaxed', color: 'Ivory', hex: '#ece5d6', moods: ['sharp', 'easy'], price: 1899, rating: 4.7, reviews: 46, family: 'pleated', blurb: 'Ivory pleated trousers with a high waist. Old-money summer.' }),
  polo({ n: 54, name: 'Taupe Tipped Knit Polo', fabric: 'Cotton Knit', fit: 'Regular', color: 'Taupe', hex: '#9b846f', moods: ['sharp', 'easy'], price: 999, compareAt: 1299, rating: 4.7, reviews: 84, family: 'knit-polo', blurb: 'A taupe knit polo with white tipping. Tuck it into pleated trousers.' }),
  blazer({ n: 55, name: 'Butter Unstructured Blazer', fabric: 'Linen Blend', fit: 'Tailored', color: 'Butter', hex: '#ece2b8', moods: ['sharp', 'bold'], price: 4299, rating: 4.7, reviews: 31, family: 'blazer', isNew: true, badge: 'New', blurb: 'The unstructured blazer in a soft butter yellow.' }),
]

const slugify = (s) => s.toLowerCase().replace(/[’']/g, '').replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
const id = (n) => `b${String(n).padStart(2, '0')}`

export const products = raw.map(({ n, ...p }) => ({
  id: id(n),
  slug: slugify(p.name),
  images: [`${id(n)}-1`, `${id(n)}-2`],
  cut: `${p.fit} fit`,
  model: p.category === 'trousers' ? '32' : 'M',
  ...p,
}))

export const getProduct = (pid) => products.find((p) => p.id === pid)
export const getProductBySlug = (slug) => products.find((p) => p.slug === slug)
