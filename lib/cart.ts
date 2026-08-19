export type CartItem = {
  slug: string;
  name: string;
  image: string;
  variantLabel: string;
  quantity: number;
};

const CART_KEY = "heavenly-fruits-cart";

export function loadCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(CART_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

export function saveCart(items: CartItem[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CART_KEY, JSON.stringify(items));
  } catch {
    // ignore storage errors (e.g. private browsing quota)
  }
}

export function cartItemKey(slug: string, variantLabel: string) {
  return `${slug}__${variantLabel}`;
}

export function cartCount(items: CartItem[]) {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}
