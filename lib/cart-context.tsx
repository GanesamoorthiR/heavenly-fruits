"use client";

import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from "react";
import { CartItem, loadCart, saveCart, cartItemKey, cartCount } from "@/lib/cart";

type CartContextValue = {
  items: CartItem[];
  count: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (slug: string, variantLabel: string) => void;
  updateQuantity: (slug: string, variantLabel: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setItems(loadCart());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) saveCart(items);
  }, [items, hydrated]);

  const addItem = useCallback((item: Omit<CartItem, "quantity">, quantity = 1) => {
    setItems((prev) => {
      const key = cartItemKey(item.slug, item.variantLabel);
      const existing = prev.find((p) => cartItemKey(p.slug, p.variantLabel) === key);
      if (existing) {
        return prev.map((p) =>
          cartItemKey(p.slug, p.variantLabel) === key ? { ...p, quantity: p.quantity + quantity } : p
        );
      }
      return [...prev, { ...item, quantity }];
    });
    setIsCartOpen(true);
  }, []);

  const removeItem = useCallback((slug: string, variantLabel: string) => {
    setItems((prev) => prev.filter((p) => cartItemKey(p.slug, p.variantLabel) !== cartItemKey(slug, variantLabel)));
  }, []);

  const updateQuantity = useCallback((slug: string, variantLabel: string, quantity: number) => {
    setItems((prev) => {
      if (quantity <= 0) {
        return prev.filter((p) => cartItemKey(p.slug, p.variantLabel) !== cartItemKey(slug, variantLabel));
      }
      return prev.map((p) =>
        cartItemKey(p.slug, p.variantLabel) === cartItemKey(slug, variantLabel) ? { ...p, quantity } : p
      );
    });
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const value: CartContextValue = {
    items,
    count: cartCount(items),
    isCartOpen,
    openCart: () => setIsCartOpen(true),
    closeCart: () => setIsCartOpen(false),
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
