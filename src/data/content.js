// Editorial content for the storefront. Kept out of components so the client
// (or a CMS later) can change copy and imagery in one place.
// Image ids refer to public/media/products (bNN-1 full look, bNN-2 close crop). Every source
// photo is 360 x 480, so layouts never show one wider than about 400px.

// "Dress your mood": each mood sets the page accent and brings four looks.
export const moods = [
  { id: 'easy', label: 'Easy', accent: '#a9bb9c', line: 'Linen, camp collars and cream trousers for slow days.', images: ['b08-1', 'b32-1', 'b13-1', 'b29-1'], to: '/shop?occasion=easy' },
  { id: 'bold', label: 'Bold', accent: '#d9774f', line: 'Prints, satin and velvet for the nights that matter.', images: ['b39-1', 'b05-1', 'b37-1', 'b33-1'], to: '/shop?occasion=bold' },
  { id: 'sharp', label: 'Sharp', accent: '#a9bcd2', line: 'Unstructured blazers, pleats and the black shirt.', images: ['b27-1', 'b40-1', 'b25-1', 'b53-1'], to: '/shop?occasion=sharp' },
  { id: 'rugged', label: 'Rugged', accent: '#c9a77c', line: 'Leather, suede, brushed checks and cargos.', images: ['b22-1', 'b02-1', 'b07-1', 'b24-1'], to: '/shop?occasion=rugged' },
]

export const perks = [
  { icon: 'truck', title: 'Free shipping', body: 'On orders above ₹1,499' },
  { icon: 'returns', title: 'Easy 7-day returns', body: 'Free pickup from home' },
  { icon: 'cash', title: 'Cash on delivery', body: 'Pay when it arrives' },
  { icon: 'ruler', title: 'Size exchange', body: 'Wrong fit? Swap it free' },
]

export const categoryLabels = {
  shirts: 'Shirts',
  polos: 'Polos',
  jackets: 'Jackets',
  blazers: 'Blazers',
  trousers: 'Trousers',
}

export const categorySingular = {
  shirts: 'Shirt',
  polos: 'Polo',
  jackets: 'Jacket',
  blazers: 'Blazer',
  trousers: 'Trousers',
}

export const categories = [
  { id: 'shirts', label: 'Shirts', image: 'b05-1', to: '/shop/shirts' },
  { id: 'trousers', label: 'Trousers', image: 'b43-1', to: '/shop/trousers' },
  { id: 'polos', label: 'Polos', image: 'b54-1', to: '/shop/polos' },
  { id: 'jackets', label: 'Jackets', image: 'b22-1', to: '/shop/jackets' },
  { id: 'blazers', label: 'Blazers', image: 'b27-1', to: '/shop/blazers' },
]

// "Occasion" is the mood, stored in each product's `occasions`.
export const occasionLabels = {
  easy: 'Easy',
  bold: 'Bold',
  sharp: 'Sharp',
  rugged: 'Rugged',
}

export const occasions = moods

// Product carousels (ref: "Shop the Legacy Capsule", "Shop Nate's edit").
export const carousels = {
  linen: { title: 'Shop the linen capsule', query: { q: 'linen', sort: 'rating' } },
  sharp: { title: 'Shop the sharp edit', query: { occasion: ['sharp'], sort: 'rating' } },
}

export const collectionTabs = [
  { id: 'new', label: 'New in', query: { sort: 'new' } },
  { id: 'shirts', label: 'Shirts', query: { category: 'shirts', sort: 'rating' } },
  { id: 'trousers', label: 'Trousers', query: { category: 'trousers', sort: 'rating' } },
]

// The editorial banner (ref: "Zanerobe & Friends").
export const editorial = {
  kicker: 'CasualBud on concrete',
  title: 'The linen capsule',
  body: 'Shot against the walls of an old Mumbai mill: breathable linen in black, olive and teal, worn loose with cream trousers.',
  images: ['b12-1', 'b13-1', 'b14-1'],
  to: '/shop?q=linen',
}

// Build your fit: the shirts and trousers that can be paired in the builder.
export const fitBuilder = {
  tops: ['b19', 'b12', 'b05', 'b40', 'b17', 'b13', 'b33', 'b38', 'b35', 'b14', 'b18', 'b32'],
  bottoms: ['b43', 'b47', 'b46', 'b41', 'b53', 'b49', 'b42', 'b48', 'b50', 'b45'],
  code: 'FIT10',
}

// Sample customer notes (demo content).
export const testimonials = [
  { name: 'Arjun Mehta', city: 'Mumbai', rating: 5, productId: 'b12', text: 'The black mandarin linen shirt is in my suitcase on every trip. Looks pressed straight out of the bag.' },
  { name: 'Kabir Singh', city: 'Delhi', rating: 5, productId: 'b27', text: 'Wore the bone blazer with a black tee to a wedding cocktail. Four people asked where it was from.' },
  { name: 'Rohan Iyer', city: 'Bengaluru', rating: 4, productId: 'b43', text: 'Finally trousers that fit at the waist without needing a tailor. Ordered a second colour.' },
  { name: 'Faiz Khan', city: 'Hyderabad', rating: 5, productId: 'b02', text: 'The sherpa jacket is warm without being bulky. Suede feel is surprisingly good.' },
]

export const offers = [
  { title: '10% off everything', code: 'MOOD10' },
  { title: '10% off a shirt and trouser fit', code: 'FIT10' },
  { title: '₹500 off above ₹3,999', code: 'LAYER500' },
]

export const serviceRow = perks

// Review pool used to fill product pages (demo).
export const reviewPool = [
  { name: 'Aman K.', rating: 5, title: 'Great fit', text: 'Fits true to size and the shoulders sit right. The fabric feels premium.' },
  { name: 'Siddharth R.', rating: 5, title: 'Bought two colours', text: 'Liked it so much I ordered it again in another shade.' },
  { name: 'Nikhil P.', rating: 4, title: 'Slightly long', text: 'Sleeves are a little long on me, but rolled up it looks great.' },
  { name: 'Varun S.', rating: 5, title: 'Fast delivery', text: 'Arrived in three days, well packed. Quality is better than expected.' },
  { name: 'Ishaan M.', rating: 4, title: 'Good value', text: 'Neat stitching, colour exactly as shown. Would buy again.' },
]

export const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'new', label: 'New in' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

export const priceBands = [
  { id: 'u1499', label: 'Under ₹1,500', min: 0, max: 1499 },
  { id: '1500-1999', label: '₹1,500 to ₹1,999', min: 1500, max: 1999 },
  { id: '2000-3499', label: '₹2,000 to ₹3,499', min: 2000, max: 3499 },
  { id: '3500-4999', label: '₹3,500 and above', min: 3500, max: 4999 },
]

// Tops, body measurements in inches: chest, waist, shirt length.
export const sizeChart = [
  ['S', '38', '32', '28'],
  ['M', '40', '34', '28.5'],
  ['L', '42', '36', '29'],
  ['XL', '44', '38', '29.5'],
  ['XXL', '46', '40', '30'],
]
