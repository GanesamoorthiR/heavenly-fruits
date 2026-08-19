# Heavenly Fruits — Website

Fresh Kodaikanal fruits, mountain honey, homemade chocolates & hill vegetables — online store.

Prices are not shown on the website. Customers add products to an order request, submit their
details, and your team follows up with pricing via WhatsApp/email/phone.

## Getting Started (Simple Steps)

1. **Install Node.js** (version 18 or newer) from https://nodejs.org
2. **Install project dependencies:**
   ```
   npm install
   ```
3. **Create your environment file** — copy `.env.example` to `.env.local`:
   ```
   cp .env.example .env.local
   ```
4. **Add your Resend API key** (get it from https://resend.com/api-keys) so order request emails
   can be sent to you:
   - `RESEND_API_KEY`
5. **Run the site locally:**
   ```
   npm run dev
   ```
   Open http://localhost:3000 in your browser.
6. **Push your code to GitHub** (create a new repository and push this project).
7. **Import the project into Vercel** at https://vercel.com/new — select your GitHub repo.
8. **Add the same environment variable** in Vercel → Project → Settings → Environment Variables.
9. **Deploy** — Vercel will build and give you a live link.

---

## Adding Your Product Images

All product images go in the `public/images/` folder. Placeholder images are already there so the
site works out of the box — just replace the files with your own photos (keep the same file names,
or update the `image` field in `lib/products.ts` if you use different names):

```
/public/images/logo.png                  → your logo (already added)
/public/images/hero-kodaikanal.jpg       → homepage banner
/public/images/butter-fruit.jpg          → butter fruit / avocado photo
/public/images/mountain-honey.jpg        → honey photo
/public/images/homemade-chocolate.jpg    → chocolate photo
/public/images/passion-fruit.jpg         → passion fruit photo
/public/images/kodaikanal-fruits.jpg     → fruits photo
/public/images/kodaikanal-vegetables.jpg → vegetables photo
```

Recommended image size: roughly 800×800px (square), under 500KB each, so the site stays fast.

---

## Managing Products (Name, Description, Image, Price)

Everything about your products lives in **one file**:

```
lib/products.ts
```

Prices are stored there for your own internal reference (so the field isn't lost), but they are
**not displayed anywhere** on the live site right now. If you ever want to turn price display back
on, open `lib/products.ts` and change:

```ts
export const SHOW_PRICES = false;   // change to true
```

Note: turning `SHOW_PRICES` on only flips this flag — you'd also want to bring back price display
in the product/cart components, since they were simplified to "Contact for Price" messaging.

To add a brand-new product, copy an existing product block in `lib/products.ts` and change the
values. To temporarily hide a product from the site, set `available: false`.

---

## Project Structure

```
app/
  page.tsx                    → Homepage
  products/[slug]/page.tsx    → Product detail page
  checkout/page.tsx           → Order request page
  order-success/page.tsx      → Order request confirmation page
  api/send-order-email        → Sends order request email via Resend

components/                   → Reusable UI components
lib/
  products.ts                 → ALL product data (edit this to manage products)
  cart.ts / cart-context.tsx  → Order-request list logic (stored in browser localStorage)
  email.ts                    → Order request email template & sending
  whatsapp.ts                 → WhatsApp order request message builder
  site-config.ts              → Business contact details (WhatsApp number, email)

public/images/                → All site images (replace these with your own)
```

---

## How the Order Flow Works

1. Customer browses products (no prices shown) and adds items to their order request.
2. On the checkout page, they fill in their name, phone, email, and delivery address.
3. Clicking **Submit Order Request**:
   - Sends an order request email to `prasmastrow46@gmail.com` (if `RESEND_API_KEY` is set)
   - Shows an Order Request Received confirmation page
4. From that confirmation page, the customer can tap **Send Order Details on WhatsApp** to also
   message you directly with the same order details.
5. Your team follows up with the customer to confirm pricing, availability, and finalize the order
   (payment can be arranged directly with the customer — there is no online payment on the site).

If the confirmation email fails to send for any reason, the request is still considered received —
the customer is simply encouraged to also send the WhatsApp message.

---

## Updating Your Contact Details

WhatsApp number and email are set in one place:

```
lib/site-config.ts
```

---

## Before Going Live

- Replace placeholder images in `public/images/` with real photos.
- Verify your sending domain in Resend, and update the `from` address in `lib/email.ts` if needed.
- Run `npm run build` locally once to make sure everything builds without errors before deploying.
