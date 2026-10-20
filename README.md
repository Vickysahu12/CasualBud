# CasualBud

A demo storefront for CasualBud, "Dress your mood": shirts, polos, trousers, jackets and unstructured blazers for men. 55 pieces from ₹999 to ₹4,999.

## Run it

```bash
npm install
npm run dev
```

Build with `npm run build`, then preview with `npm run preview`.

## What works

- **Home:**
  - "Dress your mood" hero. Picking Easy, Bold, Sharp or Rugged changes the looks and the site's accent colour.
  - Product carousels with a progress bar, and the linen capsule editorial.
  - "Build your fit": pair a shirt and a trouser and add both, with FIT10 for 10% off.
  - Categories, promises, customer notes, coupon codes and an Instagram wall.
- **Shop:**
  - Category pages, with filters in the URL: fabric, mood, colour, price.
  - Sort, and search with suggestions.
- **Product page:**
  - Gallery with zoom, colour siblings and size picker (S to XXL for tops, waist 28 to 38 for trousers).
  - Size guide, pincode check, reviews, related and recently viewed.
- **Bag:**
  - Drawer and full page.
  - Free shipping progress over ₹1,499.
  - Coupons: `MOOD10`, `FIT10` (₹2,499+), `LAYER500` (₹3,999+).
- **Checkout:**
  - Address with pincode autofill, then UPI, card, net banking or COD (₹49).
  - Order confirmation and order history on this device.
- **Also:** wishlist, account, help/FAQ, about us, a 404 page and an error page.

All data is local (`src/data`). The cart, wishlist and orders are saved in localStorage. No real payment is taken. Reviews and customer notes are sample content.

## Stack

- Vite, React 19, React Router 7 and Tailwind CSS v4.
- Motion, Lenis and Phosphor icons.
- Michroma and Barlow fonts.
